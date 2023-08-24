import React from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import CalendarTodayIcon from "@mui/icons-material/CalendarTodayOutlined";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroidOutlined";
import MailOutline from '@mui/icons-material/MailOutline';
import LocationSearchingIcon from "@mui/icons-material/LocationSearchingOutlined";
import PublishIcon from "@mui/icons-material/Publish";
import {Link} from "react-router-dom";

import "./SingleUser.css";


const SingleUser = () => {
  return (
    <div className='singleUser'>
      <Sidebar />
      <div className='singleuserContainer'>
        <Topbar />

        <div className="topTitleContainer">
          <div className="leftTitle">
              <span className='left_title'>Edit User</span>
            </div>
            <Link to="/newuser">
              <div className="rightTop">
                <span className='addButton'>Create</span>
              </div>
            </Link>
          </div>

        <div className="singleuser_body_container">
         
          {/*Left details Edit user*/}
          <div className="singleUserleft">
            
            {/*user account detail*/}
            <div className="showTopDetail">
              <div className="userImageCol">
               <img src="/assets/person/person1.jpg" alt="defaultUserImg" 
                 className='userImage'
                 />
                  <div className="userTopDetail">
                 <span className="userName">Olivia Smith</span>
                <span className='userPos'>Software Developer</span>
              </div>
             </div>
             {/*user contact details*/}
             <div className="topUserDetail">
               <span>Account Details</span>

               <div className="userDetailsBottom">
                 <PermIdentityIcon className="showUserIcon"/>
                 <span className='userIconTitle'>oliviasmith</span>
               </div>

               <div className="userDetailsBottom">
                 <CalendarTodayIcon className="showUserIcon"/>
                 <span className='userIconTitle'>10.12.2022</span>
               </div>
             </div>

              {/*user contact details*/}
             <div className="topUserDetail">
               <span>Contact Details</span>

               <div className="userDetailsBottom">
                 <PhoneAndroidIcon className="showUserIcon"/>
                 <span className='userIconTitle'>+1 925 243 199</span>
               </div>

               <div className="userDetailsBottom">
                 <MailOutline className="showUserIcon"/>
                 <span className='userIconTitle'>olivia@gmail.com</span>
               </div>
               <div className="userDetailsBottom">
                 <LocationSearchingIcon className="showUserIcon"/>
                 <span className='userIconTitle'>London</span>
               </div>
               <div className="userDetailsBottom">
                 <LocationSearchingIcon className="showUserIcon"/>
                 <span className='userIconTitle'>USA</span>
               </div>
             </div>
            </div>
          </div>
         <div className="singleUserRight">
            <span className="singleUserUpdateTitle">Edit</span>
              <form className="singleUserUpdateForm">
                <div className="showUpdateForm">
                  <div className="userUpdateItem">
                      <label>Username</label>
                      <input type="text" 
                      placeholder='oliviasmith'
                      className='userUpdateInput'
                      />
                    </div>
                    <div className="userUpdateItem">
                      <label>Full Name</label>
                      <input type="text" 
                      placeholder='Olivia Smith'
                      className='userUpdateInput'
                      />
                    </div>
                    <div className="userUpdateItem">
                      <label>Email</label>
                      <input type="email" 
                      placeholder='olivia@gmail.com'
                      className='userUpdateInput'
                      />
                    </div>
                    <div className="userUpdateItem">
                      <label>Phone</label>
                      <input type="number" 
                      placeholder='+1 925 243 199'
                      className='userUpdateInput'
                      />
                    </div>
                    <div className="userUpdateItem">
                      <label>Address</label>
                      <input type="text" 
                      placeholder='London | USA'
                      className='userUpdateInput'
                      />
                    </div>

                    <div className="userUpdateItem">
                      <label>Country</label>
                      <input type="text" 
                      placeholder='USA'
                      className='userUpdateInput'
                      />
                    </div>
                </div>
                <div className="showUpdateUploadImg">
                  <div className="userUpdateUpload">
                      <img src="/assets/person/person1.jpg" 
                      alt="img_upload" className='upload_image'/>
                      <label htmlFor="file"><PublishIcon className='publishIcon'/></label>
                      <input type="file" id='file'
                      style={{display: "none"}}/>
                   </div>
                  <button className="updateButton">Update</button>
                </div>
              </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleUser;