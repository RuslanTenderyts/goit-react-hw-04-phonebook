import styled from 'styled-components';
import {Form as FormikForm, ErrorMessage as FormikError} from 'formik'

export const FormContact = styled.form`
    width: 350px;
    padding: 10px;
    border: 1px solid black;
    
`;
export const Label = styled.label`
    display: block;
    margin: 0px 0px 20px 0px;
    
`;

export const Form = styled(FormikForm)`
    width: 350px;
    padding: 10px;
    border: 1px solid black;
`

export const ErrorMessage = styled(FormikError)`
    display: block;
    color: tomato;
`