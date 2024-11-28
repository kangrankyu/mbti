import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import useAuthStore from '../api/auth';
import Layout from '../component/Layout';
import BeforeLayout from '../component/BeforeLayout';

const Home = () => {
  const { isAuthenticated } = useAuthStore();
  const navigate = useNavigate();
  console.log("Zustand에서 가져온 상태:", isAuthenticated);
   
  return (

<>
 {isAuthenticated?(
    <>
    <Layout/>
    <h1>무료 성격 테스트</h1>
    <p>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.</p>
  
  </>
 

   
     ) : (
      <>
      <BeforeLayout/>
      <h1>무료 성격 테스트</h1>
      <p>자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.</p>
 
   
    </>
    
    )}
     </>

  )}
  

export default Home;