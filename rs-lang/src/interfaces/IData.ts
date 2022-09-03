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

// type Difficulty = 'easy' | 'medium' | 'hard'
export interface IWordDescription {
  difficulty: string
  optional: {
    dataAdd: string
  }
}

export interface IWordsResponse extends IWordDescription {
  id: string
  wordId: string
}

export interface IStatistics {
  learnedWords: number
  optional: {}
}
export interface IStatisticsUpset {
  learnedWords: number
  id: string
}

export interface ISettings {
  wordsPerDay: number
  optional: {}
}

export interface IQuestion {
  answer: IData
  variants: IData[]
  correct: number
}
