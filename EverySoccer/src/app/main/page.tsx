"use client";

import { useRouter } from "next/navigation";
import { Matching } from "@/components/cards";
import { Chip, Divide } from "@/components/atoms";

const MainPage = () => {
  const router = useRouter();

  const onClickMenu = (path: string) => {
    router.push(path);
  };

  return (
    <main className="grid grid-cols-2 gap-8 my-0 pt-[90px] mx-auto p-6 max-w-[1280px] h-screen">
      <section className="grid grid-rows-2 gap-4 h-full">
        <article className="p-4 border-white border-2 rounded-xl h-[500px] overflow-scroll scrollbar-hide">
          <div className="flex items-baseline justify-between">
            <h3 className="bg-black text-2xl font-bold">가장 빠른 오늘의 경기</h3>
            <div
              className="text-xs cursor-pointer"
              onClick={() => {
                onClickMenu("/match");
              }}
            >{`다른 경기 보러 가기 >`}</div>
          </div>
          <Divide />
          <Matching />

          <Chip status="win" />
          <Chip status="win" />
          <Chip status="draw" />
          <Chip status="draw" />
          <Chip status="lose" />
        </article>
        <div>
          <div>내 팀</div>
          <div>내 기록</div>
        </div>
      </section>
      <section>1</section>
    </main>
  );
};

export default MainPage;
