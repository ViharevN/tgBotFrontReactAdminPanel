import axios from "axios";
const HUMAN_API_BASE_URL = "http://localhost:8080/api/v1/all"
const HUMAN_API_ADD_URL = "http://localhost:8080/api/v1/add"
class UserService {
    getHumans() {
        return axios.get(HUMAN_API_BASE_URL)
    }

    addHuman(human) {
        return axios.post(HUMAN_API_ADD_URL, human)

    }
}

export default new UserService();