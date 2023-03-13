import { useState } from "react";
function test() {
    console.log("调用")
    return Math.floor(Math.random() * 10)
}
export default function UseStateTest() {
    const [state, setState] = useState(test);
    const [arrayState, setArrayState] = useState([1, 2, 3, 4]);
    const [objectState, setObjectState] = useState({ name: "melody", age: 23 });
    const [fcn, setFcn] = useState(() => {console.log});

    function handleClick() {
        // 2. 根据之前的状态，在一个函数中更新状态
        // 如果多次传入更新值，则会将其中的函数或值，放入队列中，在下一次渲染期间，调用他们
        // 3. 根据之前的状态，在一个事件中更新状态，同2
        setState(a => a + 1);
        setState(a => a + 1);
        setState(a => a + 1);
        setFcn(() => {})
    }

    function changeName() {
        // 4. 直接给对象state赋值，值会更改，但不会立即渲染出来
        // ?  会随着另外一个 setState 的执行，渲染出来，可新建一个对象
        objectState.name = "shaolin"
        console.log(objectState)
        setObjectState({...objectState, name: "shaolin"})
    }
    return (
        <ul>
            {/* 1. 组件添加状态 
            调用该set函数不会更改已执行代码中的当前状态：
            它只影响从下一次useState渲染开始返回的内容 */}
            <li key={state} onClick={() => setState(state + 1)}>
                {state}
            </li>
            {arrayState.map((i, index) => {
                return <li key={i} onClick={handleClick}>{i}</li>;
            })}
            <li key={7} onClick={changeName}>{objectState.name}</li>
            <li key={8}>{objectState.age}</li>
        </ul>
    );
}

// 5、避免重新创建初始状态
// 传递初始化器(函数)和直接传递初始状态(执行后的函数)的区别
// 传入执行后的函数返回值作为初始值时，可能会有点浪费，会在后面的每次渲染都调用
// 不如直接传入函数，则只会在初始化时调用一次

// 6、一键重置状态

// 7、存储以前渲染的信息