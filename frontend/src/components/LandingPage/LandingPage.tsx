import * as React from "react";
import NavBar from "../NavBar/NavBar";
import { useAuthContext } from "../../hooks/useAuthContext";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react'


const LandingPage: React.FC  = () => {
    const {user} = useAuthContext();
    const { isOpen, onOpen, onClose } = useDisclosure()

    return(
        <>
   
        <div className="hamburger-menu" onClick={onOpen}>
            <Button>Open Nav</Button>
        </div>
        <Drawer
            isOpen={isOpen}
            placement='left'
            onClose={onClose}
          
        >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <NavBar />
          </DrawerBody>


        </DrawerContent>
      </Drawer>
        </>
    )

}

export default LandingPage;