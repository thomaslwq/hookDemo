// useState hook 
import React, { useState } from 'react'

export default function App() {
  let [num,setNum] = useState(88);
  return (
    <div>
      { num }
      <button onClick={
        (params) => {
          setNum(num+1)
        }
      }>加</button>
    </div>
  )
}
