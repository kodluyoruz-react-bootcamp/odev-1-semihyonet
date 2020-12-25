import Axios from "axios";

//These are links for using later.
const userLink = "https://jsonplaceholder.typicode.com/users";
const postLink = "https://jsonplaceholder.typicode.com/posts";

//an Async function for awaiting results fetched from the websites. 
const getData = async (userId) => {
    
    try{
        const user = await Axios.get(`${userLink}/${userId}`);
        const posts = await Axios.get(`${postLink}?userId=${userId}`);
        
        
        return {
            ...user.data,
            data:posts.data
        };
    }catch (e) // We cat any errors that we possibly could get.
    {
        return e
    }
}


export default getData; //We export it by default so that we dont need to use curly braces when importing.