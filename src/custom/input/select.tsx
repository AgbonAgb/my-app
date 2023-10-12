import { useField, FieldHookConfig } from 'formik';
import {styled} from '@mui/material';


interface ComponentProps {
	width?: string;
	label?: string;
	options?: HTMLSelectElement;
	placeholder?: string;
	disabled?: boolean
	onChange?: (value: string) => void
	asterisk?: boolean;
}



const Select = (props: ComponentProps & FieldHookConfig<string>) => {
	const [field, meta] = useField(props);

	return (
		<Wrapper>
			<Label htmlFor={props.id || props.name}>{props.asterisk === false ? props.label : <span>{props.label}<sup className="star">*</sup></span>}</Label>

			<StyledSelect {...field} onChange={props.onChange} disabled = {props.disabled}>
				{!meta.value && <option value=''>{props.placeholder || props.label}</option>}
				{props.options}
			</StyledSelect>
		
		
			{
				
				meta.touched && meta.error ? (
					<ErrorMessage>
						<Span>&#42;</Span>
						{meta.error}
					</ErrorMessage>
				) : null
			}
		</Wrapper>
	);
};

export default Select;

const Wrapper = styled('div')<ComponentProps>`
	display: flex;
	flex-direction: column;
	max-width: ${({ width }) => (width ? width : '100%')};
	width: 100%;
	border-radius: 0.4rem;
	position: relative;

	&::after {
		  content: "";
		  position: absolute;
		  top: 75%;
		  right: 10px; /* Adjust the positioning as needed */
		  transform: translateY(-50%);
		  height: 0;
		  border-style: solid;
		  border-width: 5px 5px 0 5px;
		  border-color: #000 transparent transparent transparent;
		  pointer-events: none; /* Ensure the arrow doesn't interfere with the select input */
		}
		
`;

const Label = styled('label')`
	color:#333333;
	padding-bottom: 0.7rem;
	padding-top: 2.8rem;
	flex: 1 1 100%;
	font-style: normal;
	font-weight: normal;
	font-size: 1.6rem;
	letter-spacing: 00.2rem;
	text-transform: capitalize;


`;




const StyledSelect = styled('select')<any>`
	flex: 1 1 100%;
	padding: 1.4rem 2.4rem!important;
	font-size: 1.5rem;
	height: 3.6rem;
	box-shadow: 0 0.7rem 0.9rem -3rem rgba(70, 70, 70, 0.06);
	color: var(--color-black-default);
	transition: all 0.5s ease-out;
	transform-origin: top left;
	background: #F9F8FF;
	border: 0.1rem solid #E1DDFC;
	border-radius: 0.4rem;
	appearance: none;


	

	&:focus {
		outline: none;
    	border: 0.1rem solid var(--color-primary);
	}

	&:disabled {
		background-color: #dadada;
	  }
`;

const ErrorMessage = styled('menu')`
	color:red;
  font-size: 1.4rem;
  display: flex;
`

const Span = styled('span')`
	position: relative;
	top: 5px;
`;
