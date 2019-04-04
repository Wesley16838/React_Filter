import React, {Component}from "react";
import ReactDOM from "react-dom";
import Title from "./Title"
import Tag from "./Tag"
import Cards from "./Cards"
// import fetchAuthorData from "./fetchAuthorData"
import "./styles.css";

class App extends Component {
    // constructor(props){
    //     super(props);
    // }
    render(){
        return (
            <div className="container">
        
              <Title titleName="Course Catalog"/>
              <Tag />
              <Cards />
              {/* <fetchAuthorData /> */}
            </div>
          );
    }
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
