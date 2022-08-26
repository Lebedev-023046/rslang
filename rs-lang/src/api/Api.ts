/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/space-before-function-paren */

import {
  IData,
  ISigninRequest,
  ISigninResponse,
  IResponseError,
  IUserRequest,
  IUserResponse,
  IWordDescription,
  IWordsResponse
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
  static async getWord(wordId: string): Promise<IData> {
    const response = await fetch(`${Api.WORDS}/${wordId}`)
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

    return data
  }

  /** При выходе из аккаунта очищает localStorage */
  static logout() {
    localStorage.removeItem('tokenLang')
    localStorage.removeItem('refreshTokenLang')
    localStorage.removeItem('idLang')
    localStorage.removeItem('tokenTimeLang')
    localStorage.removeItem('signinLang')
  }

  /** Возвращает {
  "name": "string",
  "email": "string",
  "password": "string"
  }
  или описание ошибки (строку)
*/
  static async getUser(): Promise<IUserResponse | IResponseError> {
    const currentToken = await Api.getCurrentToken()
    const id = Api.getId()
    if (id === null) return 'Please signin'
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
    newUserData: ISigninRequest
  ): Promise<IUserResponse | IResponseError> {
    const currentToken = await Api.getCurrentToken()
    const id = Api.getId()
    if (id === null) return 'Please signin'
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
    const currentToken = await Api.getCurrentToken()

    const response = await fetch(`${Api.USERS}/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${currentToken}`,
        Accept: 'application/json'
      }
    })
    const status = response.status
    if (status === 401) return 'Access token is missing or invalid'
    if (status === 204) {
      if (Api.getId() === id) {
        Api.logout()
      }
      return 'The user has been deleted'
    }
    if (status !== 200) return 'Bad request'
    return await response.json()
  }

  /** Возвращает слова сохраненные пользователем */
  static async getUserWords(): Promise<IWordsResponse[] | IResponseError> {
    const currentToken = await Api.getCurrentToken()
    const id = Api.getId()
    if (id === null) return 'Please signin'
    const response = await fetch(`${Api.USERS}/${id}/words`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${currentToken}`,
        Accept: 'application/json'
      }
    })
    if (response.status === 402) return 'Access token is missing or invalid'
    if (response.status !== 200) return 'incorrect request'

    return await response.json()
  }

  static async createUserWords(
    wordId: string,
    wordDescription: IWordDescription
  ): Promise<IWordsResponse | IResponseError> {
    const currentToken = await Api.getCurrentToken()
    const id = Api.getId()
    if (id === null) return 'Please signin'
    const response = await fetch(`${Api.USERS}/${id}/words/${wordId}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${currentToken}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(wordDescription)
    })
    const status = response.status
    if (status === 417) return 'such user word already exists'
    if (status === 402) return 'Access token is missing or invalid'
    if (status !== 200) return 'Bad Request'
    return await response.json()
  }

  /*  ВАЖНО!!!
  Для того, чтобы проверить вошел ли пользователь проверяй:
    (localStorage.getItem('signinLang') === null)
    если равно null значит пользователь не вошел, либо token уже недействителен
  */
  private static async getCurrentToken(): Promise<string> {
    await Api.refreshToken()

    return localStorage.getItem('tokenLang') !== null
      ? (localStorage.getItem('tokenLang') as string)
      : ''
  }

  private static setTokensAndId(
    token: string,
    refreshToken: string,
    id: string
  ): void {
    localStorage.setItem('tokenLang', token)
    localStorage.setItem('refreshTokenLang', refreshToken)
    localStorage.setItem('idLang', id)
    const tokenExpire = 4 * 60 * 60 * 1000 + new Date().getTime()
    localStorage.setItem('tokenTimeLang', String(tokenExpire))
    localStorage.setItem('signinLang', 'true')
  }

  private static async refreshToken() {
    const tokenTime = localStorage.getItem('tokenTimeLang')
    if (!tokenTime) return
    const currentTime = new Date().getTime()
    if (Number(tokenTime) > Number(currentTime)) return
    const refreshToken = localStorage.getItem('refreshTokenLang')
    const id = localStorage.getItem('idLang')
    if (!refreshToken || !id) return false
    const response = await fetch(`${Api.USERS}/${id}/tokens`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${refreshToken}`,
        Accept: 'application/json'
      }
    })
    console.log(refreshToken)
    if (response.status !== 200) {
      localStorage.removeItem('signinLang')
      return
    }

    const data = await response.json()
    Api.setTokensAndId(data.token, data.refreshToken, id)
  }

  private static getId(): string | null {
    return localStorage.getItem('idLang')
  }
}
