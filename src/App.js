import { Fragment } from "react";

export default function App() {
    const articles = [
        {
            title: "An update",
            body: "It's been a while since I posted...",
        },
        {
            title: "My new blog",
            body: "I am starting a new blog!",
        },
    ];

    return articles.map((article, i) => (
        <Fragment key={i}>
            <PostTitle title={article.title} />
            <PostBody body={article.body} />
        </Fragment>
    ));
}

function PostTitle({ title }) {
    return <h1>{title}</h1>;
}

function PostBody({ body }) {
    return (
        <article>
            <p>{body}</p>
        </article>
    );
}
