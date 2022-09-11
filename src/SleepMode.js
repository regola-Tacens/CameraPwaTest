import moment from "moment/moment"
import { useEffect } from "react"
import { useState } from "react"

const SleepMode = () => {
  const [isTimerOn, setTimerOn] = useState(false)
  
  const handleStartTimer = () => {
    setTimerOn(!isTimerOn)
  }

  
  useEffect(() => {
    let timerInterval
    
    if(!isTimerOn) clearInterval(timerInterval)
    if(isTimerOn){
      console.log('hit')
      // const startDate = localStorage.setItem('timer', moment())
      timerInterval = setInterval (() => {
        console.log(moment().diff(localStorage.getItem('timer')))
      },4000)
    }

    return () => clearInterval(timerInterval)
  }, [isTimerOn])
  

  return (
  <div>
    <button onClick={handleStartTimer}>{isTimerOn ?'stopTimer' : 'Start Timer'}</button>
  </div>
  )
}

export default SleepMode