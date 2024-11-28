import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Signup = () => {
const [ id, setId] = useState( ""); 
const [password, setPassword] = useState(""); 
const [nickname, setNickname ] = useState(""); 
const navigate = useNavigate();


const handleSubmit = async (e)=>{
  e.preventDefault();
try {
  console.log(e)
  const response = await axios.post(
     "https://moneyfulpublicpolicy.co.kr/register" , {id,password,nickname});
     console.log("Full response:", response);
     console.log("Response data:", response.data); 
     const data = response.data ;
     if(data.success){
      navigate("/login")
     }else{
      alert("signup failed");
     }

} catch (error) {
  console.error("Signup error:", error);
  alert("Signup failed");
}
}

return (
    <>
    <div>signup</div>
    <form onSubmit={handleSubmit} action="">
      <input 
      type="text" 
      value={id}
      onChange={(e)=>{setId(e.target.value)}}
      placeholder='ID'
      />
      <input 
      type="password" 
      value={password}
      onChange={(e)=>{setPassword(e.target.value)}}
      placeholder='password'/>
      <input  
      type="text" 
      value={nickname}
      onChange={(e)=>{setNickname(e.target.value)}}
      placeholder='nickname'/>
      <button type='submit'>회원가입</button>
    </form>
    </>
  )
}

export default Signup