"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);

//These are links for using later.
const userLink = "https://jsonplaceholder.typicode.com/users";
const postLink = "https://jsonplaceholder.typicode.com/posts";

//an Async function for awaiting results fetched from the websites. 
const getData = async (userId) => {
    
    try{
        const user = await _axios2.default.get(`${userLink}/${userId}`);
        const posts = await _axios2.default.get(`${postLink}?userId=${userId}`);
        
        
        return {
            ...user.data,
            data:posts.data
        };
    }catch (e) // We cat any errors that we possibly could get.
    {
        return e
    }
}


exports. default = getData; //We export it by default so that we dont need to use curly braces when importing.