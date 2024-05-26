import Logout from "../../features/Logout/Logout";
import { useAuthContext } from "../../hooks/useAuthContext";



const UserPanel: React.FC = () => {
    const {user} = useAuthContext();

    return(
        <div className="user-panel-container">
            {user.user.email}
            {user && <Logout />}
        </div>
    )
}

export default UserPanel;