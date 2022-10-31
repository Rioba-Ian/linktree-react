import zuriinternship from "../assets/logo.36d2d48a.svg"
import ingressive from "../assets/I4G.png"
export default function Footer() {
    return (
        <footer className="App footer__section">
            <img src={zuriinternship} alt="zuri internship" />
            <p>HNG Internship 9 Frontend Task</p>
            <img src={ingressive} alt="ingressive for good" />
        </footer>
    )
}