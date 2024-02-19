'use client'

import { useState } from 'react'
import Image from 'next/image'

import { MENU_LIST } from '@_constants/MENU_LIST'

import menu from '@_assets/icons/menu.svg'
import close from '@_assets/icons/close.svg'

const Lnb = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleNav = () => {
    setIsNavOpen((prev) => !prev)
  }

  return (
    <>
      <button
        className="absolute top-4 left-4 p-1 border-solid border-2 border-slate-500	 rounded-lg cursor-pointer"
        onClick={handleNav}
      >
        <Image src={menu} alt="" />
      </button>
      <div
        className={`${isNavOpen ? 'translate-x-0' : '-translate-x-[100vw]'} w-full h-screen bg-gray-100 transition-all`}
        onClick={handleNav}
      >
        <nav
          className={`${isNavOpen ? 'animate-show-left-slide' : 'animate-hidden-left-slide'}
        ${isNavOpen ? 'opacity-100' : 'opacity-0'} 
        ${isNavOpen ? 'translate-x-0' : '-translate-x-[100px]'}
        w-3/12 h-full  bg-white`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-row-reverse p-4">
            <Image
              src={close}
              alt=""
              onClick={handleNav}
              className="cursor-pointer"
            />
          </div>
          <ul>
            <li>DEVELOP</li>
            <li>STACK</li>
            <li>CS</li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Lnb
