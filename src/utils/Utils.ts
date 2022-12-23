/* eslint-disable @typescript-eslint/restrict-plus-operands */
import Api from '../api/Api'
import { IData, IWordDescription } from '../interfaces/IData'

export const BASE_URL = 'https://react-rslang-words.herokuapp.com/'
export const ANSWERS_LIMIT = 10
export const VARIANTS_LIMIT = 4
export const PAGES_LIMIT = 30
export const WORDS_PAGE_LIMIT = 20

export const getRandomNumFromInterval = (max: number, min: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const shuffleArr = (array: any[]): any[] => {
  let currentIndex = array.length
  let randomIndex: number

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ]
  }

  return array
}

export const getRandomPage = (): number => {
  return getRandomNumFromInterval(-1, PAGES_LIMIT)
}

// Функция получения указанного количества рандомных слов из массива IData,
// можно указать необязательный парамертр exclude, чтобы игнорировать какое-то слово
export const getRandomWordsFrom = (
  words: IData[],
  amount: number,
  exclude?: IData
): IData[] => {
  if (amount > words.length) {
    throw new Error('The number of words exceeds the length of the array')
  }

  const result: IData[] = []

  for (let i = 0; i < amount;) {
    const newWords: IData[] = exclude != null
      ? [...words].filter((word) => word !== exclude)
      : [...words]

    const currentWord = exclude != null
      ? newWords[getRandomNumFromInterval(-1, 19)]
      : newWords[getRandomNumFromInterval(-1, 20)]

    if (!result.includes(currentWord)) {
      result.push(currentWord)
      i++
    }
  }

  return result
}

const wordTemplate: IWordDescription = {
  difficulty: 'medium',
  optional: {
    addTime: new Date(),
    isDeleted: false,
    games: {
      sprint: {
        right: 0,
        wrong: 0
      },
      audioChallenge: {
        right: 0,
        wrong: 0
      }
    },
    allTry: 0
  }
}

type typeGame = 'audioChallenge' | 'sprint'
type typeResult = 'right' | 'wrong'

export const handleUserAnswer = async (
  wordId: string,
  game: typeGame,
  result: typeResult
): Promise<void> => {
  const resp = await Api.getUserWord(wordId)
  if (typeof resp !== 'string' && resp.optional !== undefined) {
    resp.optional.games[game][result] += 1
    resp.optional.allTry += 1
    const newObj: IWordDescription = { optional: resp.optional }
    await Api.updateUserWord(wordId, newObj)
  } else {
    const newObj: IWordDescription = JSON.parse(JSON.stringify(wordTemplate))
    if (newObj.optional !== undefined) {
      newObj.optional.games[game][result] = 1
      newObj.optional.allTry = 1
      await Api.createUserWords(wordId, newObj)
    }
  }
}

// устанавливает параметр isDeleted на true или false
export const toggleDelete = async (
  wordId: string,
  isDelete: boolean
): Promise<void> => {
  const resp = await Api.getUserWord(wordId)
  if (typeof resp !== 'string' && resp.optional !== undefined) {
    resp.optional.isDeleted = isDelete
    const newObj: IWordDescription = { optional: resp.optional }
    await Api.updateUserWord(wordId, newObj)
  } else {
    const newObj: IWordDescription = JSON.parse(JSON.stringify(wordTemplate))
    if (newObj.optional !== undefined) {
      newObj.optional.isDeleted = isDelete
      await Api.createUserWords(wordId, newObj)
    }
  }
}

// меняет параметр сложности слова
// или создает новый users/words с указанной сложностью
export const addDifficult = async (
  wordId: string,
  difficult: string
): Promise<void> => {
  const resp = await Api.getUserWord(wordId)
  if (typeof resp !== 'string') {
    await Api.updateUserWord(wordId, { difficulty: difficult })
  } else {
    const newObj: IWordDescription = JSON.parse(JSON.stringify(wordTemplate))
    if (newObj.optional !== undefined) {
      newObj.difficulty = difficult
      await Api.createUserWords(wordId, newObj)
    }
  }
}

export const updateUserStats = async (
  newWords: number,
  game: 'audioChallenge' | 'sprint',
  correct: number,
  mistakes: number,
  bestSeries: number
) => {
  const res = await Api.getUserStatistic()

  if (typeof res !== 'string') {
    const dates = JSON.parse(res.optional.dateStat)

    const lastDateDay = (new Date(dates[dates.length - 1].date)).getDate()
    const currentDay = (new Date()).getDate()

    if (lastDateDay === currentDay) {
      // update current date stats
      dates[dates.length - 1].newWords += newWords
      dates[dates.length - 1].allWords += newWords

      dates[dates.length - 1].allGamesRight += correct
      dates[dates.length - 1].allGamesWrong += mistakes
      dates[dates.length - 1].allNewWords += newWords

      dates[dates.length - 1].games[game].right += correct
      dates[dates.length - 1].games[game].wrong += mistakes
      if (dates[dates.length - 1].games[game].bestSeries < bestSeries) dates[dates.length - 1].games[game].bestSeries = bestSeries
      dates[dates.length - 1].games[game].newWords += newWords
    } else {
      // add new date stats
      dates.push({
        date: new Date(),
        newWords,
        allWords: res.learnedWords + newWords,
        allGamesRight: correct,
        allGamesWrong: mistakes,
        allNewWords: newWords,
        games: {
          audioChallenge: {
            right: game === 'audioChallenge' ? correct : 0,
            wrong: game === 'audioChallenge' ? mistakes : 0,
            bestSeries: game === 'audioChallenge' ? bestSeries : 0,
            newWords: game === 'audioChallenge' ? newWords : 0
          },
          sprint: {
            right: game === 'sprint' ? correct : 0,
            wrong: game === 'sprint' ? mistakes : 0,
            bestSeries: game === 'sprint' ? bestSeries : 0,
            newWords: game === 'sprint' ? newWords : 0
          }
        }
      })
    }

    // send updated user's stats
    await Api.upsetUserStatistics({
      learnedWords: res.learnedWords + newWords,
      optional: {
        dateStat: JSON.stringify(dates)
      }
    })
  } else {
    // initialize user's stats and update them
    await resetUserStats()
    void updateUserStats(newWords, game, correct, mistakes, bestSeries)
  }
}

export const resetUserStats = async () => {
  const res = await Api.upsetUserStatistics({
    learnedWords: 0,
    optional: {
      dateStat: '[]'
    }
  })
  console.log(res)
}
