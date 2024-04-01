"use client";

import { AuthContext } from "@/context/authContext";
import Link from "next/link";
import { useContext } from "react";


export default function Header() {
  const {user, logout} = useContext(AuthContext);
  
  return (
    <header className="bg-color-point text-color-light">
      <nav className="center-content flex justify-between items-center py-4">
        <h1 className="text-bigger font-semibold">
          <Link href="/">메인 페이지</Link>
        </h1>
        <ul className="flex gap-4">
          <li>
            context : {user?.user.username}
          </li>
          <li>
            <Link href="/accounts/login/">로그인</Link>
          </li>
          <li>
            <Link href="/accounts/signup/">회원가입</Link>
          </li>
          <li>
            <button onClick={logout}>로그아웃</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
