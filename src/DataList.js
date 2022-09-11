import { useState, useEffect } from 'react'
import dataFile from './data.json'

const DataList = ({ filter }) => {
  const [isToggle, setIsToggle] = useState(false)
  const [data, setData] = useState(dataFile)

  useEffect(() => {
    const filteredData = data.map(coin => 
      coin.id === filter ? {...coin,active: false} : coin
    )
    setData(filteredData)
  },[filter])

  return (
    <div>
      <button onClick={()=> setIsToggle(!isToggle)}>toggle</button>
      {JSON.stringify(isToggle)}
      {
        data.map(coin => (
          <div key={coin.id}>
            { isToggle === coin.active &&
            <div>
              <p>{coin.currency}</p>
            </div>
            }
          </div>
        ))
      }
    </div>
  )
}

export default DataList;
