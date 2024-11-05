
import axios from './axios.customize';

const createUserApi = (name,email,password)=>{
      const URL_API="/v1/api/register";
      const data = {
        name, email, password
      }
      return axios.post(URL_API, data)
}

const loginApi = (email,password)=>{
  const URL_API="/v1/api/login";
  const data = {
     email, password
  }
  return axios.post(URL_API, data)
}
const fetchAllUser =()=>{
  return axios.get("https://reqres.in/api/users?page=1");
}


export {
    createUserApi,
    loginApi,
    fetchAllUser
}