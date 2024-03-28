"use client";

import { useRouter } from "next/navigation";


export default function Login() {
  const router = useRouter();
  const login = async (e: { preventDefault: () => void; target: any; }) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const url = process.env.NEXT_PUBLIC_API_URL + "accounts/login/";
    const response = await fetch(url, {
      method: "POST",
      body: data,
    });
    

    // result 결과가 200이면 로그인 성공
    if (response.status === 200) {
      const result = await response.json();
      console.log(result);

      localStorage.setItem('access', result.access_token);
      localStorage.setItem('refresh', result.refresh_token);

      // /accounts/mypage/로 router.push
      router.push("/accounts/mypage/");
    } else {
      alert("로그인 실패");
      console.error(response);
    }
  }

  return (
    <main>
      <section>
        <h2>로그인 페이지</h2>
        <form onSubmit={login} className="flex flex-col center-content">
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
