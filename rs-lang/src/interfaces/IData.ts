export interface IData {
  id: string
  group: number
  page: number
  word: string
  image: string
  audio: string
  audioMeaning: string
  audioExample: string
  textMeaning: string
  textExample: string
  transcription: string
  wordTranslate: string
  textMeaningTranslate: string
  textExampleTranslate: string
}

export interface IUserRequest {
  name: string
  email: string
  password: string
}
export interface IUserResponse {
  name: string
  email: string
  id: string
}

export type IResponseError = string

export interface ISigninRequest {
  email: string
  password: string
}

export interface ISigninResponse {
  message: string
  token: string
  refreshToken: string
  userId: string
  name: string
}
