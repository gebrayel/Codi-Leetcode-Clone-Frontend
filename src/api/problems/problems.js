import axios from 'axios';

const endpoint = "/problems";



const getAllProblems= async ()=>{
    try{
        
        const response=await axios.get(endpoint);
        console.log(response)

    }catch(error){
        return error;
    }
}


export default {
    getAllProblems,
}