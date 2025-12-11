import axios from "axios";

const apiCall = async (params)=>{
    const response =  axios.get(`https://graph.facebook.com/v21.0/oauth/access_token?client_id=2656339064721682&redirect_uri=https://adsreacher.com/link-accounts&client_secret=546745b7b09f6acc051f0e93901270d5&code=${params}`)
      .catch(err => {
        console.log(err);
      });
    return response;
}
export default apiCall;