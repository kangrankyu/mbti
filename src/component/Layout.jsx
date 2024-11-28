import React from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import useAuthStore from '../api/auth';

const Layout = () => {

  const logout =  useAuthStore((state) => state.logout);
  const  handleLogout  =  ()=>{ 
    logout();

    console.log('로그아웃 요청이 실행되었습니다.');
  };
  return (<>
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/testpage">테스트</Link>
        <Link to="/testresultpage">결과</Link>
        <Link to="/login" onClick={handleLogout}>로그아웃</Link>
        <Link to="/profile">프로필</Link>
      </nav>
    </header>
    <Outlet />

  </>
  )
}

export default Layout