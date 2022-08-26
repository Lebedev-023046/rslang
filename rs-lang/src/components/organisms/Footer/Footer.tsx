import React from 'react'
import './Footer.css'

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='conteiner footer__conteiner'>
        <a
          className="rss-link"
          href="https://rs.school/js/"
          target='blank'
        >
          <img
            src="https://rs.school/images/rs_school_js.svg"
            alt="rs_school_js.svg"
            width="115px"
          />
        </a>
        <div className='footer__githubs'>
          <a
            className='footer__github'
            href="https://github.com/Lebedev-023046"
            target='blank'
          >
            Dmitry
          </a>
          <a
            className='footer__github'
            href="https://github.com/Aldar0K"
            target='blank'
          >
            Aldar
          </a>
          <a
            className='footer__github'
            href="https://github.com/ViktorVitsk"
            target='blank'
          >
            Viktor
          </a>
        </div>
        <div className='footer__data'>
          <span className='footer__c'>ⓒ</span>
          <span className='footer__date'>2022</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
