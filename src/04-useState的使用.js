
//1. 引入 state Hook
import React, { useState } from "react"

export default function App() {
  //2. 声明了一个 state 变量以及改变这个状态变量的方法  setNum
  let [num,setNum] = useState(0);
  let [str,setStr] = useState("💯");
  let [obj,setObj] = useState({
    name:"thomas",
    sex:"男"
  });
  return <div>
    天气不错啊！
    {/* 3. 读取state  */}
    <h1>{ num }</h1>
    <h1>{ str }</h1>
    <h1>{ obj.name }</h1>
    {/* 4. 更新num */}
    <button onClick={
      (params) => {
        setNum(num+1)
      }
      
    }>加</button>
  </div>

}