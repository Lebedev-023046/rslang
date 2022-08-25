/* eslint-disable @typescript-eslint/space-before-function-paren */

import {
  IData,
  IUserError,
  IUserRequest,
  IUserResponse
  // UserError
} from '../interfaces/IData'

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export default class Api {
  private static readonly URL = 'https://react-rslang-words.herokuapp.com'
  private static readonly WORDS = `${this.URL}/words`
  private static readonly USERS = `${this.URL}/users`

  /**  Возвращает массив слов */
  static async getWords(group: string, page: string): Promise<IData[]> {
    const response = await fetch(`${this.WORDS}?group=${group}&page=${page}`)
    return await response.json()
  }

  /**  Возвращает слово по ID */
  static async getWord(id: string): Promise<IData> {
    const response = await fetch(`${this.WORDS}/${id}`)
    return await response.json()
  }

  /** Создает пользователя и возвращает
  { name: string,
  email: string,
  id: string } или описание ошибки */
  static async createUser(
    newUser: IUserRequest
  ): Promise<IUserResponse | IUserError> {
    const response = await fetch(this.USERS, {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const status = response.status
    if (status === 417) return 'user with this e-mail exists'
    const user = await response.json()
    if (status === 422) return user.error.errors[0].message
    return user
  }

  static async getUser() {

  }
}
