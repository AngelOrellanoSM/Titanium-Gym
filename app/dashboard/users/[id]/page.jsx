import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css"
import Image from "next/image"
import Link from "next/link";

const SingleUserPage = async ({params}) =>{

    const {id} = params;

    const user = await fetchUser(id);

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/noavatar.png" alt="" fill></Image>
                </div>
                {user.username}
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form} action={updateUser}>
                    <input type="hidden" name="id" value={user.id}></input>
                    <label>Username</label>
                    <input type="text" name="username" placeholder={user.username}></input>
                    <label>Email</label>
                    <input type="email" name="email" placeholder={user.email}></input>
                    <label>Password</label>
                    <input type="password" name="password" ></input>
                    <label>Phone</label>
                    <input type="text" name="phone" placeholder={user.phone}></input>
                    <label>Address</label>
                    <textarea type="text" name="address" placeholder={user.address}></textarea>
                    <label>Es admin?</label>
                    <select name="isAdmin" id="isAdmin">
                            <option value={true} selected={user.isAdmin===1}>Yes</option>
                            <option value={false} selected={user.isAdmin===0}>No</option>
                    </select>
                    <label>Esta Activo?</label>
                    <select name="isActive" id="isActive" >
                            <option value={true} selected={user.isActive===1}>Yes</option>
                            <option value={false} selected={user.isActive===0}>No</option>
                    </select>
                    <div className={styles.contenedorBotones}>
                        <button type="submit">Update</button>
                        <button>
                            <Link href="/dashboard/users">
                                Regresar
                            </Link>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SingleUserPage