import axios from "axios"
import { toast } from "react-toastify";

export const getRequest = async (url,query,headers)=>{
    let config = {
        headers: {'Authorization': 'JWT '},
        params: query
      }
    try{
        let response = await axios.get(url,config);
        return response?.data;
    }catch(error){
        toast.error('This is a error notification');
        return false;
    }

}

export const postRequest = async (url,body,headers)=>{
    let config = {
        headers: {'Authorization': 'JWT '},
        body: body
      }
    try{
        let response = await axios.post(url,config);
        return response?.data;
    }catch(error){
        toast.error('This is a error notification');
        return false;
    }

}

 