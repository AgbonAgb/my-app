import { ReactHTMLElement } from "react";
import classNames from 'classnames';
import styles from './input.module.scss'
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    //text:string    
}
const Input = (props: Props) => {
    // const{text}=props;
    const { className } = props;
    return (
        <input{...props} className={classNames(styles.input, className)} />
    )
}
export default Input;