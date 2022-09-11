
import { useEffect, useState, useMemo, useCallback } from 'react'

const CallbackTest = () => {
  const [count, setCount] = useState(0)
  const a = useMemo(()=>({test: 1}),[])
  const before = performance.now();
  const fetch = useCallback(() => {
    console.log('fetch')
  },[])
  console.log('render')
  const handleClick = () => {
    console.log('click')
  }
  const after = performance.now() - before;

  useEffect(()=>{
    console.log('a changed')
    fetch()
  },[a,fetch])

  return (
    <div>test
      <button onClick={()=>setCount(c => c + 1)}>clikc</button>
      <button onClick={handleClick}>handleClick</button>
      {JSON.stringify(a)}
      {count}
      {after}
    </div>
  )
}

export default CallbackTest