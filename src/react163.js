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
    // componentWillMount() {
    //     console.log("componentWillMount 方法执行")
    // }
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps 方法执行")
        return {
            fatherText: props.text
        }
    }

    // 初始化渲染时调用
    componentDidMount() {
        console.log("componentDidMount 方法执行")
    }

    // 父组件修改组件的props时会调用
    // componentWillReceiveProps(nextProps) {
    //     console.log("componentWillReceiveProps 方法执行")
    // }

    // 组件更新时调用
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate 方法执行")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate 方法执行")
        return "haha"
    }

    // 组件更新时调用
    // componentWillUpdate(nextProps, nextState) {
    //     console.log("componentWillUpdate 方法执行")
    // }

    // 组件更新后调用
    componentDidUpdate(nextProps, nextState, valueFromSnapshot) {
        console.log("componentDidUpdate 方法执行")
        console.log("componentDidUpdate 从 getSnapshotBeforeUpdate 拿到的值是", valueFromSnapshot)
    }

    // 组件卸载时调用
    componentWillUnmount() {
        console.log("子组件的 componentWillUnmount 方法执行")
    }

    changeText = () => {
        this.setState({text: "修改后的子组件文本"})
    }

    handleClick = () => {
        console.log("forceUpdate 方法执行")
        this.forceUpdate()
    }

    render() {
        console.log("render 方法执行")
        return <div>
            <button onClick={this.changeText}>修改子组件的内容</button>
            <button onClick={this.handleClick}>force update</button>
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
// 对照着看，情况还是非常一致的
// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/