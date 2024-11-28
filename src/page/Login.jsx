import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuthStore from '../api/auth';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
const Login = () => {
  const [id, setid] = useState("");
  const [password, setpassword] = useState("");
  const { login } = useAuthStore();
  const { setuser } = useAuthStore();
   const navigate = useNavigate();



  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.post(
        "https://moneyfulpublicpolicy.co.kr/login",
        {
          id,
          password,
        }
      );
      console.log("Full response:", response);

      const data = response.data;
     
      console.log(data)
      if (data.success) {
   
        login(data.accessToken);
        setuser({nickname: data.nickname,userId:data.userId})
        navigate("/");
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed");
    }
  }

  return (
    <>

      <h1>로그인</h1>
      <form action="" onSubmit={handleSubmit}>
        <input type="text"
          value={id}
          onChange={(e) => { setid(e.target.value) }}
          placeholder='id' />
        <input
          type="password"
          value={password}
          onChange={(e) => { setpassword(e.target.value) }}
          placeholder='password' />
        <button type='submit'>로그인</button>
      </form>
      <p>
        계정이 없으신가요?{" "}
        <Link to="/signup">
          회원가입
        </Link>
      </p>

    </>
  )
}

export default Login