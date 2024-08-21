import React from 'react'
import BasicTextFields from '../component/testfield'
import { useFormik } from 'formik'
import * as yup from 'yup' 
import { useDispatch } from 'react-redux'
import { login } from '../redux/slide/userSlice';



function Login() {


  

  const dispatch = useDispatch();
  const validationschema = yup.object({
  username : yup.string().required("Please input username"),
   password : yup.string().required("please input password").min(8,"minimum is 8 characters")
    
  })



  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationschema,
    onSubmit: (values) => {
      // console.log("Form values:", values);
      dispatch(login(values))
    },
  });




  return (
    <div>
       <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xs mx-auto">
      <h1 className="text-center text-red-600 font-bold text-xl mb-4">Đăng nhập</h1>
      <form onSubmit={formik.handleSubmit}>
      <div>
  <BasicTextFields
    label="username"
    name="username"
    value={formik.values.username}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    required={true}
    helperText={formik.touched.username && formik.errors.username }
    error= {Boolean(formik.touched.username) && formik.errors.username }
  />

</div>
<div>
  <BasicTextFields
    label="password"
    name="password"
    value={formik.values.password}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    type="password"
    required={true}
    helperText={formik.touched.password && formik.errors.password }
    error= {Boolean(formik.touched.password) && formik.errors.password }
  />

</div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Đăng nhập
          </button>
        </div>
      </form>
      <p className="text-center mt-4 text-gray-600 text-sm">
        Bạn chưa có tài khoản?{' '}
        <a href="./register" className="text-red-500 hover:text-red-700 font-bold">
          Đăng ký
        </a>
      </p>
    </div>
    </div>
  )
}

export default Login
