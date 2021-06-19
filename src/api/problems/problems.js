import axios from "axios";

const endpoint = "/problems/";

/**
 * Obtener todos los problemas
 * @returns Arreglo de problemas
 */
const getAllProblems = async () => {
  try {
    const response = await axios.get(endpoint);
    return response.data;
  } catch (error) {
    return error;
  }
};

/**
 * Obtener todos los problemas de una
 * dificultad en epecífico
 * @param {String} difficulty dificultad
 * @returns Arreglo de problemas
 */
const getProblemsByDifficulty = async (difficulty, user) => {
  const url = endpoint + difficulty;
  const userID = user.google_id;
  try {
    const response = await axios.get(url, {
      params: {
        google_id: userID,
      },
    });
    return response.data;
  } catch (error) {
    return error;
  }
};

/**
 * Obtener un problema por ID
 * @param {String} id ID del problema
 * @returns Arreglo con el problema
 */
const getProblemById = async (id) => {
  const url = endpoint + "id/" + id;
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    return error;
  }
};

const postProblem = async (problemInfo) => {
  try {
    const response = await axios.post(endpoint, {
      problem: problemInfo,
    });
    return response;
  } catch (error) {
    return error;
  }
};

/**
 *
 * @param {JSON} problemInfo
 * @returns {Handler} response manejo del response
 */
const updateProblem = async (problemInfo) => {
  const url = endpoint + "id/" + problemInfo.problem_id.toString();
  try {
    const response = await axios.put(url, {
      problem: problemInfo,
    });
    return response;
  } catch (error) {
    return error;
  }
};

export default {
  getAllProblems,
  getProblemsByDifficulty,
  getProblemById,
  postProblem,
  updateProblem,
};
