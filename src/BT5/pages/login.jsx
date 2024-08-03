import React from 'react'

function Login() {
  return (
    <div>
       <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-xs mx-auto">
      <h1 className="text-center text-red-600 font-bold text-xl mb-4">Đăng nhập</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            User:
          </label>
          <input
            type="text"
            id="email"
            name="user"
            placeholder="Nhập tên đăng nhập"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Mật khẩu:
          </label>
          <input
            type="password"
            id="password"
            name="pass"
            placeholder="Nhập mật khẩu"
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
        <a href="Signup.js" className="text-red-500 hover:text-red-700 font-bold">
          Đăng ký
        </a>
      </p>
    </div>
    </div>
  )
}

export default Login
