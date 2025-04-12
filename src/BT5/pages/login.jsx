import React from 'react';
import BasicTextFields from '../component/testfield';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../redux/action/userAction'; // Updated import
import { useNavigate } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validationschema = yup.object({
    email: yup.string().required('Please input email'),
    password: yup
      .string()
      .required('Please input password')
      .min(6, 'Minimum is 6 characters'),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationschema,
    onSubmit: async (values) => {
      try {
        const resultAction = await dispatch(login(values));
        if (login.fulfilled.match(resultAction)) {
          localStorage.setItem('user', JSON.stringify(resultAction.payload)); // Lưu vào localStorage sau khi đăng nhập thành công
           navigate('/')
        }
      } catch (error) {
        console.error('Login failed:', error);
      }
    },
  });

  return (
    <div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xs mx-auto">
        <h1 className="text-center text-red-600 font-bold text-xl mb-4">Đăng nhập</h1>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <BasicTextFields
              label="Email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required={true}
              helperText={formik.touched.email && formik.errors.email}
              error={Boolean(formik.touched.email) && formik.errors.email}
            />
          </div>
          <div>
            <BasicTextFields
              label="Password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="password"
              required={true}
              helperText={formik.touched.password && formik.errors.password}
              error={Boolean(formik.touched.password) && formik.errors.password}
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
  );
}

export default Login;
