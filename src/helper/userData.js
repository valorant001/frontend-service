import { useDispatch } from "react-redux";
import Encryption from "./Encryption";
import { setAccessToken } from "../Redux/AccessToken";

const useData=()=>{
    // const dispatch = useDispatch();
    // var token = localStorage.getItem("tkm");
    // var connectState = localStorage.getItem("state");
    // var decryptData = Encryption.decryptData(token);
    // dispatch(setAccessToken({token:decryptData,connectedState:connectState}))
}
export default useData();