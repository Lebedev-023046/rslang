export interface IData {
  id?: string
  _id?: string
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
  userWord?: {
    difficulty: string
    optional?: {
      addTime?: string
      isDeleted: boolean
      games?: {
        sprint: {
          right: number
          wrong: number
        }
        audioChallenge: {
          right: number
          wrong: number
        }
      }
    }
  }
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

export interface IWordDescription {
  difficulty?: string
  optional?: {
    addTime: Date
    isDeleted: boolean
    games: {
      sprint: {
        right: number
        wrong: number
      }
      audioChallenge: {
        right: number
        wrong: number
      }
    }
    allTry: number
  }
}

export interface IWordsResponse extends IWordDescription {
  id: string
  wordId: string
}

export interface IStatisticsRequest {
  learnedWords: number
  optional: {
    dateStat: string
  }
}

export interface IStatisticsResponse extends IStatisticsRequest {
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

export interface ICurrentUserTodayStats {
  date: Date
  allGamesRight: number
  allGamesWrong: number
  allNewWords: number
  games: {
    audioChallenge: {
      right: number
      wrong: number
      bestSeries: number
      newWords: number
    }
    sprint: {
      right: number
      wrong: number
      bestSeries: number
      newWords: number
    }
  }
}
