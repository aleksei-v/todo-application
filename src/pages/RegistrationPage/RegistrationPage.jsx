import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { ErrorText } from './RegistrationPage.styled';
import * as yup from 'yup';
import { useAuth } from 'hooks/useAuth';
import AuthLoader from 'components/Loaders/AuthLoader';
import { Box } from 'theme/Box';


const FormError = ({ name }) => (
    <ErrorMessage
        name={name}
        render={messaege => <ErrorText>{messaege}</ErrorText>}
    />);

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(16).required()
})

const initialValues = {
    name: '',
    email: '',
    password: '',
};
    
const RegistationPage = () => {
    const { isLoading, isError } = useAuth();
    const dispatch = useDispatch()
    const handleSubmit = ({name, email,password}, {resetForm}) => {
        dispatch(register({name, email, password}))
        resetForm()
    }
    return (
        <Box p={5}>
            <h2>Registation Form</h2>
            <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
                <Form>
                     <label>
                        Your name
                        <Field type="text" name="name" />
                        {<FormError name='name' />}
                    </label>
                    <label>
                        Your login
                        <Field type="email" name="email" />
                        {<FormError name='email' />}
                    </label>

                    <label>
                        Your password
                        <Field type="password" name="password" />
                        {<FormError name='password' />}
                    </label>
                    <button type="submit">Sign up</button>
                </Form>
            </Formik>
            {!isError && isLoading && <AuthLoader />}
        </Box>
    )
};

export default RegistationPage