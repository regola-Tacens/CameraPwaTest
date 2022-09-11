import axios from 'axios'

const Home = () => {

  // send info throught axios
  axios.post('http://localhost:3006/', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  },{ headers: {'Content-Type': 'application/json'}})


  return (
    <div>
      home
    </div>
  )
}

export default Home