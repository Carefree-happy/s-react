import { forwardRef, useImperativeHandle, useRef } from "react";

export function UseExampleTest() {
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
    }

    return (
        <>
            <MyInput ref={inputRef} />
            <button onClick={handleClick}>Focus the input</button>
        </>
    );
}

const MyInput = forwardRef((props, ref) => {
    const inputRef = useRef(null)

    useImperativeHandle(ref, () => {
        return {
            focus() {
                inputRef.current.focus();
            },
            scrollIntoView() {
                inputRef.current.scrollIntoView();
            }
        }
    })
    return <input {...props} ref={ref} />;
});