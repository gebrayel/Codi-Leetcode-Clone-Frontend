import axios from 'axios';

const endpoint = "/user/";

/**
 * Editar el nombre de un usuario
 * @param {String} user Objeto con la información del usuario
 * @param {Function} setUser almacenar el usuario en la variable global
 * @param {String} newName nombre a setear
 * @returns String success o error
 */
const putUser = async (user, setUser, newName) => {
    const userInfo = {
        name: newName,
        google_id: user.google_id
    };

    try {
        const response = await axios.put(endpoint, {
            user: userInfo
        });
        if(response.data === 'success'){
            const temp = user;
            temp['name'] = newName;
            setUser(user);
        }
        return response;
    } catch (error) {
        return error;
    }
}

export default {
    putUser,
}