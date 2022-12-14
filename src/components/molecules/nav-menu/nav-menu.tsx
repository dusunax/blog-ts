import Link from "next/link";

const NavMenu = () => {
  return (
    <ul className="flex items-center gap-2">
      <li>
        <Link href="/">메인</Link>
      </li>
      <li>
        <Link href="/blog">블로그</Link>
      </li>
      <li>
        <Link href="/profile">프로필</Link>
      </li>
    </ul>
  );
};

export default NavMenu;
