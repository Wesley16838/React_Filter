import React from 'react'
import courses from "./courses"
import ReactDOM from "react-dom";
import "./styles.css";


//Tags should list the number of times they appear in all the courses
//sort first and push tag and num into array

export default class Tag extends React.Component {
   
    //Filter selection
   
    Filter (param,e) {
        console.log('Event', e);
        console.log('Parameter', param);
        let x = document.getElementsByClassName("filterButton");
        let y = document.getElementsByClassName("card");
        let z = []
      
       for(let a = 0; a<y.length; a++){
           z=y[a].className.split(" ")//Array for card's class-name
           console.log(z);
        if(z.indexOf(param)>-1){
            if(z.indexOf("show")>-1){//class include show originally
                
                console.log('1')
            }else{
                y[a].className += " " + "show";
                console.log('2')
            }
           
        }else{
            y[a].className = y[a].className.replace("show","")    
            console.log('3')
        }
       }
        
      
    }
    // 
    createTable = () => {
     
      let table = []
      let tag_list = []
      let num_list = []
      let programming = 0;
      let javascript = 0;
      let intro = 0;
      let web = 0;
      let html = 0;
      let tdd = 0;
      let css = 0;
      let design = 0;
      let ruby = 0;
      // Outer loop to create parent
      for (let i = 0; i < courses.length; i++) {
        
        for(let j = 0; j< courses[i].tags.length; j++){
            tag_list.push(courses[i].tags[j])
        }
      }
     
      for(let j = 0; j<tag_list.length; j++){
          switch (tag_list[j]){
                case "programming":
                    programming++
                    break;
                case "javascript":
                    javascript++
                    break;
                case "intro":
                    intro++
                    break;  
                case "web":
                    web++
                    break; 
                case "html":
                    html++
                    break;   
                case "tdd":
                    tdd++
                    break;   
                case "css":
                    css++
                    break;   
                case "design":
                    design++
                    break;
                case "ruby":
                    ruby++
                    break;    
                default:

          }
      }
        num_list.push(css)
        num_list.push(design)
        num_list.push(html)
        num_list.push(intro)
        num_list.push(javascript)
        num_list.push(programming)
        num_list.push(ruby)
        num_list.push(tdd)
        num_list.push(web)

        let unique = [...new Set(tag_list)]//unique
        let sort_unique=unique.sort();//sort

       let cn = "filterButton";
        

        for (let i = 0; i < sort_unique.length; i++) {    
            cn = cn + " " + sort_unique[i]      
            table.push(
                <li>
                <button id={i} className={cn} onClick={({e}) => this.Filter(sort_unique[i],e)}><span>{sort_unique[i]} | {num_list[i]}</span></button>
              
                </li>
            )
            cn = "filterButton";
        }


      return table
    }
  
  
    render() {
      return(
        <ul className="tagList">
          {this.createTable()}
        </ul>
      )
    }
  
  }
