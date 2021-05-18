import axios from 'axios';

const endpoint = "/payments";

/**
 * Agregar un pago a la base de datos
 * @param {JSON} paymentInfo Objeto con información del pago
 * @returns Array con info del pago
 */
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