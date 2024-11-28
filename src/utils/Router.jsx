import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './ProtectedRoute'
import Login from '../page/Login'
import Signup from '../page/Signup'
import Profile from '../page/Profile'
import TestPage from '../page/Testpage'
import TestResultPage from '../page/TestResultPage'
import Home from "../page/Home"
import Layout from '../component/Layout'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Home />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />} >
            <Route path="/profile" element={<Profile />} />
            <Route path="/testpage" element={<TestPage />} />
            <Route path="/testresultpage" element={<TestResultPage />} />
          </Route>

        </Route>





      </Routes>
    </BrowserRouter>
  )
}

export default Router