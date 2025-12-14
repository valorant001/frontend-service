import axios from "axios";

const apiCallAdAccount = async (params)=>{
    const response =  axios.get(`https://graph.facebook.com/v21.0/act_646360858472602?fields=id,name,account_status,adtrust_dsl,spend_cap,amount_spent&access_token=${params}`)
      .catch(err => {
        console.log(err);
      });
    return response;
}
export default apiCallAdAccount;