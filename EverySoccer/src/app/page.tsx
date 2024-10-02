"use client";

import { useRouter } from "next/navigation";

import { Carousel } from "@/components/molecules";
import { Matching } from "@/components/cards";

import { MAIN_CAROUSEL_LIST } from "@/constants/lists";
import kakao from "@_assets/img/logo_kakao.png";
import naver from "@_assets/img/logo_naver.png";
import "./home.css";

const SignIn = () => {
  const router = useRouter();

  const onClickSigninBtn = () => {
    router.push("/");
  };

  return (
    <main className="container">
      <Carousel images={MAIN_CAROUSEL_LIST} />
      <section className="w-full">
        <h3 className="text-xl font-bold">경기 리스트</h3>
        <div></div>
      </section>

      {/* <Image src={Soccer} alt="" className="w-screen" />
      <article className="relative flex flex-row-reverse p-4 w-[900px] h-fit">
        <div className="absolute inset-0 flex items-center justify p-4 h-full bg-gradient-to-r from-[#2b2b2b] from-50% to-transparent z-10 text-6xl font-bold leading-relaxed whitespace-pre-wrap">
          <span>{`전국 랭킹부터\n개인 분석 차트까지\n에브리사커`}</span>
          <div className="w-[200px]">
            <Cta title="KICK OFF" type="main" onClickCta={onClickSigninBtn} />
          </div>
        </div>
        <Image src={Soccer} alt="" className="rounded-2xl grayscale-[80%]" />
      </article>
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
      </div> */}
    </main>
  );
};

export default SignIn;

const SIGNIN_LIST = [
  { id: 1, title: "naver", src: naver, text: "네이버로 로그인하기" },
  { id: 2, title: "kakao", src: kakao, text: "카카오로 로그인하기" },
];
