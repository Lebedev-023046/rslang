/* eslint-disable @typescript-eslint/space-before-function-paren */

import {
  IData,
  ISigninRequest,
  ISigninResponse,
  IResponseError,
  IUserRequest,
  IUserResponse
} from '../interfaces/IData'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class Api {
  private static readonly URL = 'https://react-rslang-words.herokuapp.com'
  private static readonly WORDS = `${Api.URL}/words`
  private static readonly USERS = `${Api.URL}/users`
  private static readonly SIGNIN = `${Api.URL}/signin`

  /**  Возвращает массив слов */
  static async getWords(group: string, page: string): Promise<IData[]> {
    const response = await fetch(`${Api.WORDS}?group=${group}&page=${page}`)
    return await response.json()
  }

  /**  Возвращает слово по ID */
  static async getWord(id: string): Promise<IData> {
    const response = await fetch(`${Api.WORDS}/${id}`)
    return await response.json()
  }

  /** Создает пользователя и возвращает
  { name: string,
  email: string,
  id: string } или описание ошибки */
  static async createUser(
    newUser: IUserRequest
  ): Promise<IUserResponse | IResponseError> {
    const response = await fetch(Api.USERS, {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    const status = response.status
    if (status === 417) return 'user with this e-mail exists'
    const user = await response.json()
    if (status === 422) return user.error.errors[0].message
    return user
  }

  /** Вход в аккаунт. Если email или пароль неверны вернет описание ошибки(строку) */
  static async signIn(
    signinData: ISigninRequest
  ): Promise<ISigninResponse | IResponseError> {
    const response = await fetch(Api.SIGNIN, {
      method: 'POST',
      body: JSON.stringify(signinData),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    if (response.status !== 200) return 'Incorrect e-mail or password'
    const data: ISigninResponse = await response.json()
    Api.setTokensAndId(data.token, data.refreshToken, data.userId)
    console.log(data.token)

    return data
  }

  /** Возвращает {
  "name": "string",
  "email": "string",
  "password": "string"
  }
  или описание ошибки (строку)
*/
  static async getUser(id: string): Promise<IUserResponse | IResponseError> {
    const currentToken = Api.getCurrentToken()
    console.log(currentToken)

    const response = await fetch(`${Api.USERS}/${id}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${currentToken}`,
        Accept: 'application/json'
      }
    })
    const status = response.status
    if (status === 401) return 'Access token is missing or invalid'
    if (status !== 200) return 'User not found'
    return await response.json()
  }

  /** Изменяет email и пароль. В случае ошибки возвращает описание ошибки (строку) */
  static async updateUser(
    id: string,
    newUserData: ISigninRequest
  ): Promise<IUserResponse | IResponseError> {
    const currentToken = Api.getCurrentToken()

    const response = await fetch(`${Api.USERS}/${id}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${currentToken}`,
        Accept: 'application/json'
      }
    })
    const status = response.status
    if (status === 401) return 'Access token is missing or invalid'
    if (status !== 200) return 'Bad request'
    return await response.json()
  }

  /** Удалить пользователя */
  static async deleteUser(id: string): Promise<IUserResponse | IResponseError> {
    const currentToken = Api.getCurrentToken()
    console.log(currentToken)

    const response = await fetch(`${Api.USERS}/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${currentToken}`,
        Accept: 'application/json'
      }
    })
    const status = response.status
    if (status === 401) return 'Access token is missing or invalid'
    if (status === 204) return 'The user has been deleted'
    if (status !== 200) return 'Bad request'
    Api.setTokensAndId('', '', '')
    return await response.json()
  }

  private static getCurrentToken(): string {
    return localStorage.getItem('token') !== null
      ? (localStorage.getItem('token') as string)
      : ''
  }

  private static setTokensAndId(
    token: string,
    refreshToken: string,
    id: string
  ): void {
    localStorage.setItem('token', token)
    localStorage.setItem('refreshToken', refreshToken)
    localStorage.setItem('id', id)
  }
}
