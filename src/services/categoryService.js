import axios from "axios";

export default class CategoryService {

    getCategories() {
        return axios.get("https://localhost:7131/api/Categories/getall");
    }

}