import { Field, Form, Formik } from "formik";
import css from "./Register.module.css"
import { Link, Navigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerThunk } from "../../redux/auth/operations.js";
import { selectIsLoggeIn } from "../../redux/auth/selectors";
import { Button } from "@mui/material";
const Register = () => {
    const dispatch = useDispatch();
    const isLoggeIn = useSelector(selectIsLoggeIn);
    const intialValues= {
        name: "",
        email: "",
        password:"",
    };

    const handleSubmit = (values, options) => {
        dispatch(registerThunk(values))
        options.resetForm();
        <Navigate to="/"/>
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
        <h2 className={css.title}>Please Register</h2>

            <Formik initialValues={intialValues} onSubmit={handleSubmit}>
                
                <Form className={css.form}>
                    <Field name="name" placeholder="enter your name" className={css.input}/>
                    <Field name="email" placeholder="enter your email" className={css.input}/>
                    <Field name="password" placeholder="enter your password" type="password" className={css.input}/>
                    <button type="submit" >Register</button>

                    <p className={css.text}>You already have account? <Link to='/login'>Sign in</Link></p>
                </Form>
            </Formik>
        </>
    )
}

export default Register;