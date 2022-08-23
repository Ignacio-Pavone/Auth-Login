import axios from 'axios';
import client from '../index.js'    



const fetchFromWebpage = async (req, res) => {
    const {id} = req.params;
    const response = await axios.get("https://rickandmortyapi.com/api/character/" + id);
    const saveResult = await client.set(id, JSON.stringify(response.data), 'EX', 60);
    res.status(200).json(response.data);

}


export default {
    fetchFromWebpage
}