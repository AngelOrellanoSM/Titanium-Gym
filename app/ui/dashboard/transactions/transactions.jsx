import styles from "./transactions.module.css"
import Image from "next/image"

const Transactions = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Ultimas transacciones</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Nombre</td>
                        <td>Estado</td>
                        <td>Date</td>
                        <td>Cantidad</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage}></Image>
                                Usuario de Prueba
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                        </td>
                        <td>29.01.2024</td>
                        <td>S/.300.00</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage}></Image>
                                Usuario de Prueba
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.done}`}>Done</span>
                        </td>
                        <td>29.01.2024</td>
                        <td>S/.300.00</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage}></Image>
                                Usuario de Prueba
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.cancel}`}>Cancel</span>
                        </td>
                        <td>29.01.2024</td>
                        <td>S/.300.00</td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <Image src="/noavatar.png" alt="" width={40} height={40} className={styles.userImage}></Image>
                                Usuario de Prueba
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                        </td>
                        <td>29.01.2024</td>
                        <td>S/.300.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Transactions