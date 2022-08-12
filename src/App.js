import React from "react";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import Center from "./Components/center";
import Form from "./Components/form";
import List from "./Components/list";

const App = () => {
  return (
    <>
      <h1>Hi from the react app!</h1>
      <Navbar />
      <Center />
      <List />
      <Form />
      <Footer />
    </>
  );
};

export default App;
