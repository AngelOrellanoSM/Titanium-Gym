import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css"
import Link from "next/link";
import Image from "next/image"

const SingleProductPage = async ({params}) =>{
    const {id} = params;
    const product = await fetchProduct(id);


    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noproduct.jpg" alt="" fill></Image>
                </div>
                {product.title}
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form} action={updateProduct}>
                    <input type="hidden" name="id" value={product.id}></input>
                    <label>Title</label>
                    <input type="text" name="title" placeholder={product.title}></input>
                    <label>Price</label>
                    <input type="number" name="price" placeholder={product.price}></input>
                    <label>Stock</label>
                    <input type="number" name="stock" placeholder={product.stock} ></input>
                    <label>Color</label>
                    <input type="text" name="color" placeholder={product.color || "color"}></input>
                    <label>Size</label>
                    <input type="text" name="size" placeholder={product.size || "size"}></input>
                    <label>Cat</label>
                    <select name="cat" id="cat" value={product.cat!== null ? product.cat : "" } disabled>
                        <option value="Kitchen">{product.cat}</option>
                        <option value="phone">phone</option>
                        <option value="computer">computer</option>
                        <option value="">No se categorizo</option>
                    </select>
                    <label>Description</label>
                    <textarea name="description" id="description" rows={10} placeholder={product.description}></textarea>
                    <div className={styles.contenedorBotones}>
                        <button type="submit">Update</button>
                        <button>
                            <Link href="/dashboard/products">
                                Regresar
                            </Link>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SingleProductPage