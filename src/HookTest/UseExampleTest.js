import { useEffect, useRef, useState } from "react";

export function UseExampleTest() {
    const [show, setShow] = useState(false);
    return (
        <>
            <button onClick={() => setShow(!show)}>
                {show ? "close" : "open"} dialog
            </button>
            <ModalDialog isOpen={show}>
                Hello, Here!
                <br/>
                <button onClick={() => {setShow(false)}}>close dialog</button>
            </ModalDialog>
        </>
    );
}

function ModalDialog({ isOpen, children }) {
    const ref = useRef();

    useEffect(() => {
        if(!isOpen) return;
        const dialog = ref.current;
        dialog.showModal();
        return () => {
            dialog.close();
        };
    }, [isOpen])

    return <dialog ref={ref}>{children}</dialog>
}