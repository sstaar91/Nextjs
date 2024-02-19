import React from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  ListItemButton,
} from '@mui/joy'
import { MenuListType } from '@_types/menuList'

interface Props {
  list: MenuListType[]
}

const AccordionBox = ({ list }: Props) => {
  return (
    <AccordionGroup>
      {list.map((text) => {
        return (
          <Accordion key={text.id}>
            <AccordionSummary>{text.title}</AccordionSummary>
            <AccordionDetails sx={{ padding: '0 20px' }}>
              {text.list.map((menu: string) => {
                return <ListItemButton key={menu}>{menu}</ListItemButton>
              })}
            </AccordionDetails>
          </Accordion>
        )
      })}
    </AccordionGroup>
  )
}

export default AccordionBox
