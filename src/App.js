import logo from "./logo.svg";
import "./App.css";
import "./Styles.css";
import info2 from "./info2.jpg";
function App() {
    return (
        <div className="App">
            <div style={{ maxWidth: "100vw", border: "solid 1px black" }}>
                <h1 className="title-red">Ahmed</h1>
                <br />

                <img src={info2} width="30%" height="150px" />

                <br />

                <img src="./info1.jpg" width="30%" height="150px" />
            </div>

            <video width="320" height="240" controls>
                <source src="/Ordinateur.MP4" type="video/mp4" />
            </video>
        </div>
    );
}

export default App;
