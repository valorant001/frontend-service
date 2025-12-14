import axios from "axios";

const apiCallPageDetails = async (params)=>{
    const response =  axios.get(`https://graph.facebook.com/v20.0/me/accounts?fields=id,name,username,about,link,fan_count,emails,phone,whatsapp_number,location,website,
      cover{source},picture{url},category,is_published,is_verified,access_token&access_token=${params}`)
      .catch(err => {
        console.log(err);
      });
    return response;
}
export default apiCallPageDetails;