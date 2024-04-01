"use client";

import { AuthContext } from "@/context/authContext";
import { useContext } from "react";


export default function Login() {
  const {login} = useContext(AuthContext);
  
  const loginSubmit = async (e: { preventDefault: () => void; target: any; }) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    
    // 유효성 검사 하고 login(data);
    login(data);
  }

  return (
    <main>
      <section>
        <h2>로그인 페이지</h2>
        <form onSubmit={loginSubmit} className="flex flex-col center-content">
            <label>
                아이디
                <input className="border-color-light-grey border-[1px]" name="username" />
            </label>
            <label>
                비밀번호
                <input name="password" type="password" />
            </label>
            <button>로그인</button>
        </form>
      </section>
    </main>
  );
}
