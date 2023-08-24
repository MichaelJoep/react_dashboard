import React from 'react';
import VisibilityIcon from "@mui/icons-material/Visibility";
import "./NewList.css";
import newImage from "../../assets/person/person1.jpg";

const newUsers = [
  {
    image: "../../assets/person/person1.jpg",
    name: "Lee Martin",
    title: "Admin Assistance",
    new_icon: <VisibilityIcon className='visibility_icon'/>,
    button: "Display",
  },
  {
    image: "../../assets/person/person2.jpg",
    name: "Lee Martin",
    title: "Admin Assistance",
    new_icon: <VisibilityIcon className='visibility_icon'/>,
    button: "Display",
  },
  {
    image: "../../assets/person/person3.jpg",
    name: "Lee Martin",
    title: "Admin Assistance",
    new_icon: <VisibilityIcon className='visibility_icon'/>,
    button: "Display",
  },
]


const NewList = () => {
  return (
    <div className='new_list'>
        <span className="newLists">New Members</span>
        <ul className="newListItem">
         
           <li className="new_list_items" >
              
           <img src={newImage} alt="user_image" className="new_img"/>
           <div className="newUserWidget">
             <span className="newUser_name">Love Day</span>
             <span className="newUser_title">Software Engineer</span>
           </div>
           <button  className='newList_button'>
             <VisibilityIcon  className='visibility_icon'/>
             Display
           </button>
         </li>

            
        </ul>
    </div>
  )
}

export default NewList