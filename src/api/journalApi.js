import axios from "axios";

const journalApi = axios.create({
    baseURL: 'https://vue-demos-e3fb8-default-rtdb.firebaseio.com'
})


export default journalApi