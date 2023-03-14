import { StrictMode, useState } from "react";

export default function App() {
    const [show, setShow] = useState(true);
    const [value, setValue] = useState("value");
    return (
        <>  
            <button onClick={() => setShow(!show)}>button</button>
            <input value={value} onChange={(e) => setValue(e.target.value)}></input>
            {show && <Name value={value} />}
        </>
    );
}

function Name({ value }) {
    const [dom, setDOM] = useState(console.log("检测"));
    return <div ref={setDOM}>{value}</div>;
}

/**
 ref 的形式有两种：
 1. 形如 {current: T} 的数据结构
 2. 回调函数形式，会在 ref 更新、销毁时触发

 setDOM 是 useState()的dispatch方法
 1. 直接传递更新后的值，比如setDOM(x)
 2. 传递更新状态的方法，比如setDOM(oldDOM => return{})

 在例子中，虽然反常，但ref的第二种形式和dispatch的第二种形式确实是契合的。
 也就是说，在例子中传递给 ref 的 setDOM 方法，
 会在[div对应DOM]更新、销毁时执行，例子中的setDOM是useState的dispatch方法
 dom中的状态保存的就是[div对应DOM]的最新值

 更新节点的值时，不会执行函数；销毁时不执行，新建时执行；
 去掉尖头函数后，会执行两次
*/
