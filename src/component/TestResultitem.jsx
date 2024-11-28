import React from 'react';
import { deleteTestResult } from '../api/testResults';
import useAuthStore from '../api/auth';
import { updateTestResultVisibility } from '../api/testResults';
const TestResultitem = ({ result, setresult }) => {

    const { id, mbti, username, userid, descriptions, createdAt, visibility } = result;
    const isower = userid
    const login = useAuthStore((state) => state.user.userId);

    const handleDelete = async () => {
        try {
            await deleteTestResult(id);

            setresult((prevResults) =>
                prevResults.filter((result) => result.id !== id)
            );

            console.log("Test result deleted successfully");

        } catch (error) {
            console.error("Error deleting test result:", error);
            alert("삭제에 실패했습니다. 다시 시도해주세요.");
        }
    };


    const handleVisibility = async () => {
        const toggleVisibility = await updateTestResultVisibility(id, { ...result, visibility: !result.visibility, })
        if (toggleVisibility !== null) {
            setresult((prevResults) =>
                prevResults.map((result) => id === toggleVisibility.id ? updatedResult : result)
            );
            console.log(`Visibility updated to: ${toggleVisibility}`);
        } else { console.error("Visibility 업데이트 실패"); }
        console.log("toggleVisibility:", toggleVisibility);
    }


    return (
        <>

            <div >
                <div>
                    <h4>{username}</h4>
                    <p >{createdAt}</p>
                    <p >{mbti}</p>
                    <p> {descriptions}</p>

                    {isower == login && (
                        <><button onClick={handleDelete}>삭제하기</button>

                            <button onClick={handleVisibility}>
                                {visibility ? "비공개로 전환" : "공개로 전환"}
                            </button>
                        </>)


                    }

                    {

                    }

                </div>
            </div>

        </>
    )
};
export default TestResultitem;