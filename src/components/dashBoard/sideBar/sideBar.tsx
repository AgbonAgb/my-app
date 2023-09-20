import { NavLink } from "react-router-dom";
import { ReactComponent as Profile } from '../../../../src/svgs/profile.svg';
import { ReactComponent as Dashboard } from '../../../../src/svgs/dashboard.svg';

import styles from './sideBar.module.scss';



const Sidebar = () => {
 
    

    let activeStyle = {
        backgroundColor: '#ADA7D0', 
        color: '#E1DDFC',
        fill :  "#E1DDFC"
    }

    

    return(
        <nav >  
             <div className={styles.wrapper}> 
                <span className={styles.logoWrapper2}>
                    <Profile className={styles.imageStyle} />
                    {/* <div className={styles.imageStyle} /> */}
                    <span>kskdkdk</span>
                   
                </span>
              
                
            
              
                
                    <>
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



