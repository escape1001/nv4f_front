"use client"
import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.header`
  background-color: var(--color-point);

  nav{
    height: 7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:var(--color-white);

    ul{
      display: flex;
      gap:1rem;
    }
  }
`;

export default function Header() {
  return (
    <Wrapper>
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
    </Wrapper>
  );
}
