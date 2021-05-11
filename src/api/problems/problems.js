import axios from 'axios';

const endpoint = "/problems/";

/**
 * Obtener todos los problemas de una
 * dificulta en epecífico
 * @param {String} difficulty dificultad
 * @returns Arreglo de problemas
 */
const getProblemsByDifficulty = async (difficulty) => {
    const url = endpoint + difficulty;
    try {
        const response  = await axios.get(url);
        return response.data;
    } catch (error) {
        return error;
    }
}

export default {
    getProblemsByDifficulty,
}