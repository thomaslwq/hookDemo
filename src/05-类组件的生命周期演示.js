import React, { Component } from "react"


class Demo extends Component {
  componentWillUnmount() {
    console.log("组件销毁拉！");
  }
  render() {
    return <h1>Demo组件</h1>
  }
}
export default class App extends Component {

  componentDidMount() {
    console.log("组件已经挂载到树上");
    document.title = this.state.num;
  }
  componentDidUpdate() {
    console.log("视图更新了");
    document.title = this.state.num;
  }

  state = {
    num: 1,
    flag: true
  }
  render() {
    return <h1>
      {
        this.state.num
      }
      <button onClick={
        (params) => {
          this.setState({
            num: this.state.num + 1
          })
        }

      }>加</button>
      {
        this.state.flag ? <Demo></Demo> : ""
      }
      <button onClick={
        (params) => {
          this.setState({
            flag:false
          })
        }
        
      }>销毁组件</button>

    </h1>
  }
}