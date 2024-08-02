"use client";

import { usePathname, useRouter } from "next/navigation";
import Logo from "@/components/Logo";

const Nav = () => {
  const path = usePathname();
  const router = useRouter();

  if (path === "/") return null;

  const onClickMenu = (path: string) => {
    router.push(path);
  };

  return (
    <header className="flexCenter border-b-2 border-b-gray-400">
      <nav className="flex justify-between py-8 px-6 w-full max-w-[1280px] ">
        <Logo size={36} />
        <ul className="flex items-center gap-8 font-bold cursor-pointer">
          {NAV_LIST.map((list) => {
            return (
              <li key={list.id} className="leading-none pb-2 hover:text-green-400 transition-all" onClick={() => onClickMenu(list.path)}>
                {list.title}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;

const NAV_LIST = [
  { id: 1, path: "/main", title: "홈" },
  { id: 2, path: "/match", title: "실시간 매치" },
  { id: 3, path: "/myTeam", title: "내 팀" },
  { id: 4, path: "/user", title: "내 정보" },
];
