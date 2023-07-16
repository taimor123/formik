import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';

const SignupForm2 =()=>{
    const formik = useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            email:'',
        },
        validationSchema: Yup.object({
            firstName:Yup.string()
            .max(15,'must be 15 characters or less')
            .required('Required'),
            lastName:Yup.string()
            .max(15,'must be 15 characters or less')
            .required('Required'),
            email:Yup.string()
            .email('invalid email')
            .required('Required'),
        }),
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    })
    return(
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="firstName"  >firstName</label>
            <input 
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}/>
            {formik.touched.firstName && formik.errors.firstName ? 
            (<div>{formik.errors.firstName}</div>) : null}

            <label htmlFor="lastName"  >lastName</label>
            <input 
            id="lastname"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}/>
            {formik.touched.lastName && formik.errors.lastName ? 
            (<div>
                {formik.errors.lastName}
            </div>) : null}

            <label htmlFor="email" >email</label>
            <input 
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}/>
            {formik.touched.email && formik.errors.email ? 
            (<div>
                {formik.errors.email}
            </div>) : null}
            <button type="submit">submit</button>
        </form>
    );
};
export default SignupForm2;
