import axios from "axios";
import httpComman from "../http-comman"

class userService {
   getAll() {
    return axios.get('http://203.109.68.94:2110/api/ApiServices/retUserMas');
   }
}

export default new userService()