import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Singup} /> */}
      </Routes>
      <button
        onClick={() => {
          axios
            .get("http://52.79.81.200:8080/v1/metros")
            .then((결과) => {
              console.log(결과.data);
            })
            .catch(() => {
              console.log("실패함 ㅅㄱ");
            });
        }}
      >
        버튼
      </button>
    </div>
  );
}

export default App;
