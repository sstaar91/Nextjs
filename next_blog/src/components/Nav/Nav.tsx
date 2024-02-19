'use client'

import { useState } from 'react'
import { Menu } from '@mui/icons-material'
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ModalClose,
  Typography,
} from '@mui/joy'

import AccordionBox from '@_components/Mui/AccordionBox'
import { MENU_LIST } from '@_constants/MENU_LIST'
import * as S from './Nav.style'

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <S.Container>
      <IconButton
        variant="outlined"
        color="neutral"
        onClick={() => setIsNavOpen(true)}
      >
        <Menu />
      </IconButton>
      <Drawer
        size="sm"
        open={isNavOpen}
        onClose={() => setIsNavOpen(false)}
        sx={{ width: '300px', backgroundColor: 'white' }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '8px 12px',
          }}
        >
          <Typography level="title-lg">MENU</Typography>
          <ModalClose id="close-icon" sx={{ position: 'initial' }} />
        </Box>
        <Divider />
        <List
          sx={{
            flex: 'none',
            fontSize: 'l',
          }}
        >
          <AccordionBox list={MENU_LIST} />
        </List>
      </Drawer>
    </S.Container>
  )
}

export default Nav
