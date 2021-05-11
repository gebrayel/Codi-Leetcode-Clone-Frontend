import axios from 'axios';

const endpoint = "/problems";



const getAllProblems= async ()=>{
    try{
        
        const response=await axios.get(endpoint);
        console.log(response.data)
        return response.data

    }catch(error){
        return error;
    }
}


export default {
    getAllProblems,
}