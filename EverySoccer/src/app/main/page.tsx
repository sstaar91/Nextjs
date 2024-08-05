import { Matching } from "@/components/cards";

const MainPage = () => {
  return (
    <main className="grid grid-cols-2 gap-8 my-0 mx-auto p-6 max-w-[1280px]">
      <section>
        <article className="p-4 border-white border-2	rounded-xl">
          <h3 className="text-2xl font-bold">실시간 매칭 리스트</h3>
          <Matching />
        </article>
      </section>
      <section>실시간 매칭 리스트</section>
    </main>
  );
};

export default MainPage;
