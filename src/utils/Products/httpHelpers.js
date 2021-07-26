import axios from "axios";

const url = "localhost:8080/api/v1/vehicles";

export async function get(){
    return await axios.get(url);
}
