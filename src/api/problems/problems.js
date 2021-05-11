import axios from 'axios';

const endpoint = "/problems/";

/**
 * Obtener todos los problemas
 * @returns Arreglo de problemas
 */
const getAllProblems = async () => {
    try {
        const response = await axios.get(endpoint);
        return response.data;
    } catch(error){
        return error;
    }
}

/**
 * Obtener todos los problemas de una
 * dificultad en epecífico
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

/**
 * Obtener un problema por ID
 * @param {String} id ID del problema
 * @returns Arreglo con el problema
 */
const getProblemById = async (id) => {
    const url = endpoint + "id/" + id;
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        return error;
    }
}

export default {
    getAllProblems,
    getProblemsByDifficulty,
    getProblemById
}

