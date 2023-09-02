import { ReactHTMLElement } from "react";
import classNames from 'classnames';
import styles from './input.module.scss'
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    //text:string 
    label?: string
}
const Input = (props: Props) => {
    // const{text}=props;
    const { className } = props;
    return (
        <div className={styles.position}>
            <label>{props.label}</label>
            <input {...props} className={classNames(styles.input, className)} />
        </div>
    )
}
export default Input;