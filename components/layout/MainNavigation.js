import Link from "next/link";
import classes from "./MainNavigation.module.css"
const MainNavigation = () => {
    return <div className={classes.navContainer}>
        <h1>React Meetup</h1>
        <Link href={"/"}>All Meetups</Link>
        <Link href={"/new-meetup"}>Add New Meetup</Link>
    </div>
}

export default MainNavigation;