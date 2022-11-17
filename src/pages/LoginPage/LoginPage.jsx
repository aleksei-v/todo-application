import { Formik, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { Box } from 'components/Box';
import { login } from 'redux/auth/operations';
import * as yup from 'yup';
import { ErrorText, StyledForm } from './LoginPage.styled';
import AuthLoader from "components/Loaders/AuthLoader";
import { useAuth } from 'hooks/useAuth';

const FormError = ({ name }) => (
    <ErrorMessage
        name={name}
        render={messaege => <ErrorText>{messaege}</ErrorText>}
    />);

const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(6).max(16).required()
})

const initialValues = {
    email: '',
    password: '',
};
    
const LoginPage = () => {

    const { isLoading, isError } = useAuth();
    const dispatch = useDispatch()
    const handleSubmit = ({ email, password }, { resetForm }) => {
        dispatch(login({ email, password }))
        resetForm()
    };

    return (
        <>
        <Box>
            <h2>LoginForm</h2>
            
            <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
                <StyledForm>
                    <label>
                        Your login
                        <Field type="email" name="email" />
                        <FormError name='email' />
                    </label>

                    <label>
                        Your password
                        <Field type="password" name="password" />
                        <FormError name='password' />
                    </label>
                    <button type="submit">Log in</button>
                </StyledForm>
                
            </Formik>
              {!isError && isLoading && <AuthLoader />}
        </Box>
         
            </>
    )
};

export default LoginPage