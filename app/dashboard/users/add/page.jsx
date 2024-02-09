import { addUser } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/users/addUser/addUser.module.css";

const AdduserPage = () => {
    return (
        <div className={styles.container}>
            <form className={styles.form} action={addUser}>
                <input type="text" placeholder="username" name="username" required></input>
                <input type="email" placeholder="email" name="email" required></input>
                <input type="password" placeholder="password" name="password" required></input>
                <input type="phone" placeholder="phone" name="phone" required></input>
                <select name="isAdmin" id="isAdmin">
                    <option value={false}>Es admin?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <select name="isActive" id="isActive">
                    <option value={false}>Esta Activo?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <textarea name="address" id="address"  rows={16} placeholder="Address"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AdduserPage
