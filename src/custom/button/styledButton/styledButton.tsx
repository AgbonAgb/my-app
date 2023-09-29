import { styled } from "@mui/material";
import { FC } from 'react';
type Text = 'center' | 'left' | 'right';

interface ComponentProps {
	text?: string | JSX.Element;
	marginBottom?: string;
	icon?: React.ReactChild;
	type?: string;
	maxWidth?: string;
	minWidth?: string;
	textAlign?: Text;
	className?: string;
	bg?: string;
	color?: string;
	disabled?: boolean;
	onClick?: () => void;
}

interface ButtonProps {
	marginBottom?: string;
	maxWidth?: string;
	minWidth?: string;
	textAlign?: Text;
	className?: string;
	bg?: string;
	color?: string;
	disabled?: boolean;
}

const AdvancedButton: FC<ComponentProps> = ({
	text,
	icon,
	marginBottom,
	maxWidth,
	textAlign,
	className,
	bg,
	color,
	disabled,
	onClick,
}) => {
	return (
		<StyledButton
			maxWidth={maxWidth}
			textAlign={textAlign}
			marginBottom={marginBottom}
			bg={bg}
			color={color}
			className={`${className}`}
			disabled={disabled}
			onClick={onClick}
		>
			{icon}
			{text}
		</StyledButton>
	);
};

export default AdvancedButton;

const StyledButton = styled("button")<ButtonProps>`
	position: relative;
	background: ${props => (props.bg ? props.bg : 'var(--color-primary-bg)')};
	color: ${props => (props.color ? props.color : 'var(--color-quatery)')};
	border-radius: var(--font-s-2);
	padding-inline: var(--font-s-25);
	padding-block: var(--font-s-12);
	font-family: Avenir Next;
	font-style: normal;
	font-weight: 600;
	font-size: var(--font-s-14);
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: ${props => (props.minWidth ? props.minWidth : '0rem')};
	max-width: ${props => (props.maxWidth ? props.maxWidth : '17.6rem')};
	width: 100%;
	margin-bottom: ${props => props.marginBottom || '0rem'};
	cursor: pointer;
	border: 0;
	text-align: ${props => (props.textAlign ? props.textAlign : 'left')};
	white-space: nowrap;
	transition: opacity 0.3s ease;

	@media (max-width: 587px) {
		margin-inline: auto;
		max-width: 80% !important;
	}

	&:focus {
		outline: none;
	}

	& svg {
		margin-right: 0.93rem;
		min-width: 18px;
		min-height: 18px;
	}
	&:disabled {
		opacity: 0.8;
		cursor: not-allowed;
	}
`;
