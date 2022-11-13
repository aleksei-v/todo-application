import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/operations';
import * as yup from 'yup';
import { ErrorText } from './LoginPage.styled';

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

    const dispatch = useDispatch()
    const handleSubmit = ({email,password}, {resetForm}) => {
        dispatch(login({email, password}))
        resetForm()
    }
    return (
        <>
            <h2>LoginForm</h2>
            <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
                <Form>
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
                </Form>
            </Formik>
        </>
    )
};

export default LoginPage