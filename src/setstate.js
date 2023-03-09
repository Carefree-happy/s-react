import { Component } from "react"
// setState只在合成事件和生命周期钩子函数中是异步的，而在原生事件中都是同步的
class Test1 extends Component {
    state = {
        count: 0
    }
    componentDidMount() {
        this.setState({
            count: 1
        }, () => {
            console.log(this.state.count)
        })
        console.log(this.state.count)
    }
    render() {
        return <div>{this.state.count}</div>
    }
}
// 0 1 回调函数后执行

class Test2 extends Component {
    state = {
        count: 0
    }
    componentDidMount() {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log(this.state.count)
        })
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log(this.state.count)
        })
    }
    render() {
        return <div>{this.state.count}</div>
    }
}
// 1 1 反直觉

class Test3 extends Component {
    state = {
        count: 0
    }
    componentDidMount() {
        this.setState(preState => {
            console.log(preState.count)
            return {count: preState.count + 1}
        }, 
            () => {console.log(this.state.count)});
        this.setState(preState => {
            console.log(preState.count)
            return {count: preState.count + 1}
        }, 
            () => {console.log(this.state.count)});
    }

    render() {
        return <div>{this.state.count}</div>
    }
}
// 0 1 2 2 如果只是回调函数，本身值不变