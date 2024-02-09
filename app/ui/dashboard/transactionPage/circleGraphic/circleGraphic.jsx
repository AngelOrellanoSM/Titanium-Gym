"use client"
import styles from "./circleGraphic.module.css"
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';


const data = [
    {
        name: 'personalizadas',
        cant: 510,
        fill: '#f5b403',
    },
    {
        name: 'suscripciones',
        cant: 1700,
        fill: '#03fa62',
    },
    {
        name: 'clases',
        cant: 1190,
        fill: '#1e07f5',
    },
    {
        name: 'total',
        cant: 3400,
        fill: '#45eefa',
    },
];


const CircleGraphic = () => {
    return (
        <div className={styles.container}>
            <h2>Distribucion de Ingresos</h2>
            <div className={styles.grafico}>
                <ResponsiveContainer width="100%" height="100%" >
                    <RadialBarChart cx="50%" cy="50%" innerRadius="30%" outerRadius="100%" barSize={10} data={data}>
                    <RadialBar
                        minAngle={20}
                        label={false}
                        background = {false}
                        clockWise
                        dataKey="cant"
                        />
                    
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
            <div className={styles.leyenda}>

                    <div className={styles.bolita1}></div>
                    <p>Por suscripciones</p>
                    <p >50%</p>
                
                    <div className={styles.bolita2}></div>
                    <p>Por sesiones personalizadas</p>
                    <p>15%</p>
                
                    <div className={styles.bolita3}></div>
                    <p>Por clases</p>
                    <p>35%</p>
                
                    <div className={styles.bolita4}></div>
                    <p>TOTAL DE VENTAS</p>
                    <p >100%</p>
            </div>
        </div>
    );
  
}

export default CircleGraphic;