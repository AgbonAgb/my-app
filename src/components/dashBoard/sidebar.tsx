import { NavLink } from "react-router-dom";
import { ReactComponent as Profile } from '../../../src/svgs/profile.svg';
import { ReactComponent as Dashboard } from '../../../src/svgs/dashboard.svg';
import { ReactComponent as CourseIcon } from '../../../src/svgs/applicationFormIcon.svg';
import { ReactComponent as ApplicationStatusIcon } from '../../../src/svgs/applicationStatusIcon.svg';
import { ReactComponent as CourseRegIcon } from '../../../src/svgs/courseReg.svg';
import { ReactComponent as NotificationIcon } from '../../../src/svgs/notification.svg';
import { ReactComponent as Logout } from '../../../src/svgs/logoutIcon.svg';


import styles from './sidebar.module.scss';
import { Divider } from "@mui/material";



const Sidebar = () => {
 
    

    let activeStyle = {
        backgroundColor: '#ADA7D0', 
        color: '#FFFFFF',
        fill :  "#FFFFFF",
        margin: "0.0625rem",
        borderRadius: "0.5rem",
    }

    

    return(
        <nav >  
             <div className={styles.wrapper}> 
                <span className={styles.logoWrapper2}>
                    <Profile className={styles.imageStyle} />
                    {/* <div className={styles.imageStyle} /> */}
                    <span className={styles.userName}>
                        <div>
                            <p className={styles.name}>Godwin Agbon</p>
                            <p className={styles.occupation}>Student</p>
                        </div>
                    </span>
                   
                </span>
                <Divider className={styles.divide}/>


              
                
            
              
                
                    <>
                        <NavLink style={({isActive}) => isActive ? activeStyle : undefined} to='/dashbobard' className={styles.navLinkStyle}>
                            <Dashboard className={styles.iconWrapper}/> <span>Dashboard</span>
                        </NavLink>

                      

                        <NavLink style={({isActive}) => isActive ? activeStyle : undefined} to='/couahrse-registration' className={styles.navLinkStyle}>
                            <CourseIcon className={styles.iconWrapper}/> <span>Application Form</span>
                        </NavLink>

                        <NavLink style={({isActive}) => isActive ? activeStyle : undefined} to='/dashboarddd' className={styles.navLinkStyle}>
                            <ApplicationStatusIcon className={styles.iconWrapper}/> <span>Application Status</span>
                        </NavLink>

                        <NavLink style={({isActive}) => isActive ? activeStyle : undefined} to='/course-registration' className={styles.navLinkStyle}>
                            <CourseRegIcon className={styles.iconWrapper}/> <span>Course Registration</span>
                        </NavLink>

                        <NavLink style={({isActive}) => isActive ? activeStyle : undefined} to='/dashsboard' className={styles.navLinkStyle}>
                            <NotificationIcon className={styles.iconWrapper}/> <span>Notification</span>
                        </NavLink>

                        <NavLink style={({isActive}) => isActive ? activeStyle : undefined} to='/dashsboard' className={styles.navLinkStyle}>
                            <Logout className={styles.iconWrapper}/> <span>Logout</span>
                        </NavLink>
                       

                        
                    
                    </>
                    
                

                
                
                <div
                //  onClick={logout}
                 className={styles.footerLinkStyle}>
                    {/* <Logout  className={styles.iconWrapper} /> <span>Logout</span> */}
                </div>
            </div> 
        </nav>
    )
};

export default Sidebar



