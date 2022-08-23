import Link from 'next/link'
import React, { useState, useEffect } from "react";
import { useTheme } from 'next-themes'

const Logo = () => {

  const { theme } = useTheme();


  return (
    <div className='col-start-2 justify-self-center md:justify-self-start md:col-start-1 md:col-span-2 self-center'>
      <Link href='/'>
        <a>
        <svg width="92" height="54" viewBox="0 0 92 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M92 0H0V54H92V0ZM70.4706 23.1015C70.7405 23.4992 70.95 23.9573 71.0992 24.4758H75.7867C75.6375 23.3962 75.3002 22.409 74.7746 21.5141C74.249 20.6121 73.5708 19.8344 72.7398 19.181C71.9159 18.5276 70.9713 18.0233 69.906 17.6682C68.8407 17.306 67.6901 17.1249 66.4543 17.1249C65.0125 17.1249 63.6738 17.377 62.438 17.8813C61.2022 18.3856 60.1191 19.1206 59.1887 20.0865C58.2583 21.0525 57.5338 22.2314 57.0154 23.6235C56.504 25.0084 56.2483 26.5851 56.2483 28.3536C56.2483 30.6547 56.678 32.6434 57.5374 34.3195C58.4039 35.9885 59.6113 37.2776 61.1596 38.1867C62.7078 39.0887 64.5047 39.5397 66.5502 39.5397C68.3826 39.5397 70.009 39.1704 71.4294 38.4317C72.8499 37.686 73.965 36.6277 74.7746 35.257C75.5843 33.8792 75.9891 32.2314 75.9891 30.3138V27.5652H66.8591V31.0383H71.5451C71.5263 31.9104 71.3279 32.6703 70.95 33.3181C70.5594 33.9999 69.9912 34.529 69.2455 34.9054C68.5069 35.2748 67.6155 35.4594 66.5715 35.4594C65.4209 35.4594 64.423 35.1824 63.5779 34.6285C62.7327 34.0674 62.0793 33.2542 61.6176 32.1888C61.156 31.1235 60.9252 29.8309 60.9252 28.311C60.9252 26.7911 61.1596 25.5056 61.6283 24.4544C62.0971 23.3962 62.7505 22.5901 63.5885 22.0361C64.4337 21.4821 65.4138 21.2052 66.5289 21.2052C67.1255 21.2052 67.6688 21.2797 68.1588 21.4289C68.656 21.578 69.0963 21.7946 69.4799 22.0787C69.8705 22.3557 70.2007 22.6966 70.4706 23.1015ZM23.6307 39.2414H15.8963V17.4232H23.6946C25.8892 17.4232 27.7784 17.86 29.3622 18.7336C30.946 19.6 32.1641 20.8465 33.0163 22.4729C33.8757 24.0993 34.3054 26.0454 34.3054 28.311C34.3054 30.5837 33.8757 32.5368 33.0163 34.1704C32.1641 35.8039 30.9389 37.0574 29.3409 37.931C27.75 38.8046 25.8466 39.2414 23.6307 39.2414ZM20.5092 35.289H23.4389C24.8026 35.289 25.9496 35.0475 26.88 34.5645C27.8175 34.0745 28.5206 33.3181 28.9893 32.2954C29.4652 31.2655 29.7031 29.9374 29.7031 28.311C29.7031 26.6988 29.4652 25.3813 28.9893 24.3586C28.5206 23.3358 27.821 22.583 26.8906 22.1C25.9602 21.6171 24.8132 21.3756 23.4496 21.3756H20.5092V35.289ZM47.3583 17.4232H51.9179V32.6363C51.9179 34.0425 51.6019 35.2641 50.9698 36.301C50.3448 37.338 49.4747 38.137 48.3597 38.6981C47.2446 39.2591 45.9485 39.5397 44.4712 39.5397C43.1573 39.5397 41.9641 39.3088 40.8917 38.8472C39.8263 38.3785 38.9811 37.6682 38.3561 36.7165C37.7311 35.7577 37.4222 34.5539 37.4293 33.105H42.0209C42.0351 33.6803 42.1523 34.1739 42.3725 34.5858C42.5998 34.9907 42.9087 35.3032 43.2993 35.5233C43.6971 35.7364 44.1658 35.8429 44.7056 35.8429C45.2738 35.8429 45.7532 35.7222 46.1438 35.4807C46.5415 35.2321 46.8434 34.8699 47.0493 34.3941C47.2553 33.9182 47.3583 33.3323 47.3583 32.6363V17.4232Z"
            fill={theme === 'light' ? '#111' : '#fff'}/>
        </svg>
        </a>
      </Link>
    </div>
  )
}

export default Logo