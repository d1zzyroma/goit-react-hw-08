import { Field, Form, Formik } from "formik";
import css from "./Login.module.css"
import { Link, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../../redux/auth/authOps";
import { selectIsLoggeIn } from "../../redux/auth/selectors";
import { Button } from "@mui/material";
const Login = () => {
    const isLoggeIn = useSelector(selectIsLoggeIn);
    const dispatch = useDispatch();
    const intialValues= {
        email: "",
        password:"",
    };

    const handleSubmit = (values, options) => {
        dispatch(loginThunk(values))
        options.resetForm();
    }
    if(isLoggeIn){
        return <Navigate to="/contacts" />;
    }
    return(
        <>
        <Link to='/'>
            <Button variant="contained" color="primary" >
                Home
            </Button>
        </Link>
        
        <h2 className={css.title}>Please Log In</h2>
            <Formik initialValues={intialValues} onSubmit={handleSubmit}>
                
                <Form className={css.form}>
                    <Field name="email" placeholder="enter your email" className={css.input}/>
                    <Field name="password" placeholder="enter your password" type="password" className={css.input}/>
                    <button type="submit">Log In</button>

                    <p className={css.text}>You dont have  account? <Link to='/register'>Sign up</Link></p>
                </Form>
            </Formik>
        </>
    )
}

export default Login;