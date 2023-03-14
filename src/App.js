import { Suspense, useState } from "react";
import { fetchData } from './data.js';

export default function App() {
    const [show, setShow] = useState(false);
    if (show) {
        return (
            <ArtistPage
                artist={{
                    id: "the-beatles",
                    name: "The Beatles",
                }}
            />
        );
    } else {
        return (
            <button onClick={() => setShow(true)}>
                Open The Beatles artist page
            </button>
        );
    }
}

function ArtistPage({ artist }) {
    return (
        <>
            <h1>{artist.name}</h1>
            <Suspense fallback={<Loading />}>
                <Albums artistId={artist.id} />
            </Suspense>
        </>
    );
}

function Loading() {
    return <h2>🌀 Loading...</h2>;
}

function Albums({ artistId }) {
    const albums = use(fetchData(`/${artistId}/albums`));
    return (
        <ul>
            {albums.map((album) => (
                <li key={album.id}>
                    {album.title} ({album.year})
                </li>
            ))}
        </ul>
    );
}

function use(promise) {
    if (promise.status === "fulfilled") {
        return promise.value;
    } else if (promise.status === "rejected") {
        throw promise.reason;
    } else if (promise.status === "pending") {
        throw promise;
    } else {
        promise.status = "pending";
        promise.then(
            (result) => {
                promise.status = "fulfilled";
                promise.value = result;
            },
            (reason) => {
                promise.status = "rejected";
                promise.reason = reason;
            }
        );
        throw promise;
    }
}
