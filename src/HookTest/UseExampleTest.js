import { useRef } from "react";

export function UseExampleTest() {
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
    }

    return (
        <>
            <input ref={inputRef} />
            <button onClick={handleClick}>Focus the input</button>
        </>
    );
}
