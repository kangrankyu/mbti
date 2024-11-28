import React, { useState } from 'react'
import { getTestResults } from '../api/testResults'
import { useEffect } from 'react';
import TestResultlist from '../component/TestResultlist';

const TestResultPage = () => {
  const [result, setresult] = useState([]);

  console.log("리절트 결과값", result)
  useEffect(() => {
    const fatchdata = async () => {
      try {
        const respons = await getTestResults();
        setresult(respons);
        console.log(respons)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fatchdata();


  }, []);



  return (<>
    <TestResultlist result={result} setresult={setresult} />
  </>

  )
}

export default TestResultPage