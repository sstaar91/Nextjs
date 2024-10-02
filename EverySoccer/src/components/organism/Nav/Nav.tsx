"use client";

import { useRouter } from "next/navigation";
import { NAV_LIST } from "@/constants/lists";

const Nav = () => {
  const router = useRouter();

  const onClickMenu = (path: string) => {
    router.push(path);
  };

  return (
    <header className="fixed top-0 left-0 rigth-0 flexCenter border-b-2 border-b-gray-400 w-screen bg-white z-10">
      <nav className="flex items-center justify-between py-4 px-6 max-w-[1280px] w-full">
        <div className="w-6 h-6 rounded-full bg-gradient-to-t from-[#ff8660] to-[#8000ff]" />
        <ul className="flex items-center gap-8 text-base font-bold cursor-pointer">
          {NAV_LIST.map((list) => {
            return (
              <li key={list.id} className="leading-none hover:text-green-400 transition-all" onClick={() => onClickMenu(list.path)}>
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
