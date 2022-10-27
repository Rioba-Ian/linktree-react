import myprofile from "../assets/PXL_20220319_122847252.MP.jpg"

export default function Main() {
    return (
        <div className="main__content">
            <h1>Hello Mum.</h1>
            <img src={myprofile} className="profile" alt="Ian Rioba" />
        </div>
    )
}