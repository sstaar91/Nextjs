import { Gnb, Lnb } from '@_components/Navigation'
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const NavLayout = ({ children }: Props) => {
  return (
    <>
      <Lnb />
      <Gnb />
      {children}
    </>
  )
}

export default NavLayout
