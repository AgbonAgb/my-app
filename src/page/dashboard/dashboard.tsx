import { Drawer } from '@mui/material';
import { useState } from 'react';
import NavHeader from '../../components/dashBoard/navHeader/navHeader';
import styles from './dashboard.module.scss';
import ModifiedSidebar from '../../components/dashBoard/sidebar';
import Header from '../../components/dashBoard/header/header';


const drawerWidth = 259
interface ComponentProps {
    children: React.ReactNode;
}
interface Props {
    window?: () => Window;
	heading?: string;
	paragraph?: string;
}

const Main: React.FC<ComponentProps & Props> = ({children,heading, paragraph, window,}) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleSidebarToggle = () => {
        setMobileOpen(!mobileOpen);
    }
    
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div  className={styles.container}>

            {/* <NavHeader handleSidebarToggle={handleSidebarToggle}/> */}
			<div className={styles.navHeader}>
                <NavHeader handleSidebarToggle={handleSidebarToggle} />
            </div>
			<div className={styles.header}>
                <Header heading={heading} paragraph={paragraph}/>
            </div>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleSidebarToggle}
                ModalProps={{
                    keepMounted: true
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
					'& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth}
					
                }}
            >
                <ModifiedSidebar/>
            </Drawer>
            <Drawer
                container={container}
                variant="permanent"
                sx={{
                    display: { xs: 'none', md: 'block' },
					'& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth, backgroundColor: "#E1DDFC", marginInlineStart: "2rem",
					borderRadius: "0.5rem", marginBlock: "0.125rem", height: "90vh",
				}
                }}
                open
            >
                <ModifiedSidebar/>
            </Drawer>
            
            <div className={styles.main}>{children}</div>
        </div>
    );
}

export default Main;
