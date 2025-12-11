import { useDispatch } from "react-redux";
import Encryption from "./Encryption";
import { setAccessToken } from "../Redux/AccessToken";
import store from "../Redux/store";
 function useData(){

    var token = localStorage.getItem("tkm");
    if(!token){
        return;
    }
    var connectState = localStorage.getItem("state");

    var decryptData = Encryption.decryptData(token);
   
     store.dispatch(setAccessToken({accessCode:decryptData,connectedState:connectState}));
}
export default useData;