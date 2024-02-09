import Image from "next/image";
import styles from "./rightbar.module.css";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div className={styles.container}>
        <Image className={styles.bg} src="/banner.jpg" alt="" fill />
    </div>
  );
};

export default Rightbar;
