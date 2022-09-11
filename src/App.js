import {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  const [ isModalOPen, setModalOpen] = useState(false)
  const [ triggerFetch, setTriggerFetch ] = useState(false)



  //receive push notification from the push server
  

  useEffect(() => {
    if(triggerFetch === true)
      setCount(count +1)
  }, [triggerFetch, count ])

  const handleOpenModal = () => {
    setTriggerFetch(false)
    setModalOpen(!isModalOPen)
  }

  const handleModalButton = () => {
    setTriggerFetch(true)
  }

  return (
    <div className="App">
      yo
      <div>{count}</div>
      <button  onClick={handleOpenModal}>show modal</button>
      {isModalOPen &&
      <div className='modal'> 
      <p>the modal is open !</p>
      <button onClick={handleModalButton}>fait un truc</button>
      </div>
      }
    </div>
  );
}

export default App;
