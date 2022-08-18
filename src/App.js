import React, {useState} from "react";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import Center from "./Components/center";
import Form from "./Components/form";
import List from "./Components/list";
import Home from "./Components/home";
import Counter from "./Components/counter";
import Clock from "./Components/clock";
import Timer from "./Components/timer";
import PracticeProps from "./Components/practiceProps";
import PasswordGenerator from "./Components/passwordGenerator";
import './App.css';

const App = () => {
  const [topic, settopic] = useState("Web Development");
  return (
    <>
      {/* <p>Hi from the react app!</p> */}
      {/* <Navbar /> */}
      {/* <Center /> */}
      {/* <Home />  */}
      {/* <List />
      <Form /> */}
      {/* <Footer /> */}
      {/* <Counter />
      <Clock/> */}
      {/* <Timer/> */}
      <PracticeProps topic={topic} />
      <PasswordGenerator/>
    </>
  );
};

export default App;
