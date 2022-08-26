import { WordCard } from './components/molecules/WordCard/WordCard'
import { useWords } from './hooks/useWords'

function App () {
  const { words } = useWords()

  return (
    <div>
      { words.map(word =>
        <WordCard card={word} key={word.id} />
      ) }
    </div>
  )
}

export default App
