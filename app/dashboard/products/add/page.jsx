import { addProduct } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/products/addProduct/addProduct.module.css";

const AddProductPage = () => {
    return (
        <div className={styles.container}>
            <form action={addProduct} className={styles.form}>
                <input type="text" placeholder="titulo" name="title" required></input>
                <select name="cat" id="cat">
                    <option value="general">Elige una categoria</option>
                    <option value="Kitchen">Cocina</option>
                    <option value="phone">phone</option>
                    <option value="computer">computer</option>
                </select>
                <input typeof="number" placeholder="price" name="price"></input>
                <input typeof="number" placeholder="stock" name="stock"></input>
                <input typeof="text" placeholder="color" name="color"></input>
                <input typeof="text" placeholder="size" name="size"></input>
                <textarea name="description" id="description"  rows={16} placeholder="Descripcion"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddProductPage