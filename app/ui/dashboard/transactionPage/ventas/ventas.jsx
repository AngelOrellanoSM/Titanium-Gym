"use client"
import styles from "./ventas.module.css"
import { MdArrowOutward } from "react-icons/md";
import { PiClockFill } from "react-icons/pi";
import { PiCalendarBlankFill } from "react-icons/pi";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
    {
        "name": "ene 1",
        "cant": 0
      },
      {
        "name": "ene 2",
        "cant": 25
      },
      {
        "name": "ene 3",
        "cant": 25
      },
      {
        "name": "ene 4",
        "cant": 40
      },
      {
        "name": "ene 5",
        "cant": 10
      },
      {
        "name": "ene 6",
        "cant": 35
      },
      {
        "name": "ene 7",
        "cant": 20
      },
      {
        "name": "ene 8",
        "cant": 25
      },
      {
        "name": "ene 9",
        "cant": 15
      },
      {
        "name": "ene 10",
        "cant": 20
      },
      {
        "name": "ene 11",
        "cant": 40
      },
      {
        "name": "ene 12",
        "cant": 25
      },
      {
        "name": "ene 13",
        "cant": 10
      },
      {
        "name": "ene 14",
        "cant": 20
      },
      {
        "name": "ene 15",
        "cant": 30
      },
      {
        "name": "ene 16",
        "cant": 15
      },
      {
        "name": "ene 17",
        "cant": 25
      },
      {
        "name": "ene 18",
        "cant": 20
      },
      {
        "name": "ene 19",
        "cant": 30
      },
      {
        "name": "ene 20",
        "cant": 35
      },
      {
        "name": "ene 21",
        "cant": 10
      },
      {
        "name": "ene 22",
        "cant": 25
      },
      {
        "name": "ene 23",
        "cant": 30
      },
      {
        "name": "ene 24",
        "cant": 15
      },
      {
        "name": "ene 25",
        "cant": 20
      },
      {
        "name": "ene 26",
        "cant": 25
      },
      {
        "name": "ene 27",
        "cant": 30
      },
      {
        "name": "ene 28",
        "cant": 10
      },
      {
        "name": "ene 29",
        "cant": 20
      },
      {
        "name": "ene 30",
        "cant": 35
      },
      {
        "name": "ene 31",
        "cant": 25
      },
  ];


const Ventas = () => {
    return (
        <div className={styles.container}>
            <div className={styles.tituloVentas}>
                <PiClockFill />
                <h2>Ventas</h2>
            </div>
            <div className={styles.subtitulo}>
                <div className={styles.ganancias}>
                    <p>700</p>
                    <div className={styles.aumentoPositivo}>
                        <p>16.8%</p>
                        <MdArrowOutward />
                    </div>
                </div>
                <div className={styles.calendarContainer}>
                    <PiCalendarBlankFill />
                    <p>Enero 2024</p>
                </div>
            </div>
            <div className={styles.graficoVentas}>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#1998d3" stopOpacity={0.5}/>
                        <stop offset="95%" stopColor="#1998d3" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" interval={3} axisLine={false} tickLine={false} padding={{ left: 20 }} tick={{fill:"#fff", fontSize:"0.825rem", fontWeight:"300"}}/>
                    <YAxis tick={{fill:"#fff", fontSize:"0.825rem", fontWeight:"300"}} interval={1} axisLine={false} tickLine={false}/>
                    <Tooltip contentStyle={{backgroundColor:"var(--bgSoft)", border:"none"}}/>
                    <Area type="monotone" dataKey="cant" stroke="#1998d3" fillOpacity={1} fill="url(#colorUv)"/>
                </AreaChart>
            </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Ventas;