import { useEffect, useState } from "react";

export function UseExampleTest() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useWindowListener("pointermove", (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
    });

    return (
        <div
            style={{
                position: "absolute",
                backgroundColor: "pink",
                opacity: 0.6,
                borderRadius: "50%",
                transform: `translate(${position.x}px, ${position.y}px)`,
                left: -20,
                top: -20,
                width: 40,
                height: 40,
            }}
        />
    );
}

function useWindowListener(eventType, listener) {
    useEffect(() => {
        window.addEventListener(eventType, listener);
        return () => {
            window.removeEventListener(eventType, listener);
        };
    }, [eventType, listener]);
}
