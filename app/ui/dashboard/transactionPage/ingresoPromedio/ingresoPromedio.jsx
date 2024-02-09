import styles from "./ingresoPromedio.module.css"
import { MdAttachMoney } from "react-icons/md";
import { MdOutlineArrowOutward } from "react-icons/md";


const IngresoPromedio = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titulo}>
                <MdAttachMoney  className={styles.icono}/>
                <h2>Ingreso Promedio</h2>
            </div>
            <div className={styles.ingreso}>
                <p>S/.3400.00</p>
            </div>
            <div className={styles.cambio}>
                <div className={styles.cambioContainer}>
                    <p>11.3%</p>
                    <MdOutlineArrowOutward  />
                </div>
            </div>
        </div>
    )
}

export default IngresoPromedio;