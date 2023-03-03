import Login from "./Pages/Login/Login.js";

function App() {
    return (
        <div
            className="App"
            style={{
                maxWidth: "480px",
                margin: "0 auto",
                minHeight: "100%",
                width: "auto",
                position: "relative",
                wordBreak: "keep-all",
            }}
        >
            <Login />
        </div>
    );
}

export default App;