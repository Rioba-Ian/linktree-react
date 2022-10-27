import myprofile from "../assets/sqaured_profile.jpg"
import Links from "./Links"

export default function Main() {
    return (
        <div className="main__content">
            <img src={myprofile} className="profile" alt="Ian Rioba" />
            <h1>Ian Rioba</h1>
            <Links />
        </div>
    )
}