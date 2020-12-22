"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _axios = require('axios'); var _axios2 = _interopRequireDefault(_axios);

const userLink = "https://jsonplaceholder.typicode.com/users";
const postLink = "https://jsonplaceholder.typicode.com/posts";


const getData = async (userId) => {
    
    try{
        const user = await _axios2.default.get(`${userLink}/${userId}`);
        const posts = await _axios2.default.get(`${postLink}?userId=${userId}`);
        
        
        return {
            ...user.data,
            data:posts.data
        };
    }catch (e)
    {
        return e
    }
}


exports. default = getData;