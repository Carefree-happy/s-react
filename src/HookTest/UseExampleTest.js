import { useEffect, useRef, useState } from "react";

export function UseExampleTest() {
    const [show, setShow] = useState(false);
    return (
        <>
            <button onClick={() => setShow(!show)}>
                {show ? "Remove" : "Show"}
            </button>
            <hr />
            {show && <Welcome />}
        </>
    );
}

function Welcome() {
    const ref = useRef(null);

    useEffect(() => {
        const animation = new FadeInAnimation(ref.current);
        animation.start(5000);
        return () => {
            animation.stop();
        };
    }, []);

    return (
        <h1
            ref={ref}
            style={{
                opacity: 0,
                color: "white",
                padding: 50,
                textAlign: "center",
                fontSize: 50,
                backgroundImage:
                    "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)",
            }}
        >
            Welcome
        </h1>
    );
}


class FadeInAnimation {
    constructor(node) {
        this.node = node;
    }
    start(duration) {
        this.duration = duration;
        if (this.duration === 0) {
            // Jump to end immediately
            this.onProgress(1);
        } else {
            this.onProgress(0);
            // Start animating
            this.startTime = performance.now();
            this.frameId = requestAnimationFrame(() => this.onFrame());
        }
    }
    onFrame() {
        const timePassed = performance.now() - this.startTime;
        const progress = Math.min(timePassed / this.duration, 1);
        this.onProgress(progress);
        if (progress < 1) {
            // We still have more frames to paint
            this.frameId = requestAnimationFrame(() => this.onFrame());
        }
    }
    onProgress(progress) {
        this.node.style.opacity = progress;
    }
    stop() {
        cancelAnimationFrame(this.frameId);
        this.startTime = null;
        this.frameId = null;
        this.duration = 0;
    }
}
