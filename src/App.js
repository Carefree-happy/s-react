import { StrictMode, useState } from "react";

let initialStories = [
    { id: 0, label: "Ankit's Story" },
    { id: 1, label: "Taylor's Story" },
];

export default function App() {
    let [stories, setStories] = useState(initialStories);

    return (
        <StrictMode style={{ width: "100%", height: "100%", textAlign: "center" }}>
            <StoryTray stories={stories} />
        </StrictMode>
    );
}

function StoryTray({ stories }) {
    const items = stories;
    items.push({ id: "create", label: "Create Story" });
    return (
        <ul>
            {items.map((story) => (
                <li key={story.id}>{story.label}</li>
            ))}
        </ul>
    );
}
