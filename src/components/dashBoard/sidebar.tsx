import { NavLink } from "react-router-dom";
import { ReactComponent as Profile } from '../../../src/svgs/profile.svg';
import { ReactComponent as Dashboard } from '../../../src/svgs/dashboard.svg';
import styles from './sidebar.module.scss';
import { Divider } from "@mui/material";
// import { Divider } from "@mui/material";



const Sidebar = () => {
 
    

    let activeStyle = {
        backgroundColor: '#ADA7D0', 
        color: '#E1DDFC',
        fill :  "#E1DDFC",
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
                            <p className={styles.occupation}>djdj</p>
                        </div>
                    </span>
                   
                </span>
                <Divider className={styles.divide}/>

              
                
            
              
                
                    <>
                        <NavLink style={({isActive}) => isActive ? activeStyle : undefined} to='/dashboard' className={styles.navLinkStyle}>
                            <Dashboard className={styles.iconWrapper}/> <span>Dashboard</span>
                        </NavLink>
                       
                        <NavLink style={({isActive}) => isActive ? activeStyle : undefined} to='/examination-NYSC/profile' className={styles.navLinkStyle}>
                            <Dashboard className={styles.iconWrapper}/> <span>Dashboard</span>
                        </NavLink>
                        <NavLink style={({isActive}) => isActive ? activeStyle : undefined} to='/examination-NYSC/profile' className={styles.navLinkStyle}>
                            <Dashboard className={styles.iconWrapper}/> <span>Dashboard</span>
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



