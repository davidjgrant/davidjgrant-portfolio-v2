import React, { useEffect } from 'react'
import { AnalogClock } from 'customizable-analog-clock'


const Clock = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const clock = new AnalogClock({
        htmlElement : 'my-clock',
        showDate: false,
        showDigitalClock: false,
        showIndicators: true,
        clockIndicators : [],
        styleOptions : {
            fontSize: '0',
            fontFamily: '',
            clockBackgroundColor: 'transparent',
            clockBackgroundImage: 'transparent',
            clockBorderColor: '#ffffff',
            clockCenterBorderColor: 'transparent',
            clockCenterBackgroundColor: 'transparent',
            clockSecondHandColor: 'transparent',
            clockMinuteHandColor: '#ffffff',
            clockHourHandColor: '#ffffff',
            clockIndicatorColor: 'transparent',
            clockIndicatorIconColor: 'transparent',
            clockIndicatorMainColor: 'transparent',
        }
    }); }
  }, [])
  
  return (
    <div id="my-clock" className='w-[80px] h-[80px] mb-4'></div>
  )
}

export default Clock