"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

import Logo from "@/components/Logo";

import Soccer from "@_assets/img/mainPage.jpg";
import kakao from "@_assets/img/logo_kakao.png";
import naver from "@_assets/img/logo_naver.png";

const SignIn = () => {
  const router = useRouter();

  const onClickSigninBtn = () => {
    router.push("/main");
  };

  return (
    <main className="relative">
      <div>
        <Image src={Soccer} alt="" className="w-screen h-screen" />
      </div>
      <div className="flexCenter flex-col absolute top-0 left-0 w-screen h-screen bg-gray-900/90">
        <div className="flex justify-between items-center flex-col gap-2 px-4 py-8 defaultBorder min-w-[280px] h-[360px]">
          <div className="flex items-center flex-col gap-4">
            <Logo size={48} />
            <h1 className="text-3xl font-bold whitespace-pre-line text-center">{"EVERY\nSOCCER"}</h1>
          </div>
          <div className="flex flex-col gap-4 w-full">
            {SIGNIN_LIST.map(({ id, title, src, text }) => {
              return (
                <button
                  key={id}
                  onClick={onClickSigninBtn}
                  className={`flex items-center justify-center gap-2 px-2 py-1 rounded-xl hover:shadow-[5px_5px_1px_0_rgba(0,0,0,0.3)] transition-all ${
                    title === "naver" ? "bg-naver" : "bg-kakao"
                  } `}
                >
                  <Image src={src} alt={title} className="w-10 h-10 rounded-full" />
                  <div className={`${title === "naver" ? "text-white" : "text-black"} font-bold`}>{text}</div>
                </button>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center mt-8">
          <span className="text-sm">땀에 젖은 유니폼, 그것이 내가 보여줄 수 있는 전부다</span>
          <span className="text-xs">- Paul Scholes -</span>
        </div>
      </div>
    </main>
  );
};

export default SignIn;

const SIGNIN_LIST = [
  { id: 1, title: "naver", src: naver, text: "네이버로 로그인하기" },
  { id: 2, title: "kakao", src: kakao, text: "카카오로 로그인하기" },
];
