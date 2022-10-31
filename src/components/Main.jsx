import myprofile from "../assets/sqaured_profile.jpg"
import Links from "./Links"
import slack from "../assets/slack.svg"
import github from "../assets/Social icon.svg"

export default function Main() {
    return (
        <div className="main__content">
            <img src={myprofile} id="profile__img" className="profile" alt="Ian Rioba" />
            <h1 id="twitter">IanRioba</h1>
            <h1 id="slack" className="hidden">IanRioba</h1>
            <Links />
            <div className="social__icons">
                <a href="https:slack.com/IanRioba">
                    <img src={slack} alt="slack" />
                </a>
                <a href="https:github.com/Rioba-Ian">
                    <img src={github} alt="github" />
                </a>
            </div>
        </div>
    )
}