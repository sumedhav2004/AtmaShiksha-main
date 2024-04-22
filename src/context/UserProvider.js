import { useHistory} from "react-router-dom";

const { createContext, useContext, useState, useEffect } = require("react");

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [user, setuser] = useState();
    const history = useHistory();
  
    useEffect(() => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      setuser(userInfo);
  
      if(!userInfo){ 
          history.push("/");
      }
    },[history])
  
    return <UserContext.Provider value={{user, setuser}}>{children}</UserContext.Provider>;
  };
  
  export const ChatState = () => {
    return useContext(UserContext);
}

export default UserProvider
