import { useState } from 'react'
import './index.css'

const MyTest = () => {
  const [ position, setPosition] = useState(1)

  const scroll = (direction) => {
    direction === 'left' ?
        position >= 2 && setPosition( pos => pos - 1 )
        :
        position <= 2 && setPosition( pos => pos + 1 )
  }

  return (
    <div>
      <div className="container">
        {position}
        <div className={`container__item pos${position}`}>   
        </div>
      </div>
      <div className="scrollButton" onClick={()=>scroll('left')}>left</div>
      <div className="scrollButton" onClick={()=>scroll('right')}>right</div>
    </div>
  )
}

export default MyTest