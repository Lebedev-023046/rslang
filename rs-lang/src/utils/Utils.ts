import { IData } from '../interfaces/IData'

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

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
  }

  return array
}

export const getRandomPage = (): number => {
  return getRandomNumFromInterval(-1, PAGES_LIMIT)
}

// Функция получения указанного количества рандомных слов из массива IData,
// можно указать необязательный парамертр exclude, чтобы игнорировать какое-то слово
export const getRandomWordsFrom = (words: IData[], amount: number, exclude?: IData): IData[] => {
  if (amount > words.length) throw new Error('The number of words exceeds the length of the array')

  const result: IData[] = []

  for (let i = 0; i < amount;) {
    const newWords: IData[] = exclude != null
    ? [...words].filter((word) => word !== exclude)
    : [...words]

    const currentWord = exclude != null
    ? newWords[getRandomNumFromInterval(-1, 19)]
    : newWords[getRandomNumFromInterval(-1, 20)]

    if (result.includes(currentWord)) {
      continue
    } else {
      result.push(currentWord)
      i++
    }
  }

  return result
}
