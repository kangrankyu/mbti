import React from 'react'
import TestResultitem from './TestResultitem';
import { getTestResults } from '../api/testResults';
const TestResultlist = ({ result, setresult }) => {
    console.log("리절트", result)
    return (
        <div className="test-result-list">
            {result.map((item) => (
                <TestResultitem key={item.id} result={item} setresult={setresult} />
            ))}
        </div>
    );
}

export default TestResultlist;