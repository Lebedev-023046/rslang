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
import { getRandomNumFromInterval } from '../../../utils/Utils'
import Footer from '../../organisms/Footer/Footer'
import { NameBlock } from '../../atoms/NameBlock/NameBlock'

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

const labels = ['31.09.2022', '1.09.2022', '2.09.2022', '3.09.2022', '4.09.2022']

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'words',
      data: labels.map(() => getRandomNumFromInterval(0, 200)),
      borderColor: 'rgba(255, 104, 34, 1)',
      backgroundColor: 'transparent'
    }
  ]
}

const StatisticsPage: React.FC = () => {
  return (
    <div className='wrapper'>
      <Header>
        <h2>RS Lang</h2>
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
              <div className='today__words-count'>12</div>
              <div className='today__words-heading'>Words learned</div>
            </div>
            <div className='today__answers'>
              <div className='today__answers-count'>89%</div>
              <div className='today__answers-heading'>Correct answers</div>
            </div>
          </div>
          <div className='today__games'>
            <StatsCard type={'audio'} />
            <StatsCard type={'sprint'} />
          </div>
        </div>
      </section>

      <section className='graphs'>
        <div className='container graphs__container'>
          <div className='graphs__graph'>
            <h3 className='graphs__heading'>
              Number of new words per day
            </h3>
            <Line options={options} data={data} />
          </div>
          <div className='graphs__graph'>
            <h3 className='graphs__heading'>
              Total number of learned words
            </h3>
            <Line options={options} data={data} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default StatisticsPage
