

import styles from './index.module.scss'
//import images
import { ReactComponent as EcclipseLeft } from '../../assets/ecclipse-left.svg';
import { ReactComponent as EcclipseRight } from '../../assets/ecclipse-right.svg';
//we need props because this page will get input from component
interface Props {
    children: React.ReactNode;
    heading: string;
    subheading: string;
}

const onboardlayout = ({ children, heading, subheading }: Props) => {
    return <main className={styles.main}>
        <EcclipseLeft className={styles.ecclipseLeft} />
        <h1 className={styles.heading}>{heading}</h1>
        <p className={styles.subheading}>{subheading}</p>
        <div className={styles.layout}> {children}</div>       
        <EcclipseRight className={styles.ecclipseRight} />
    </main>
}

export default onboardlayout;