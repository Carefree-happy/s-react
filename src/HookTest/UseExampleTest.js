import { useEffect, useRef, useState } from "react";

export function UseExampleTest() {
    const [show, setShow] = useState(false);
    return (
        <>
            <LongSection />
            <Box />
            <LongSection />
            <Box />
            <LongSection />
        </>
    );
}

function LongSection() {
    const items = [];
    for (let i = 0; i < 50; i++) {
        items.push(<li key={i}>Item #{i} (keep scrolling)</li>);
    }
    return <ul>{items}</ul>;
}

function Box() {
    const ref = useRef(null);

    useEffect(() => {
        const div = ref.current;
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                document.body.style.backgroundColor = "black";
                document.body.style.color = "white";
            } else {
                document.body.style.backgroundColor = "white";
                document.body.style.color = "black";
            }
        });
        observer.observe(div, {
            threshold: 1.0,
        });
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div
            ref={ref}
            style={{
                margin: 20,
                height: 100,
                width: 100,
                border: "2px solid black",
                backgroundColor: "blue",
            }}
        />
    );
}
