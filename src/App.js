import { useState } from "react";
import "./App.css";
import Wrapper from "./Components/Wrapper";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return(    
  <>
    <Wrapper/>
    <ToastContainer/>
  </>
  );
}

export default App;
