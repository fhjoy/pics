import React from "react";
import reactDom from "react-dom";
import App from "./components/App";

// class App extends React.Component{
//     render(){
//         return(

//         )
//     }
// }

reactDom.render(<App />, document.querySelector("#root"));
