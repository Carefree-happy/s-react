import { forwardRef, useRef, useState } from "react";

export function UseExampleTest() {
    const ref = useRef(null);

    function handleClick() {
        ref.current.focus();
    }

    return (
        <form>
            <FormField label="Enter your name:" ref={ref} isRequired={true} />
            <button type="button" onClick={handleClick}>
                Edit
            </button>
        </form>
    );
}

const FormField = forwardRef(function FormField({ label, isRequired }, ref) {
    const [value, setValue] = useState("");
    return (
        <>
            <MyInput
                ref={ref}
                label={label}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            {isRequired && value === "" && <i>Required</i>}
        </>
    );
});

const MyInput = forwardRef((props, ref) => {
    const { label, ...otherProps } = props;
    return (
        <label>
            {label}
            <input {...otherProps} ref={ref} />
        </label>
    );
});
