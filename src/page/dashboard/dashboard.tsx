import { Drawer } from '@mui/material';
import { useState } from 'react';
// import NavHeader from '../../components/dashBoard/navbar/navbar';
import styles from './dashboard.module.scss';
import ModifiedSidebar from '../../components/dashBoard/sidebar';

interface ComponentProps {
    children: React.ReactNode;
}
interface Props {
    window?: () => Window;
}

const Main: React.FC<ComponentProps & Props> = ({children, window}) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleSidebarToggle = () => {
        setMobileOpen(!mobileOpen);
    }
    
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div>

            {/* <NavHeader handleSidebarToggle={handleSidebarToggle}/> */}
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleSidebarToggle}
                ModalProps={{
                    keepMounted: true
                }}
                sx={{
                    display: { xs: 'block', md: 'none' }
					
                }}
            >
                <ModifiedSidebar/>
            </Drawer>
            <Drawer
                container={container}
                variant="permanent"
                sx={{
                    display: { xs: 'none', md: 'block' }
                }}
                open
            >
                <ModifiedSidebar/>
            </Drawer>
            
            <div className={styles.content}>{children}</div>
        </div>
    );
}

export default Main;
