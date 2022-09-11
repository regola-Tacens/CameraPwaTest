import { useState } from 'react'

import DataList from "./DataList";

const AppTest = () => {
  const [ filter, setFilter] = useState(null)
  const [myVar] = useState (process.env.REACT_APP_NOT_SECRET_CODE)
console.log(myVar)
  return (
    <div>
        <small>You are running this application in <b>{process.env.NODE_ENV}</b> mode.</small>
        <div>{myVar}yo</div>
        <button onClick={()=>setFilter(1)}>filter 1</button>
        <button onClick={()=>setFilter(2)}>filter 2</button>
        <button onClick={()=>setFilter(3)}>filter 3</button>
        <button onClick={()=>setFilter(4)}>filter 4</button>
        <button onClick={()=>setFilter(5)}>filter 5</button>
        <button onClick={()=>setFilter(6)}>filter 6</button>
      <DataList filter ={filter} />
    </div>
  );
};

export default AppTest;
