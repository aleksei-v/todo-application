import { Form } from 'formik';
import styled from 'styled-components';



export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 20px;
`


export const ErrorText = styled.p`
    color: red
`;