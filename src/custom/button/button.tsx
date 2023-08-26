import styles from './button.module.scss';
import classNames from 'classnames';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
}

const Button = ({ text, className, ...props }: Props) => {
	return (
		<button className={classNames(styles.button, className)} {...props}>
			{text}
		</button>
	);
};
export default Button;
