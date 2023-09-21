import { useField, FieldHookConfig } from "formik";
import { styled } from "@mui/material";
import { FC, ReactElement } from "react";

interface ComponentProps {
  label?: string;
  type?: string;
  marginRight?: string;
  width?: string;
  defaultValue?: any;
  icon?: string;
  autoComplete?:string;
  asterisk?:boolean;
}

const FormInput: FC<ComponentProps & FieldHookConfig<string> & any> = (
  props
): ReactElement => {

  const [field, meta] = useField(props);
  return (

    <InputWrapper aria-label="form input container">
      {
        props.label &&
        <Label htmlFor={props.id || props.name}>{props.asterisk === false ? props.label : <span>{props.label}<sup className="star">*</sup></span>}</Label>
        
      }
      {props.type === "tel" ? (
        <StyledNumber
          {...props}
          {...field}
          type={props.type || "text"}
          allowNegative={
            (props.type === "tel" || props.type === "date") && false
          }
          allowLeadingZeros={
            (props.type === "tel" || props.type === "date") && true
          }
        />
      ) : (
        <StyledInput
          {...props}
          {...field}
          type={props.type}
          placeholder={props.placeholder}
        />
      )}
      {props.icon ? <StyledImg src={`${props.icon}`} /> : undefined}
      {
        /**validation error message */
        meta.touched && meta.error ? (
          <ErrorMessage>
            <Span>&#42;</Span>
            {meta.error}
          </ErrorMessage>
        ) : null
      }
    </InputWrapper>
  );
};

export default FormInput;

export const StyledInput = styled("input")<ComponentProps>`
  flex: 1 1 100%;
  padding: 1.4rem 2.4rem!important;
  font-size: 1.5rem;
  height: 3.6rem;
  box-shadow: 0 0.7rem 0.9rem -3rem rgba(70, 70, 70, 0.06);
  color: var(--color-black-default);
  transition: all 0.5s ease-out;
  transform-origin: top left;
  background: #FFFFFF;
  border: 0.1rem solid #FFFFFF;
  border-radius: 0.4rem;

  @media (min-width: 1024px){
    min-width: 60rem !important;
 }
  @media (max-width: 1024px){
    min-width: 50rem !important;
 }
  
  @media (max-width: 540px){
    min-width: 25rem !important;
 }

  

  &:focus {
    outline: none;
    border: 0.1rem solid var(--color-primary);
  }

  &:disabled {
    background-color: #dadada;
  }


// display: inline-block;
// // width: min(640px, 100%); //for responsive input
// //txt style
// border-radius: 0.8rem;
// border: 0.2rem solid var(--white, #FFFFFF);
// background: var(--white, #FFFFFF
// );
// //txt placeholder
// padding-block: 1.7rem;
// padding-inline: 1.6rem;
// color: var(color-text);

// display: flex;

// height: 6.4rem;
`;

export const StyledNumber = styled<any>("NumericFormat")`
  flex: 1 1 100%;
  padding: 1.4rem 2.4rem;
  font-size: 1.5rem;
  height: 3.6rem;
  width: 100%;
  background: #fdfdfd;
  border: 0.1rem solid #dadada;
  box-shadow: 0 0.7rem 0.9rem -3rem rgba(70, 70, 70, 0.06);
  color: var(--color-black-default);
  transition: all 0.5s ease-out;
  transform-origin: top left;

  &:focus {
    outline: none;
    border: 0.1rem solid var(--color-primary);
  }

  &:disabled {
    background-color: #dadada;
  }
`;

export const InputWrapper = styled("div")<ComponentProps>`
  display: flex;
  flex-direction: column;
  max-width: ${({ width }) => (width ? width : "100%")};
  width: 100%;
  border-radius: 0.4rem;
  position: relative;
`;

export const Label = styled("label")`
  color:#333333;
  padding-bottom: 0.7rem;
  padding-top: 2.8rem;
  flex: 1 1 100%;
  font-style: normal;
  font-weight: normal;
  font-size: 1.6rem;
  letter-spacing: 00.2rem;


`;

export const StyledImg = styled("img")`
  position: absolute;
  position: absolute;
  top: 4rem;
  left: 32rem;
`;

export const ErrorMessage = styled("menu")`
  color:red;
  font-size: 1.4rem;
  display: flex;
`;

export const Span = styled("span")`
  position: relative;
  top: 5px;

`;
