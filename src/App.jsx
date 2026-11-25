import { Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import PlayPage from "./pages/PlayPage";

function App() {
  // ★1 下の <HomePage /> を、Routes と Route 2本に書き換える
  //     /     → HomePage
  //     /play → PlayPage
  return <HomePage />;
}

export default App;
