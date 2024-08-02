import React from 'react'
import Header from './component/header'
import { Outlet } from 'react-router-dom'


function BT5() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

export default BT5
