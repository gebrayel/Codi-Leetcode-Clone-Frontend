import axios from 'axios';

const endpoint = "/user/";

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