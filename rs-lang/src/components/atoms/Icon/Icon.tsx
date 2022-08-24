import React from 'react'
import './Icon.css'

interface IconProps {
  type: string
  width: string
  height: string
  color?: string
}

const Icon: React.FC<IconProps> = ({
  type,
  width,
  height,
  color = '#FFFFFF'
}) => {
  switch (type) {
    case 'play':
      return (
        <svg
          className='icon'
          width={width}
          height={height}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.990381 1.23205C0.990381 0.462249 1.82371 -0.0188748 2.49038 0.366025L21.9904 11.6244C22.657 12.0093 22.657 12.9715 21.9904 13.3564L2.49038 24.6147C1.82371 24.9996 0.990381 24.5185 0.990381 23.7487L0.990381 1.23205Z"
            fill={color}
          />
        </svg>
      )
    case 'stroke-right':
      return (
        <svg
          width={width}
          height={height}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.383554 0.426727C0.913128 -0.123178 1.7932 -0.144405 2.34926 0.379313L12.5685 10.0043C12.844 10.2638 13 10.6237 13 11C13 11.3763 12.844 11.7362 12.5685 11.9957L2.34926 21.6207C1.7932 22.1444 0.913128 22.1232 0.383554 21.5733C-0.14602 21.0234 -0.124555 20.153 0.431498 19.6293L9.59358 11L0.431498 2.37069C-0.124555 1.84697 -0.14602 0.976631 0.383554 0.426727Z"
            fill={color}
          />
        </svg>
      )
    case 'stroke-left':
      return (
        <svg
          width={width}
          height={height}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.6164 21.5733C12.0869 22.1232 11.2068 22.1444 10.6507 21.6207L0.431495 11.9957C0.155951 11.7362 0 11.3763 0 11C0 10.6237 0.155951 10.2638 0.431495 10.0043L10.6507 0.379314C11.2068 -0.144403 12.0869 -0.123177 12.6164 0.426727C13.146 0.976631 13.1246 1.84697 12.5685 2.37069L3.40642 11L12.5685 19.6293C13.1246 20.153 13.146 21.0234 12.6164 21.5733Z"
              fill={color}
            />
        </svg>
      )
    case 'github':
      return (
        <svg
          width={width}
          height={height}
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24 0C10.74 0 0 10.74 0 24C0 34.62 6.87 43.59 16.41 46.77C17.61 46.98 18.06 46.26 18.06 45.63C18.06 45.06 18.03 43.17 18.03 41.16C12 42.27 10.44 39.69 9.96 38.34C9.69 37.65 8.52 35.52 7.5 34.95C6.66 34.5 5.46 33.39 7.47 33.36C9.36 33.33 10.71 35.1 11.16 35.82C13.32 39.45 16.77 38.43 18.15 37.8C18.36 36.24 18.99 35.19 19.68 34.59C14.34 33.99 8.76 31.92 8.76 22.74C8.76 20.13 9.69 17.97 11.22 16.29C10.98 15.69 10.14 13.23 11.46 9.93C11.46 9.93 13.47 9.3 18.06 12.39C19.98 11.85 22.02 11.58 24.06 11.58C26.1 11.58 28.14 11.85 30.06 12.39C34.65 9.27 36.66 9.93 36.66 9.93C37.98 13.23 37.14 15.69 36.9 16.29C38.43 17.97 39.36 20.1 39.36 22.74C39.36 31.95 33.75 33.99 28.41 34.59C29.28 35.34 30.03 36.78 30.03 39.03C30.03 42.24 30 44.82 30 45.63C30 46.26 30.45 47.01 31.65 46.77C36.4144 45.1614 40.5544 42.0994 43.4873 38.0147C46.4203 33.9301 47.9986 29.0286 48 24C48 10.74 37.26 0 24 0Z"
            fill={color}
          />
        </svg>
      )
    case 'textbook':
      return (
        <svg
          width={width}
          height={height}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25" cy="25" r="25" fill="#F8C60A" fillOpacity="0.2"
          />
          <g clipPath="url(#clip0_75_839)">
            <path
              d="M38.9999 21.99C39.0005 21.6099 38.9005 21.2364 38.7099 20.9075C38.5193 20.5786 38.245 20.3061 37.9149 20.1175L26.1199 13.1175C25.78 12.9192 25.3935 12.8147 24.9999 12.8147C24.6064 12.8147 24.2199 12.9192 23.8799 13.1175L12.0674 20.1175C11.741 20.3112 11.4706 20.5865 11.2828 20.9164C11.095 21.2462 10.9962 21.6192 10.9962 21.9988C10.9962 22.3783 11.095 22.7514 11.2828 23.0812C11.4706 23.4111 11.741 23.6863 12.0674 23.88L15.4274 25.84V30.7575C15.4295 31.1419 15.5303 31.5192 15.7204 31.8533C15.9104 32.1873 16.1831 32.4669 16.5124 32.665L23.9499 36.9525C24.282 37.1364 24.6554 37.2328 25.0349 37.2328C25.4145 37.2328 25.7879 37.1364 26.1199 36.9525L33.5574 32.665C33.8867 32.4669 34.1595 32.1873 34.3495 31.8533C34.5396 31.5192 34.6404 31.1419 34.6424 30.7575V25.7875L36.8124 24.51V29.27H38.9999V21.99ZM32.4724 30.74L24.9999 35.045L17.6149 30.7575V27.135L23.8799 30.8625C24.221 31.0574 24.6071 31.16 24.9999 31.16C25.3928 31.16 25.7789 31.0574 26.1199 30.8625L32.4549 27.0825L32.4724 30.74ZM24.9999 28.9725L13.1874 21.9725L24.9999 14.955L36.8124 21.955L24.9999 28.9725Z"
              fill="#F8C60A"
            />
          </g>
          <defs>
            <clipPath id="clip0_75_839">
              <rect
                width="28"
                height="28"
                fill="white"
                transform="translate(11 11)"
              />
            </clipPath>
          </defs>
        </svg>
      )
    case 'dictionary':
      return (
        <svg
          width={width}
          height={height}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25" cy="25" r="25" fill="#9DBCFA" fillOpacity="0.2"/>
          <path
            d="M33.1667 13.3334H18C16.593 13.3334 14.5 14.2655 14.5 16.8334V33.1667C14.5 35.7345 16.593 36.6667 18 36.6667H35.5V34.3334H18.014C17.475 34.3194 16.8333 34.107 16.8333 33.1667C16.8333 32.2264 17.475 32.014 18.014 32H35.5V15.6667C35.5 14.3799 34.4535 13.3334 33.1667 13.3334ZM33.1667 29.6667H16.8333V16.8334C16.8333 15.893 17.475 15.6807 18 15.6667H33.1667V29.6667Z"
            fill="#9DBCFA"
          />
        </svg>
      )
    case 'game':
      return (
        <svg
          width={width}
          height={height}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25" cy="25" r="25" fill="#EA5A0D" fillOpacity="0.2"/>
          <path
            d="M21.5 28.5L18.0374 31.9627C17.652 32.348 17.161 32.6104 16.6265 32.7167C16.092 32.823 15.538 32.7684 15.0346 32.5599C14.5311 32.3513 14.1007 31.9982 13.7979 31.5451C13.4951 31.092 13.3335 30.5593 13.3334 30.0144V28.5L14.9165 20.5854C15.128 19.5275 15.6994 18.5755 16.5337 17.8914C17.3679 17.2074 18.4134 16.8335 19.4922 16.8334H30.5079C31.5867 16.8335 32.6322 17.2074 33.4664 17.8914C34.3006 18.5755 34.8721 19.5275 35.0835 20.5854L36.6667 28.5V30.0132C36.6666 30.5582 36.505 31.0909 36.2022 31.5439C35.8994 31.997 35.469 32.3502 34.9655 32.5587C34.4621 32.7672 33.908 32.8218 33.3736 32.7155C32.8391 32.6092 32.3481 32.3468 31.9627 31.9615L28.5 28.5H21.5Z"
            stroke="#EA5A0D"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M21.5 16.8334L22.6667 19.1667H27.3333L28.5 16.8334"
            stroke="#EA5A0D" strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'statistics':
      return (
        <svg
          width={width}
          height={height}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="25" cy="25" r="25" fill="#0DEA91" fillOpacity="0.2"/>
          <path
            d="M34.625 12.75C33.8675 12.7497 33.1303 12.9952 32.5243 13.4498C31.9183 13.9043 31.4762 14.5432 31.2645 15.2706C31.0527 15.9979 31.0827 16.7743 31.35 17.4831C31.6174 18.1919 32.1075 18.7948 32.7468 19.2011L30.463 27.1946C30.3921 27.1901 30.3211 27.1877 30.25 27.1875C29.4971 27.1867 28.7643 27.4299 28.1613 27.8808L23.942 24.3647C24.1417 23.772 24.179 23.1367 24.05 22.5247C23.9209 21.9127 23.6303 21.3465 23.2082 20.8849C22.7862 20.4234 22.2481 20.0834 21.6501 19.9002C21.0521 19.7171 20.4159 19.6976 19.8078 19.8436C19.1997 19.9897 18.6418 20.2961 18.1922 20.7309C17.7426 21.1656 17.4177 21.713 17.2514 22.3158C17.085 22.9187 17.0832 23.5552 17.2462 24.159C17.4093 24.7628 17.7311 25.3119 18.1782 25.7492L15.7013 30.7033C15.5929 30.693 15.484 30.6877 15.375 30.6875C14.5365 30.6864 13.7254 30.986 13.089 31.5319C12.4525 32.0778 12.0329 32.8338 11.9062 33.6626C11.7796 34.4915 11.9543 35.3383 12.3987 36.0493C12.8431 36.7604 13.5277 37.2885 14.3282 37.5379C15.1288 37.7873 15.9922 37.7413 16.7618 37.4085C17.5314 37.0756 18.1561 36.4778 18.5226 35.7237C18.889 34.9695 18.973 34.1089 18.7591 33.2982C18.5453 32.4874 18.0478 31.7802 17.357 31.3049L19.6977 26.6243C20.2662 26.7811 20.8653 26.7914 21.4389 26.6541C22.0125 26.5168 22.542 26.2365 22.9779 25.8392L27.0631 29.2436C26.7857 29.8549 26.6899 30.5331 26.7873 31.1974C26.8846 31.8616 27.1709 32.4838 27.6121 32.9898C28.0532 33.4959 28.6306 33.8644 29.2754 34.0514C29.9201 34.2384 30.605 34.236 31.2485 34.0445C31.8919 33.8531 32.4667 33.4806 32.9044 32.9715C33.342 32.4624 33.624 31.8383 33.7167 31.1734C33.8095 30.5085 33.709 29.8309 33.4274 29.2215C33.1458 28.6122 32.6948 28.0966 32.1283 27.7364L34.4121 19.7429C34.4825 19.7472 34.5534 19.75 34.625 19.75C35.5533 19.75 36.4435 19.3813 37.0999 18.7249C37.7563 18.0685 38.125 17.1783 38.125 16.25C38.125 15.3217 37.7563 14.4315 37.0999 13.7751C36.4435 13.1187 35.5533 12.75 34.625 12.75ZM15.375 35.9375C15.0289 35.9375 14.6905 35.8349 14.4028 35.6426C14.115 35.4503 13.8907 35.177 13.7582 34.8572C13.6258 34.5374 13.5911 34.1856 13.6586 33.8461C13.7262 33.5066 13.8928 33.1948 14.1376 32.9501C14.3823 32.7053 14.6941 32.5387 15.0336 32.4711C15.3731 32.4036 15.7249 32.4383 16.0447 32.5707C16.3645 32.7032 16.6378 32.9275 16.8301 33.2153C17.0224 33.503 17.125 33.8414 17.125 34.1875C17.1245 34.6515 16.9399 35.0963 16.6119 35.4244C16.2838 35.7524 15.839 35.937 15.375 35.9375ZM20.625 25C20.2789 25 19.9405 24.8974 19.6528 24.7051C19.365 24.5128 19.1407 24.2395 19.0082 23.9197C18.8758 23.5999 18.8411 23.2481 18.9086 22.9086C18.9762 22.5691 19.1428 22.2573 19.3876 22.0126C19.6323 21.7678 19.9441 21.6012 20.2836 21.5336C20.6231 21.4661 20.9749 21.5008 21.2947 21.6332C21.6145 21.7657 21.8878 21.99 22.0801 22.2778C22.2724 22.5655 22.375 22.9039 22.375 23.25C22.3745 23.714 22.1899 24.1588 21.8619 24.4869C21.5338 24.8149 21.089 24.9995 20.625 25ZM30.25 32.4375C29.9039 32.4375 29.5655 32.3349 29.2778 32.1426C28.99 31.9503 28.7657 31.677 28.6332 31.3572C28.5008 31.0374 28.4661 30.6856 28.5336 30.3461C28.6012 30.0066 28.7678 29.6948 29.0126 29.4501C29.2573 29.2053 29.5691 29.0387 29.9086 28.9711C30.2481 28.9036 30.5999 28.9383 30.9197 29.0707C31.2395 29.2032 31.5128 29.4275 31.7051 29.7153C31.8974 30.003 32 30.3414 32 30.6875C31.9995 31.1515 31.8149 31.5963 31.4869 31.9244C31.1588 32.2524 30.714 32.437 30.25 32.4375ZM34.625 18C34.2789 18 33.9405 17.8974 33.6528 17.7051C33.365 17.5128 33.1407 17.2395 33.0082 16.9197C32.8758 16.5999 32.8411 16.2481 32.9086 15.9086C32.9762 15.5691 33.1428 15.2573 33.3876 15.0126C33.6323 14.7678 33.9441 14.6012 34.2836 14.5336C34.6231 14.4661 34.9749 14.5008 35.2947 14.6332C35.6145 14.7657 35.8878 14.99 36.0801 15.2778C36.2724 15.5655 36.375 15.9039 36.375 16.25C36.3745 16.714 36.1899 17.1588 35.8619 17.4869C35.5338 17.8149 35.089 17.9995 34.625 18Z"
            fill="#0DEA91"
          />
        </svg>
      )
    case 'dot':
      return (
        <svg
          width={width}
          height={height}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="9" cy="9" r="9" fill={color}/>
        </svg>
      )
    case 'youtube':
      return (
        <svg
          width={width}
          height={height}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_75_494)">
            <path
              d="M97.7913 10.9668C97.2177 8.84709 96.0989 6.91463 94.5461 5.36183C92.9934 3.80903 91.061 2.69008 88.9413 2.11641C81.1811 0 49.9491 0 49.9491 0C49.9491 0 18.7155 0.0640623 10.9554 2.18047C8.83563 2.75418 6.90319 3.87319 5.35045 5.42606C3.79772 6.97893 2.67888 8.91147 2.10536 11.0312C-0.241905 24.8195 -1.15245 45.8297 2.16981 59.0664C2.7434 61.1861 3.86226 63.1186 5.41499 64.6714C6.96772 66.2242 8.90014 67.3431 11.0198 67.9168C18.78 70.0332 50.0128 70.0332 50.0128 70.0332C50.0128 70.0332 81.2452 70.0332 89.005 67.9168C91.1247 67.3432 93.0572 66.2243 94.61 64.6715C96.1628 63.1187 97.2817 61.1862 97.8554 59.0664C100.331 45.2586 101.094 24.2617 97.7913 10.9672V10.9668Z"
              fill="#FF0000"
            />
            <path
              d="M40.0082 50.0235L65.9176 35.0164L40.0082 20.0094V50.0235Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_75_494">
              <rect width="100" height="70.3125" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      )
    default:
      return (
        <svg
          width={width}
          height={height}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="9" cy="9" r="9" fill={color}/>
        </svg>
      )
  }
}

export default Icon
