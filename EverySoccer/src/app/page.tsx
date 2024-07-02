"use client";

import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";

const buttonStyle = `w-[110px] h-[140px] py-1 px-3 rounded-xl font-medium whitespace-pre-line defaultBorder transition-all`;

const Home = () => {
  const router = useRouter();

  const onClickSigninBtn = () => {
    router.replace("/main");
  };

  return (
    <main className="flexCenter h-screen">
      <div className="defaultBorder flexCenter flex-col gap-4 p-8 min-w-[280px] h-[400px]">
        <Logo />
        <h1 className="mt-2 mb-4 text-3xl font-bold">EVERY SOCCER</h1>
        <div className="flex gap-8">
          <button onClick={onClickSigninBtn} className={`${buttonStyle} text-green-500 hover:bg-green-500 hover:text-white hover:border-none`}>
            {"네이버로\n로그인하기"}
          </button>
          <button onClick={onClickSigninBtn} className={`${buttonStyle} text-yellow-300 hover:bg-yellow-300 hover:text-black hover:border-none`}>
            {"카톡으로\n로그인하기"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
