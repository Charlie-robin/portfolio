
import "./App.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import { LinkedIn } from "@mui/icons-material";
import { LinearProgress } from "@mui/material";

function App() {
  return (
    <>
      <div>
        <a className="logo" href="https://github.com/Charlie-robin" target="_blank">
          <GitHubIcon sx={{ fontSize: 80, margin: "0 10px" }} />
        </a>
        <a className="logo" href="https://www.linkedin.com/in/charlie-robin-richardson/" target="_blank">
          <LinkedIn sx={{ fontSize: 80, margin: "0 10px" }} />
        </a>
      </div>
      <h1>Under Construction 👷‍♂️</h1>
      <LinearProgress color="secondary"/>
    </>
  );
}

export default App;
