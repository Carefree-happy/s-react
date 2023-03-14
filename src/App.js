import { Fragment } from "react";

export default function App() {
    const article = (
        <>
            <PostTitle title="An update"></PostTitle>
            <PostBody body="It's been a while since I posted..."></PostBody>
        </>
    )
    const article2 = (
        <>
            <PostTitle title="My new blog"></PostTitle>
            <PostBody body="I am starting a new blog!"></PostBody>
        </>
    )

    return <Fragment>
        <Post article={article}/>
        <Post article={article2}/>
    </Fragment>
}

function Post({ article }) {
    return <>
       {article.props.children.map(e => {
            return e
       })}
    </>
}

function PostTitle({ title }) {
    return <h1>{title}</h1>
}

function PostBody({ body }) {
    return <article><p>{body}</p></article>
}