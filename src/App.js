import { Profiler } from "react";

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
    function onRender(e) {
        console.log(e)
    }

    return articles.map((article, i) => (
        <Profiler id={`${i}multiple`} key={i} onRender={onRender}>
            <PostTitle title={article.title} />
            <PostBody body={article.body} />
        </Profiler>
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
