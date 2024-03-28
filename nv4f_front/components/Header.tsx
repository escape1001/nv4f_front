import Link from "next/link";


export default function Header() {
  return (
    <header className="bg-color-point text-color-light">
      <nav className="center-content flex justify-between items-center py-4">
        <h1 className="text-bigger font-semibold">
          <Link href="/">메인 페이지</Link>
        </h1>
        <ul className="flex gap-4">
          <li>
            <Link href="/accounts/login/">로그인</Link>
          </li>
          <li>
            <Link href="/accounts/signup/">회원가입</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
