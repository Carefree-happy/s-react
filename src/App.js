import { Fragment } from "react";

export default function App() {
    return <Fragment>
        <Post title="One" body="One body"/>
        <Post title="two" body="Two body"/>
    </Fragment>
}

function Post({ title, body}) {
    return <>
        <PostTitle title={title}/>
        <PostBody body={body}/>
    </>
}

function PostTitle({ title }) {
    return <h1>{title}</h1>
}

function PostBody({ body }) {
    return <article><p>{body}</p></article>
}