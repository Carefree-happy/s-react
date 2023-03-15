import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export function UseExampleTest() {
    let ref = useRef(0);

    function handleClick() {
        // 此处证明ref.current 中的值跟渲染无关
        ref.current = ref.current + 1;
        alert("You clicked " + ref.current + " times!");
    }

    return <button onClick={handleClick}>Click me! {ref.current}</button>;
}
