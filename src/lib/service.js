import Axios from "axios";

const userLink = "https://jsonplaceholder.typicode.com/users";
const postLink = "https://jsonplaceholder.typicode.com/posts";


const getData = async (userId) => {
    
    try{
        const user = await Axios.get(`${userLink}/${userId}`);
        const posts = await Axios.get(`${postLink}?userId=${userId}`);
        
        
        return {
            ...user.data,
            data:posts.data
        };
    }catch (e)
    {
        return e
    }
}


export default getData;