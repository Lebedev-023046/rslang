import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { IData } from '../interfaces/IData'

export const useWords = () => {
    const [words, setWords] = useState<IData[]>([])

    const fetchWords = async () => {
      try {
        const response = await axios.get<IData[]>('https://react-rslang-words.herokuapp.com/words?group=0&page=0')
        setWords(response.data)
      } catch (e: any) {
        const error = e as AxiosError
        console.log(error)
      }
    }
    useEffect(() => {
      void fetchWords()
    }, [words])

    return { words }
}
