"use client"
import styles from "./barGraphic.module.css"
import { PiCalendarBlankFill } from "react-icons/pi";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        "month": "Ene",
        "personalizados": 1000,
        "clases": 1700,
        "suscripciones": 1900
      },
      {
        "month": "Feb",
        "personalizados": 800,
        "clases": 1500,
        "suscripciones": 2000
      },
      {
        "month": "Mar",
        "personalizados": 900,
        "clases": 1600,
        "suscripciones": 1900
      },
      {
        "month": "Abr",
        "personalizados": 0,
        "clases": 1450,
        "suscripciones": 2000
      },
      {
        "month": "May",
        "personalizados": 1100,
        "clases": 1800,
        "suscripciones": 1900
      },
      {
        "month": "Jun",
        "personalizados": 700,
        "clases": 1700,
        "suscripciones": 1800
      },
      {
        "month": "Jul",
        "personalizados": 800,
        "clases": 1750,
        "suscripciones": 2000
      },
      {
        "month": "Ago",
        "personalizados": 0,
        "clases": 1600,
        "suscripciones": 2000
      },
      {
        "month": "Sep",
        "personalizados": 1400,
        "clases": 1700,
        "suscripciones": 1800
      },
      {
        "month": "Oct",
        "personalizados": 1000,
        "clases": 1650,
        "suscripciones": 1900
      },
      {
        "month": "Nov",
        "personalizados": 700,
        "clases": 1550,
        "suscripciones": 2000
      },
      {
        "month": "Dic",
        "personalizados": 1200,
        "clases": 1750,
        "suscripciones": 1800
      },
  ];


const BarGraphic = () => {
    return (
        <div className={styles.container}>
            <h2>Ingresos por tipo de cliente</h2>
            <div className={styles.subTitulo}>
                <p className={styles.Total}>S/.3400.00</p>
                <div className={styles.leyenda}>
                    <div className={styles.itemLeyenda}>
                        <div className={styles.bolita1}></div>
                        <p>Por suscripciones</p>
                    </div>
                    <div className={styles.itemLeyenda}>
                        <div className={styles.bolita2}></div>
                        <p>Por sesiones personalizadas</p>
                    </div>
                    <div className={styles.itemLeyenda}>
                        <div className={styles.bolita3}></div>
                        <p>Por clases</p>
                    </div>
                    <div className={styles.calendar}>
                        <PiCalendarBlankFill />
                        <p>Enero 2023 - Dic 2023</p>
                    </div>
                </div>
            </div>
            <div className={styles.barGraphic}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                    
                    <XAxis dataKey="month" tick={{fill:"#fff", fontSize:"0.825rem", fontWeight:"300"}} axisLine={false} tickLine={false} tickSize={20}/>
                    <YAxis tick={{fill:"#fff", fontSize:"0.825rem", fontWeight:"300"}} axisLine={false} tickLine={false}/>
                    <Tooltip contentStyle={{backgroundColor:"var(--bgSoft)", border:"none", fontSize:"0.825rem"} } cursor={{fill: 'var(--bg)'}}/>
                    
                    <Bar dataKey="suscripciones" stackId="a" fill="#212394 " barSize={10} />
                    <Bar dataKey="personalizados" stackId="a" fill="#5159c7 " barSize={10} />
                    <Bar dataKey="clases" stackId="a" fill="#858bc7 " barSize={10} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default BarGraphic;