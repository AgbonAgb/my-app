import { main } from '@popperjs/core';
import styles from './header.module.scss'
interface ComponentProps {
    heading?: string;
    paragraph?: string;
    sideHeading?:string;
}
const Header : React.FC<ComponentProps> = ({ heading, paragraph,sideHeading }) => {
    return (
        <>
            {
                // heading && 
                    <div className={styles.headerWrapper}>
                    <div className={styles.headerStyle}>
                        <h3>
                            {heading}
                        </h3>
                    </div>
                    <div className={styles.sideHeaderStyle}>
                        <h3>
                            {sideHeading}
                        </h3>
                    </div>
                    <div className={styles.pStyle}>
                            <p>
                                {paragraph}
                            </p>
                    </div>
                </div>
                
            }
            
        </>
        

    )
}

export default Header;