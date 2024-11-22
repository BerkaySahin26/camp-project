import axios from "axios";

export default class ProductService{
getProducts(){
    return axios.get("https://localhost:7131/api/Products/getall")
}

getById(productId){
    return axios.get("https://localhost:7131/api/Products/getbyid?id="+productId)
}

}

