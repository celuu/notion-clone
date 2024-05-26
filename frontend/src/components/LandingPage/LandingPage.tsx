import * as React from "react";
import NavBar from "../NavBar/NavBar";
import { useAuthContext } from "../../hooks/useAuthContext";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon, ArrowLeftIcon } from '@chakra-ui/icons'
import "./LandingPags.css"
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import { Navigate } from "react-router-dom";
import { useState } from "react";
import UserPanel from "./UserPanel";


const LandingPage: React.FC  = () => {
    let {user} = useAuthContext();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [userDropDown, setUserDropDown] = useState<boolean>(false);

    if (!user) {
        return <Navigate to='/login' replace/>
    }

    const onClickEvent = () => {
      onClose();
      setUserDropDown(false);
    }


    return(
        <>
   
        <div className="hamburger-menu" onClick={onOpen}>
            <HamburgerIcon boxSize={6} className="hamburger-icon"/>
        </div>
        <div className="whole-nav-bar">
          <Drawer
              isOpen={isOpen}
              placement='left'
              onClose={onClickEvent}
          >
          <DrawerOverlay />
            <DrawerContent>
              <div className="arrow-left-container">
                <div onClick={(e) => setUserDropDown(!userDropDown)} className="user-scribble-text">{user.user.email}'s Scribble</div>
                {userDropDown && <UserPanel />}

                <ArrowLeftIcon onClick={onClickEvent} className="nav-bar-arrow-left"/>
              </div>
              <DrawerBody>
                <NavBar />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
      </div>
        </>
    )

}

export default LandingPage;