import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {

    const item_per_page = 10;

    if(q === "")
    {
        try{
            const result = await connectToDB.query(`SELECT * FROM users LIMIT ${item_per_page} OFFSET ${item_per_page * (page-1)}`)
            const count = await connectToDB.query("SELECT COUNT(*) AS total FROM users")
            return {count, result};
        }catch(error){
            console.log(error);
            throw new Error(error);
        }
    }else{
        const username = q.toLowerCase();
        try{
            const result = await connectToDB.query("SELECT * FROM users WHERE username LIKE ? LIMIT ? OFFSET ?", [`%${username}%`, item_per_page, item_per_page * (page-1)]);
            const count = await connectToDB.query("SELECT COUNT(*) AS total FROM users WHERE username LIKE ?", [`%${username}%`])
            return {count, result};
        }catch(error){
            console.log(error);
            throw new Error(error);
        }
    }
}

export const fetchProducts = async (q, page) => {

    const item_per_page = 10;

    if(q === "")
    {
        try{
            const result = await connectToDB.query(`SELECT * FROM products LIMIT ${item_per_page} OFFSET ${item_per_page * (page-1)}`)
            const count = await connectToDB.query("SELECT COUNT(*) AS total FROM products")
            return {count, result};
        }catch(error){
            console.log(error);
            throw new Error(error);
        }
    }else{
        const title = q.toLowerCase();
        try{
            const result = await connectToDB.query("SELECT * FROM products WHERE title LIKE ? LIMIT ? OFFSET ?", [`%${title}%`, item_per_page, item_per_page * (page-1)]);
            const count = await connectToDB.query("SELECT COUNT(*) AS total FROM products WHERE title LIKE ?", [`%${title}%`])
            return {count, result};
        }catch(error){
            console.log(error);
            throw new Error(error);
        }
    }
}


export const fetchUser = async (id) => {
    try{
        const result = await connectToDB.query(`SELECT * FROM users WHERE id = ${id}`)
        return result[0]
    }catch(error){
        console.log(error);
        throw new Error(error);
    }
}

export const fetchProduct = async (id) => {
    try{
        const result = await connectToDB.query(`SELECT * FROM products WHERE id = ${id}`)
        return result[0]
    }catch(error){
        console.log(error);
        throw new Error(error);
    }
}