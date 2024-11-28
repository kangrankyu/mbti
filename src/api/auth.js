import { create } from "zustand";

const useAuthStore = create((set)=>({
    isAuthenticated: !!localStorage.getItem("accessToken"), 
    token: localStorage.getItem("accessToken") || null,  
 
    user: {
        nickname: localStorage.getItem("nickname") || null,
        userId: localStorage.getItem("userId") || null,
      },

login : (token)=> { 
    localStorage.setItem("accessToken", token)
   
    set({ isAuthenticated: true, token });
},

logout(){
    localStorage.removeItem("accessToken"); 
   
    set({ isAuthenticated: false, token: null ,});
    
  },

  setuser: (user) => {
    localStorage.setItem("nickname", user.nickname);
    localStorage.setItem("userId", user.userId);
    set({
      user,
    });
  },


}))


export default useAuthStore;