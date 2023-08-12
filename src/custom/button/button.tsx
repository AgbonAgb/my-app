import styles from './button.module.scss';
import classNames from 'classnames';


interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
}

const button = (props: Props) => {
    const { text, className } = props;
    return (

        <button className={classNames(styles.button, className)}>{text}</button>
    )
}
export default button;