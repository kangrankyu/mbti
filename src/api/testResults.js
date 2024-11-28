import axios from "axios";
import { questions } from "../data/question";
const API_URL = "http://localhost:5000/testResults";

export const getTestResults = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("error:", error); // 응답 데이터만 확인
  }
};

export const createTestResult = async (data) => {
  try {
    const response = await axios.post(API_URL, data);

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error creating test result:", error);
    throw error; // 에러 전달
  }
};

export const deleteTestResult = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

export const updateTestResultVisibility = async (id, visibility) => {
  const response = await axios.put(`${API_URL}/${id}`, { visibility });
  if (!response.data) {
    throw new Error("서버 응답이 없습니다.");
  }

  return response.data;
};
