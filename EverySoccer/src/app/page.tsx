"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { CatecoryCard } from "@/components/atoms";
import { Carousel, Modal } from "@/components/molecules";

import { MAIN_CAROUSEL_LIST, MAIN_CATEGORY_LIST } from "@/constants/lists";
import "./home.css";

const SignIn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const onClickCard = (type: string) => {
    if (type === "referee") {
      setIsOpen(true);
    } else {
      router.push("/match");
    }
  };

  const handleModal = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <main className="container">
      <Carousel images={MAIN_CAROUSEL_LIST} />
      <section className="w-full">
        <h3 className="mb-5 text-2xl font-semibold cursor-default">빠른 매칭</h3>
        <div className="w-full overflow-scroll scrollbar-hide">
          <div className="flex items-center gap-8 w-fit">
            {MAIN_CATEGORY_LIST.map((list) => {
              return <CatecoryCard key={list.id} {...list} onClickCard={onClickCard} />;
            })}
          </div>
        </div>
      </section>
      <Modal
        isOpen={isOpen}
        setIsOpen={handleModal}
        title={"현재 서비스 준비중입니다"}
        subTitle={"다른 서비스를 이용해주세요"}
        onCancle={handleModal}
      />
    </main>
  );
};

export default SignIn;
