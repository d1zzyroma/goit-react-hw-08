import { Field, Form, Formik } from "formik";
import css from "./Register.module.css"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/authOps";
const Register = () => {
    const dispatch = useDispatch();
    const intialValues= {
        name: "",
        email: "",
        password:"",
    };

    const handleSubmit = (values, options) => {
        dispatch(registerThunk(values))
        options.resetForm();
    }
    return(
        <>  
        <h2 className={css.title}>Please Register</h2>
            <Formik initialValues={intialValues} onSubmit={handleSubmit}>
                
                <Form className={css.form}>
                    <Field name="name" placeholder="enter your name" className={css.input}/>
                    <Field name="email" placeholder="enter your email" className={css.input}/>
                    <Field name="password" placeholder="enter your password" type="password" className={css.input}/>
                    <button type="submit">Register</button>


                    <p className={css.text}>You already have account? <Link to='/login'>Sign in</Link></p>
                </Form>
            </Formik>
        </>
    )
}

export default Register;