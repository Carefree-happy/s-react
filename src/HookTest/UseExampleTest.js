import { useEffect, useState } from "react";

export function UseExampleTest() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        function handleMove(e) {
            setPosition({ x: e.clientX, y: e.clientY });
        }
        window.addEventListener("mousemove", handleMove);
        return () => {
            window.removeEventListener("mousemove", handleMove);
        };
    }, []);
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
