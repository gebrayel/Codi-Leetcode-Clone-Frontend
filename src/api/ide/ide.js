import axios from 'axios';

const endpoint = "/ideProblem/";

const getProblemWithSubmissions = async (problemId, userId) => {
    try {
        const response = await axios.get(endpoint, {
            params: {
                problem_id: problemId,
                google_id: userId
            }
        });
        return response;
    } catch (error) {
        return error;
    }
}

export default {
    getProblemWithSubmissions,
}