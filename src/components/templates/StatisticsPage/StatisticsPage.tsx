import React from 'react'
import './StatisticsPage.css'
import Header from '../../organisms/Header/Header'
import Nav from '../../molecules/Nav/Nav'
import { Link } from 'react-router-dom'
import StatsCard from '../../molecules/StatsCard/StatsCard'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import Footer from '../../organisms/Footer/Footer'
import { NameBlock } from '../../atoms/NameBlock/NameBlock'
import Api from '../../../api/Api'
import { ICurrentUserTodayStats } from '../../../interfaces/IData'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    },
    title: {
      display: false,
      text: 'Number of new words per day'
    }
  }
}

const StatisticsPage: React.FC = () => {
  const [labels, setLabels] = React.useState<string[]>([])
  const [newWords, setNewWords] = React.useState<number[]>([])
  const [allWords, setAllWords] = React.useState<number[]>([])

  const [todayStats, setTodayStats] = React.useState<ICurrentUserTodayStats>({
    date: new Date(),
    allGamesRight: 0,
    allGamesWrong: 0,
    allNewWords: 0,
    games: {
      audioChallenge: {
        right: 0,
        wrong: 0,
        bestSeries: 0,
        newWords: 0
      },
      sprint: {
        right: 0,
        wrong: 0,
        bestSeries: 0,
        newWords: 0
      }
    }
  })

  React.useEffect(() => {
    void Api.getUserStatistic()
      .then((res) => {
        if (typeof res !== 'string') {
          const dates: any[] = JSON.parse(res.optional.dateStat)

          setLabels(dates.map(item => {
            const date = new Date(item.date)
            return `${date.getDate()}.${date.getMonth() > 9 ? date.getMonth() : '0' + date.getMonth().toString()}.${date.getFullYear()}`
          }))
          setNewWords(dates.map(item => item.newWords))
          setAllWords(dates.map(item => item.allWords))

          const lastDate = dates[dates.length - 1]
          const lastDateDay = (new Date(lastDate.date)).getDate()
          const currentDay = (new Date()).getDate()
          if (lastDateDay === currentDay) {
            setTodayStats({
              date: lastDate.date,
              allGamesRight: lastDate.allGamesRight,
              allGamesWrong: lastDate.allGamesWrong,
              allNewWords: lastDate.allNewWords,
              games: {
                audioChallenge: {
                  right: lastDate.games.audioChallenge.right,
                  wrong: lastDate.games.audioChallenge.wrong,
                  bestSeries: lastDate.games.audioChallenge.bestSeries,
                  newWords: lastDate.games.audioChallenge.newWords
                },
                sprint: {
                  right: lastDate.games.sprint.right,
                  wrong: lastDate.games.sprint.wrong,
                  bestSeries: lastDate.games.sprint.bestSeries,
                  newWords: lastDate.games.sprint.newWords
                }
              }
            })
          }
        }
      })
  }, [])

  const todayRightPercent = Number.isNaN(Math.floor(todayStats.allGamesRight / todayStats.allNewWords * 100))
    ? 0
    : Math.floor(todayStats.allGamesRight / todayStats.allNewWords * 100)
  const todaySprintRightPercent = Number.isNaN(Math.floor(todayStats.games.sprint.right / todayStats.games.sprint.newWords * 100))
    ? 0
    : Math.floor(todayStats.games.sprint.right / todayStats.games.sprint.newWords * 100)
  const todayAudioRightPercent = Number.isNaN(Math.floor(todayStats.games.audioChallenge.right / todayStats.games.audioChallenge.newWords * 100))
    ? 0
    : Math.floor(todayStats.games.audioChallenge.right / todayStats.games.audioChallenge.newWords * 100)

  const newWordsData = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'words',
        data: newWords,
        borderColor: 'rgba(255, 104, 34, 1)',
        backgroundColor: 'transparent'
      }
    ]
  }

  const allWordsData = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'words',
        data: allWords,
        borderColor: 'rgba(255, 104, 34, 1)',
        backgroundColor: 'transparent'
      }
    ]
  }

  return (
    <div className='wrapper'>
      <Header>
        <Link className='nav__link' to='/'><h2>RS Lang</h2></Link>
        <Nav>
          <Link className='nav__link' to='/TextBook'>TextBook</Link>
          <Link className='nav__link' to='/AudioChallenge'>Audio Challenge</Link>
          <Link className='nav__link' to='/Sprint'>Sprint</Link>
          <Link className='nav__link nav__link_active' to='/Statistics'>Statistics</Link>
          <Link className='nav__link' to='/'>
            <NameBlock />
          </Link>
        </Nav>
      </Header>

      <section className='today'>
        <div className='container today__container'>
          <h2 className='today__heading'>Statistics for today</h2>
          <div className='today__words-and-answers'>
            <div className='today__words'>
              <div className='today__words-count'>{todayStats.allNewWords}</div>
              <div className='today__words-heading'>Words learned</div>
            </div>
            <div className='today__answers'>
              <div className='today__answers-count'>{todayRightPercent}%</div>
              <div className='today__answers-heading'>Correct answers</div>
            </div>
          </div>
          <div className='today__games'>
            <StatsCard
              type={'audio'}
              newWords={todayStats.games.audioChallenge.newWords}
              accuracy={todayAudioRightPercent}
              row={todayStats.games.audioChallenge.bestSeries}
            />
            <StatsCard
              type={'sprint'}
              newWords={todayStats.games.sprint.newWords}
              accuracy={todaySprintRightPercent}
              row={todayStats.games.sprint.bestSeries}
            />
          </div>
        </div>
      </section>

      <section className='graphs'>
        <div className='container graphs__container'>
          <div className='graphs__graph'>
            <h3 className='graphs__heading'>
              Number of new words per day
            </h3>
            <Line options={options} data={newWordsData} />
          </div>
          <div className='graphs__graph'>
            <h3 className='graphs__heading'>
              Total number of learned words
            </h3>
            <Line options={options} data={allWordsData} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default StatisticsPage
