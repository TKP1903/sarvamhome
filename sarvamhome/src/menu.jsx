import React from 'react';
import './home.jsx';
import './home.css'
import { AiOutlineMenu } from "react-icons/ai";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Box
} from '@chakra-ui/react'

function DrawerExample({children}) {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
    
   
      <Box ref={btnRef}  onClick={onOpen}>
       <AiOutlineMenu/>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        
        <DrawerContent >
          
         
           

  
          <DrawerBody className='menu-home' >
             <DrawerCloseButton    pos="absolute" left={"150px"} top="30px"/>
           <div className='menu-text'>Home</div>
          <div className='menu-text'>About us</div>
           <div className='menu-text'>Products</div>
            <div className='menu-text'>Business Partners</div>
             <div className='menu-text'>Careers</div>
            <div className='menu-text'>Contact us</div>
           
          </DrawerBody>

          <DrawerFooter>
           
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      
    </>
  )
}
export default DrawerExample;