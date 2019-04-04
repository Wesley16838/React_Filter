import React from 'react'
import courses from "./courses"
import "./styles.css";


export default class Cards extends React.Component {
       
      createCard = () => {
        let class_list = []
        let card_list = []
        let new_list=[]
        let classname = "card show"
        // Outer loop to create parent
        for(let k=0; k < courses.length; k++){
            new_list[k]=[]
            new_list[k].push(courses[k].title)
            new_list[k].push(courses[k].tags)
        }
        // console.log(new_list)
        // console.log(new_list[1][1])
        for (let i = 0; i < courses.length; i++) {   
           for(let j = 0; j < new_list[i][1].length; j++){
                classname += ' '+new_list[i][1][j];    
           }  
            card_list.push(
                <div className={classname} >
                    <li className="courseTitle">{courses[i].title}</li>
                    <li className="courseAuthor">{courses[i].author_id}</li>
                    <li className="courseImage"><img className="Logo" alt="Logo" src={courses[i].image}/></li> 
                </div>)
            classname = "card show"
        }
        return card_list
      }

      render() {
        return(
          <ul className="cardList">
            {this.createCard()}
          </ul>
          
        )
      }
    
  
  }
