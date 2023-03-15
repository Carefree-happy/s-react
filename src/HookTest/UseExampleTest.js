import { forwardRef, useImperativeHandle, useRef, useState } from "react";

export function UseExampleTest() {
    const postRef = useRef(null);

    function handleClick() {
        postRef.current.scrollAndFocusAddComment();
    }

    return (
        <>
            <button onClick={handleClick}>Write a comment</button>
            <Post ref={postRef} />
        </>
    );
}

const Post = forwardRef((props, ref) => {
    const commentsRef = useRef(null);
    const addCommentRef = useRef(null);

    useImperativeHandle(
        ref,
        () => {
            return {
                scrollAndFocusAddComment() {
                    commentsRef.current.scrollToBottom();
                    addCommentRef.current.focus();
                },
            };
        },
        []
    );

    return (
        <>
            <article>
                <p>Welcome to my blog!</p>
            </article>
            <CommentList ref={commentsRef} />
            <AddComment ref={addCommentRef} />
        </>
    );
});

const CommentList = forwardRef(function CommentList(props, ref) {
    const divRef = useRef(null);

    useImperativeHandle(
        ref,
        () => {
            return {
                scrollToBottom() {
                    const node = divRef.current;
                    node.scrollTop = node.scrollHeight;
                },
            };
        },
        []
    );

    let comments = [];
    for (let i = 0; i < 50; i++) {
        comments.push(<p key={i}>Comment #{i}</p>);
    }

    return (
        <div
            className="CommentList"
            ref={divRef}
            style={{
                height: 100,
                overflow: "scroll",
                border: "1px solid black",
                marginTop: 20,
                marginBottom: 20,
            }}
        >
            {comments}
        </div>
    );
});

const AddComment = forwardRef(function AddComment(props, ref) {
    return <input placeholder="Add comment..." ref={ref} />;
});
