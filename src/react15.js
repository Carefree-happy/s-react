import React from "react"

// 定义子组件
class LifeCircle extends React.Component {
    constructor(props) {
        console.log("进入constructor")
        super(props)
        // state 可以在 constructor 里初始化
        this.state={text:"子组件的文本"}
    }
    // 初始化渲染时调用
    componentWillMount() {
        console.log("componentWillMount 方法执行")
    }
    // 初始化渲染时调用
    componentDidMount() {
        console.log("componentDidMount 方法执行")
    }

    // 父组件修改组件的props时会调用
    componentWillReceiveProps(nextProps) {
        console.log("componentWillReceiveProps 方法执行")
    }

    // 组件更新时调用
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate 方法执行")
        return true
    }

    // 组件更新时调用
    componentWillUpdate(nextProps, nextState) {
        console.log("componentWillUpdate 方法执行")
    }

    // 组件更新后调用
    componentDidUpdate(nextProps, nextState) {
        console.log("componentDidUpdate 方法执行")
    }

    // 组件卸载时调用
    componentWillUnmount() {
        console.log("子组件的 componentWillUnmount 方法执行")
    }

    changeText = () => {
        this.setState({text: "修改后的子组件文本"})
    }

    render() {
        console.log("render 方法执行")
        return <div>
            <button onClick={this.changeText}>修改子组件的内容</button>
            <h2>{this.state.text}</h2>
            <h2>{this.props.text}</h2>
        </div>
    }
}

// 定义 LifeCircle 组件的父组件
class LifeCircleContainer extends React.Component {
    state = {
        text: "父组件的文本",
        hideChild: false
    }

    changeText = () => {
        this.setState({
            text: "修改后的父组件文本"
        })
    }

    hideChild = () => {
        this.setState({
            hideChild: true
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.changeText}>修改父组件的文本</button>
                <button onClick={this.hideChild}>隐藏子组件</button>
                {this.state.hideChild ? undefined : <LifeCircle text={this.state.text}/>}
            </div>
        )
    }
}

export default LifeCircleContainer

