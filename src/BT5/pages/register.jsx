import React from 'react'

function Register() {
  return (
    <div>
       <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xs mx-auto">
      <h1 className="text-center text-red-600 font-bold text-xl mb-4">Đăng Ký</h1>
      <form  className="register-form">
        <div className="mb-4">
          <label htmlFor="fullname" className="block text-gray-700 text-sm font-bold mb-2">
            Họ và Tên:
          </label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
            Tên đăng nhập:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Mật khẩu:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-bold mb-2">
            Xác nhận mật khẩu:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirm_password"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Đăng Ký
          </button>
        </div>
        <p className="text-center mt-4 text-gray-600 text-sm">
          Bạn đã có tài khoản?{' '}
          <a href="./login" className="text-red-500 hover:text-red-700 font-bold">
            Đăng nhập
          </a>
        </p>
      </form>
    </div>
    </div>
  )
}

export default Register
