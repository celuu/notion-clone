import { useState } from "react";
import NavBar from "../NavBar/NavBar";


const LandingPage: React.FC  = () => {
    const [closeNavBar, setCloseNavBar] = useState<boolean>(false)

    return(
        <>
        <NavBar />
        </>
    )

}

export default LandingPage;