import { forwardRef, useRef } from "react";

export function UseExampleTest() {
    const ref = useRef(null);
    return (
        <>
            <button onClick={() => ref.current.play()}>Play</button>
            <button onClick={() => ref.current.pause()}>Pause</button>
            <br />
            <MyVideoPlayer
                ref={ref}
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
                type="video/mp4"
                width="250"
            />
        </>
    );
}

const MyVideoPlayer = forwardRef(function VideoPlayer({ src, type, width }, ref) {
    return (
        <video width={width} ref={ref}>
            <source src={src} type={type} />
        </video>
    );
});
