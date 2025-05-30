import axios from "axios";
import {UserContextProvider} from "./UserContext";
import Routes from "./Routes";
import Chat from "./Chat";

function App() {
  axios.defaults.baseURL = 'http://localhost:4040';
  axios.defaults.withCredentials = true;
  return (
    <UserContextProvider>
      {/* <Routes /> */}
      <Chat/>
    </UserContextProvider>
  )
}

export default App
