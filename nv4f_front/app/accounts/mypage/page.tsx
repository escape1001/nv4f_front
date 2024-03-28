"use client";

import { useEffect, useState } from "react";

export default function Mypage() {
  // local storage에 저장된 access, refresh token 받아옴
  const [access, setAccess] = useState('');
  const [refresh, setRefresh] = useState('');
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setAccess(localStorage.getItem('access'));
      setRefresh(localStorage.getItem('refresh'));
    }
  }, []);

  return (
    <main>
      <section>
        <h2>마이페이지</h2>
        <p>access token: {access}</p>
        <p>refresh : {refresh}</p>
      </section>
    </main>
  );
}
