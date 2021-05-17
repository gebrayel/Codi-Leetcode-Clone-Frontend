import axios from 'axios';

const endpoint = "/payments";

const createPayment = async (paymentInfo)=>{
    try {
        const response = await axios.post(endpoint, {
            payment: paymentInfo,
        });
        return response.data;
        
    } catch(error) {
        return error;
    }
}

export default {
    createPayment,
}