import React from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'

const BeforeLayout = () => {
  return (
    <> <header>
        <Link to="/login">로그인</Link>
        <Link to="/signup">회원가입</Link>
       </header> 
       <Outlet/>
       </>
  )
}

export default BeforeLayout