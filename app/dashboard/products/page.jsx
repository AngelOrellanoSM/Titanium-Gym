import Image from "next/image"
import Link from "next/link"
import styles from "@/app/dashboard/products/products.module.css"
import Search from "@/app/ui/dashboard/search/search"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
import { fetchProducts } from "@/app/lib/data"
import { deleteProduct } from "@/app/lib/actions"


const ProductsPage = async ({searchParams}) => {

    const q = searchParams?.q || "";
    const page = searchParams?.page || 1;
    const { count, result: products } = await fetchProducts(q, page);

    return(
        <div>
            <div className={styles.container}>
                <div className={styles.top}>
                    <Search placeholder="Search for products..."></Search>
                    <Link href="/dashboard/products/add">
                        <button className={styles.addButton}>Add New</button>
                    </Link>
                </div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <td>Titulo</td>
                            <td className={styles.description}>Descripcion</td>
                            <td>Price</td>
                            <td>Created at</td>
                            <td>Stock</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map( product=>(
                            <tr key={product.id}>
                                <td><div className={styles.product}>
                                        <Image src="/noproduct.jpg" alt="" width={40} height={40} className={styles.productImage}></Image>
                                        {product.title}
                                    </div>
                                </td>
                                <td className={styles.description}>{product.description}</td>
                                <td>S/.{product.price}</td>
                                <td>{product.createdAt?.toString().slice(4,16)}</td>
                                <td>{product.stock}</td>
                                <td>
                                    <div className={styles.buttons}>
                                        <Link href={`/dashboard/products/${product.id}`}>
                                            <button className={`${styles.button} ${styles.view}`}>View</button>
                                        </Link>
                                        <form action={deleteProduct}>
                                            <input type="hidden" value={product.id} name="id"></input>
                                            <button type="submit" className={`${styles.button} ${styles.delete}`}>delete</button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Pagination count={count[0].total}></Pagination>
            </div>
        </div>
    )
}

export default ProductsPage