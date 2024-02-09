"use server"
import { revalidatePath } from "next/cache";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt"
import { signIn } from "../auth";

export const addUser = async (formData) => {
    
    
    const {username, email, password, phone, address, isAdmin, isActive} = Object.fromEntries(formData);
    const boleanAdmin = JSON.parse(isAdmin);
    const boleanActive = JSON.parse(isActive);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);
    
    try{
        const result = await connectToDB.query(`INSERT INTO users (username, email, password, phone, address, isAdmin, isActive) 
        VALUES ('${username}', '${email}', '${hashedPassword}', '${phone}', '${address}', ${boleanAdmin===true?1:0}, ${boleanActive===true?1:0})`);
    }catch(error){
        console.log(error);
        throw new Error(error);
    }

    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
};

export const addProduct = async (formData) => {
   
    
    const {title, description, price, stock, color, size , cat} = Object.fromEntries(formData);
    
    try{
        const result = await connectToDB.query(`INSERT INTO products (title, cat, description, price, stock, color, size)
        VALUES ('${title}', '${cat}', '${description}', '${price}', '${stock}', '${color}', '${size}')`);
    }catch(error){
        console.log(error);
        throw new Error(error);
    }

    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")
};

export const deleteProduct = async (formData) => {
   
    
    const {id} = Object.fromEntries(formData);
    
    try{
        const result = await connectToDB.query(`DELETE FROM products WHERE id = ${id}`);
    }catch(error){
        console.log(error);
        throw new Error(error);
    }

    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")
};

export const deleteUser = async (formData) => {
   
    
    const {id} = Object.fromEntries(formData);
    
    try{
        const result = await connectToDB.query(`DELETE FROM users WHERE id = ${id}`);
    }catch(error){
        console.log(error);
        throw new Error(error);
    }

    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
};

export const updateUser = async (formData) => {
    
    
    const {id, username, email, password, phone, address, isAdmin, isActive} = Object.fromEntries(formData);
    const boleanAdmin = JSON.parse(isAdmin);
    const boleanActive = JSON.parse(isActive);

    let query =`SET 
                isAdmin = ${boleanAdmin===true?1:0},
                isActive = ${boleanActive===true?1:0}
                `;
    if(phone !== "") query += `,phone = '${phone}'`

    if(password !== ""){   
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        query += `, password = '${password}'`;
    }

    if(address !== "") query += `, address = '${address}'`
    if(username !== "") query += `, username = '${username}'`
    if(email !== "") query += `, email = '${email}'`

    try{
        const result = await connectToDB.query(`UPDATE users ${query} WHERE id = ${id}`);
    }catch(error){
        console.log(error);
        throw new Error(error);
    }

    revalidatePath("/dashboard/users")
    redirect("/dashboard/users")
};

export const updateProduct = async (formData) => {
    
    
    const {id, title, price, stock, color, size,cat, description} = Object.fromEntries(formData);

    let query =`SET 
                cat = '${cat}',
                color = '${color}',
                size = '${size}'
                `;
    if(title !== "") query += `,title = '${title}'`
    if(price !== "") query += `, price = ${price}`
    if(stock !== "") query += `, stock = ${stock}`
    if(description !== "") query += `, description = '${description}'`

    try{
        const result = await connectToDB.query(`UPDATE products ${query} WHERE id = ${id}`);
    }catch(error){
        console.log(error);
        throw new Error(error);
    }

    revalidatePath("/dashboard/products")
    redirect("/dashboard/products")
};

export const authenticate = async (prevState, formData) => {
    const { username, password } = Object.fromEntries(formData);
  
    try {
      await signIn("credentials", { username, password });
    } catch (err) {
      
      // Añade este console.log para entender mejor el tipo de error que estás recibiendo
  
      if (err.message.includes("credentials")) {
        // Si el mensaje de error incluye "credentials", significa que hubo un problema con las credenciales
        return "Credenciales incorrectas";
      }
      throw err;
    }
  };