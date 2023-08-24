import React, {useState} from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import DriveFolderUploadOutlined from "@mui/icons-material/DriveFolderUploadOutlined";
import "./newUser.css";

const NewUser = ({ inputs, title }) => {
  const [file, setFile] = useState(null);

  return (
    <div className='new_user'>
      <Sidebar />

      <div className="new_userContainer">
        <Topbar />
          <div className="newtop_content">
            <h1>{title}</h1>
          </div>
          <div className="new_bottom">
            <div className="newLeft">
              <img src={file ? URL.createObjectURL(file) 
                : "/assets/person/DefaultProfile.jpg"} 
                alt="defaultImage" 
                className='defaultImg'/>
            </div>
            <div className="newRight">
              <form>
                <div className="formInputLine">
                  <label htmlFor="file">Image: 
                   <DriveFolderUploadOutlined className='profile_Icon'/>
                  </label>
                  <input type="file" id='file' style={{ display: "none"}}
                  onChange={(e)=>setFile(e.target.files[0])}/>
                </div>
                {inputs.map((input) => (
                 <div className="formInputLine" key={input.id}>
                    <label htmlFor={input.name}>{input.label}</label>
                    <input 
                    type={input.type} 
                    id={input.id} name={input.name}
                    placeholder={input.placeholder}/>
                 </div>
                ))}
                <button type="submit" className='submit_btn'>Submit</button>
              </form>
            </div>
          </div>
      </div>
    </div>
  )
}

export default NewUser