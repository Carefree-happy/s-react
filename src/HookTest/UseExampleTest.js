import { forwardRef, useImperativeHandle, useRef, useState } from "react";

export function UseExampleTest() {
    const ref = useRef(null);

    function handleClick() {
        ref.current.focus();
        // This won't work because the DOM node isn't exposed:
        // ref.current.style.opacity = 0.5;
    }

    return (
        <form>
            <MyInput label="Enter your name:" ref={ref} />
            <button type="button" onClick={handleClick}>
                Edit
            </button>
        </form>
    );
}

const MyInput = forwardRef((props, ref) => {
    const inputRef = useRef(null);

    useImperativeHandle(
        ref,
        () => {
            return {
                focus() {
                    inputRef.current.focus();
                },
                scrollIntoView() {
                    inputRef.current.scrollIntoView();
                },
            };
        },
        []
    );

    return <input {...props} ref={inputRef} />;
});
