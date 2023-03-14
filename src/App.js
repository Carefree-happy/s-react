import { StrictMode, useEffect } from "react";

const serverUrl = "https://localhost:1234";
const roomId = "general";
let connections = 0;

export default function App() {
    return <StrictMode><Post/></StrictMode>
}

function Post() {
    useEffect(() => {
        const connection = createConnection(serverUrl, roomId);
        connection.connect();
        return () => connection.disconnect();
    }, []);
    return <h1>Welcome to the {roomId} room!</h1>;
}

function createConnection(serverUrl, roomId) {
    // A real implementation would actually connect to the server
    return {
        connect() {
            console.log(
                '✅ Connecting to "' + roomId + '" room at ' + serverUrl + "..."
            );
            connections++;
            console.log("Active connections: " + connections);
        },
        disconnect() {
            console.log(
                '❌ Disconnected from "' + roomId + '" room at ' + serverUrl
            );
            connections--;
            console.log("Active connections: " + connections);
        },
    };
}
