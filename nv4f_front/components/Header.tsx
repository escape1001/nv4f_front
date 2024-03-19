import Link from "next/link";


export default function Header() {
  return (
    <main>
      <nav className="center-content">
        <Link href="/">메인 페이지</Link>
        <ul>
          <li>
            <Link href="#">로그인</Link>
          </li>
          <li>
            <Link href="#">회원가입</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
