import styles from "@/app/ui/dashboard/transactionPage/transaction.module.css"
import Image from "next/image"
import Link from "next/link"
import Search from "@/app/ui/dashboard/search/search"
import Pagination from "@/app/ui/dashboard/pagination/pagination"
import CircleGraphic from "@/app/ui/dashboard/transactionPage/circleGraphic/circleGraphic"
import BarGraphic from "@/app/ui/dashboard/transactionPage/barGraphic/barGraphic"
import IngresoPromedio from "@/app/ui/dashboard/transactionPage/ingresoPromedio/ingresoPromedio"
import Ventas from "@/app/ui/dashboard/transactionPage/ventas/ventas"



const Transactions = async ({searchParams}) => {
    //const q = searchParams?.q || "";
    //const page = searchParams?.page || 1;
    //const { count, result: products } = await fetchProducts(q, page); // REEMPLAZAR POR TRANSACCIONES

    return(
        <div>
            <div className={styles.container}>
                <div className={styles.mainGraphics}>
                    <div className={styles.circleGraphic}>
                        <CircleGraphic></CircleGraphic>
                    </div>
                    <div className={styles.barGraphic}>
                        <BarGraphic></BarGraphic>
                    </div>
                </div>
                <div className={styles.secondGraphics}>
                    <div className={styles.ingresoPromedio}>
                        <IngresoPromedio></IngresoPromedio>
                    </div>
                    <div className={styles.ventas}>
                        <Ventas></Ventas>
                    </div>
                </div>            
                <div className={styles.containerTable}>
                    <div className={styles.top}>
                        <Search placeholder="Search for transactions..."></Search>
                        <Link href="/dashboard/products/add">
                            <button className={styles.addButton}>Add New</button>
                        </Link>
                    </div>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <td className={styles.tableId}>ID Venta</td>
                                <td className={styles.tableCliente}>Cliente</td>
                                <td className={styles.tableFecha}>Fecha</td>
                                <td className={styles.tableStatus}>Status</td>
                                <td className={styles.tableDetalle}>Detalle</td>
                                <td className={styles.tableMonto}>Total</td>
                                <td className={styles.tableAction}>Actiones</td>
                            </tr>
                        </thead>
                        <tbody>
                            
                            <tr>
                                <td className={styles.Id}>#1532</td>
                                <td className={styles.tableCliente}><div className={styles.product}>
                                        <Image src="/noproduct.jpg" alt="" width={40} height={40} className={styles.productImage}></Image>
                                        Cliente Name
                                    </div>
                                </td>
                                <td className={styles.tableFecha}>01.04.2024</td>
                                <td className={styles.tableStatus && styles.pagado}>Pagado</td>
                                <td className={styles.tableDetalle}>Plan Black o Producto</td>
                                <td className={styles.tableMonto}>S/.150.00</td>
                                <td className={styles.tableAction}>
                                    <div className={styles.buttons}>
                                        <Link href="/dashboard/products">
                                            <button className={`${styles.button} ${styles.view}`}>View</button>
                                        </Link>
                                        <form action="">
                                            <input type="hidden" value="" name="id"></input>
                                            <button type="submit" className={`${styles.button} ${styles.delete}`}>delete</button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        
                        </tbody>
                    </table>
                    <Pagination></Pagination>
                </div>
            </div>
        </div>
    )
}

export default Transactions