import { Drawer } from '@mui/material';
<<<<<<< HEAD
//import {Drawer} from '@mui'
import { useState } from 'react';
import NavHeader from '../../components/mydashboard/navHeader/navHeader';
import styles from './dashboard.module.scss';
import ModifiedSidebar from '../../components/mydashboard/sidebar';
//import ModifiedSidebar from '../../components/mydashboard/';//
import Header from '../../components/mydashboard/header/header';
=======
import { useState } from 'react';
import NavHeader from '../../components/dashBoard/navHeader/navHeader';
import styles from './dashboard.module.scss';
import ModifiedSidebar from '../../components/dashBoard/sidebar';
import Header from '../../components/dashBoard/header/header';
>>>>>>> 03ec77d06edc1f9ae7b49274c200f29970d422ec


const drawerWidth = 259
interface ComponentProps {
<<<<<<< HEAD
	children: React.ReactNode;
}
interface Props {
	window?: () => Window;
=======
    children: React.ReactNode;
}
interface Props {
    window?: () => Window;
>>>>>>> 03ec77d06edc1f9ae7b49274c200f29970d422ec
	heading?: string;
	paragraph?: string;
}

<<<<<<< HEAD
const Main: React.FC<ComponentProps & Props> = ({ children, heading, paragraph, window, }) => {
	const [mobileOpen, setMobileOpen] = useState(false);
	const handleSidebarToggle = () => {
		setMobileOpen(!mobileOpen);
	}

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<div className={styles.container}>

			{/* <NavHeader handleSidebarToggle={handleSidebarToggle}/> */}
			<div className={styles.navHeader}>
				<NavHeader handleSidebarToggle={handleSidebarToggle} />
			</div>
			<div className={styles.header}>
				<Header heading={heading} paragraph={paragraph} />
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
					'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }

				}}
			>
				<ModifiedSidebar />
			</Drawer>
			<Drawer
				container={container}
				variant="permanent"
				sx={{
					display: { xs: 'none', md: 'block' },
					'& .MuiDrawer-paper': {
						boxSizing: 'border-box', width: drawerWidth, backgroundColor: "#E1DDFC", marginInlineStart: "2rem",
						borderRadius: "0.5rem", marginBlock: "0.125rem", height: "100vh",
					}
				}}
				open
			>
				<ModifiedSidebar />
			</Drawer>

			<div className={styles.main}>{children}</div>
		</div>
	);
}

export default Main;
=======
const Main: React.FC<ComponentProps & Props> = ({children,heading, paragraph, window,}) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleSidebarToggle = () => {
        setMobileOpen(!mobileOpen);
    }
    
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div  className={styles.container}>

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
					borderRadius: "0.5rem", marginBlock: "0.125rem", height: "100vh",
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
>>>>>>> 03ec77d06edc1f9ae7b49274c200f29970d422ec
