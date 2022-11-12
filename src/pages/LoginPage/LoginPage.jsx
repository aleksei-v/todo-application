import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { ErrorText } from './LoginPage.styled';



const FormError = ({ name }) => {
    return (
        <ErrorMessage
            name={name}
            render={messaege => <ErrorText>{messaege}</ErrorText>}
        />
    )
}


const schema = yup.object().shape({
    login: yup.string().email().required(),
    password: yup.string().min(6).max(16).required()
})

const initialValues = {
    login: '',
    password: '',
};
    
const LoginPage = () => {

    const handleSubmit = (values, action) => {

        console.log('values', values)
        console.log(action)
        action.resetForm()
    }
    return (
        <>
            <h2>LoginForm</h2>
            <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
                <Form>
                    <label>
                        Your login
                        <Field type="email" name="login" />
                        <FormError name='login' />
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