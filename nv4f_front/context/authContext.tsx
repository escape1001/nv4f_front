// context API로 로그인 상태 관리하기
"use client";
import { createContext, useState } from "react";
import { useRouter } from "next/navigation";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const router = useRouter();
    const [user, setUser] = useState(null);

    const login = async (data) => {
        const url = process.env.NEXT_PUBLIC_API_URL + "accounts/login/";
        const response = await fetch(url, {
            method: "POST",
            body: data,
        });
    
        // result 결과가 200이면 로그인 성공
        if (response.status === 200) {
        const result = await response.json();
        // console.log(result);

        localStorage.setItem('access', result.access_token);
        localStorage.setItem('refresh', result.refresh_token);

        setUser(result);

        // /accounts/mypage/로 router.push
        router.push("/accounts/mypage/");
        } else {
        alert("로그인 실패");
        console.error(response);
        }
    };

    const logout = async () => {
        const url = process.env.NEXT_PUBLIC_API_URL + "accounts/logout/";
        const response = await fetch(url, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access')}`,
            },
        });

        if (response.status === 200) {
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            router.push("/");
        } else {
            alert("로그아웃 실패");
            console.error(response);
        }
    };

  return (
    <AuthContext.Provider value={{
        user,
        setUser,
        login,
        logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;