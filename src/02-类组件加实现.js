import React,{ Component } from "react"
export default class App extends Component{

  state = {
    num: 1 
  }
  render(){
    return <div>
      <h1>各位老师好！</h1>
      <h1>{this.state.num}</h1>
      <button onClick={
        (params) => {
          this.setState({
            num:this.state.num + 1
          })
        }
        
      }>加</button>
    </div>
  }

}