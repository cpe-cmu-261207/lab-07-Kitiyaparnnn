import Link from 'next/link'

const Port = () => {
    return (
        <>
            <div className="manu">
                <Link href={`/port`}><h1>Home</h1></Link>
                <Link href={`/port/gallery`}><h1>Gallery</h1></Link>
                <Link href={`/port/contect`}><h1>Contact</h1></Link>
             
            </div>
            <br />
            <div className="profile1">
                <div className="">
                    <h3 >Kitiyaporn Takham</h3>
                    <h5 >CMU student</h5>
                    <h5 >Faculty of Computer Engineering</h5>
                    <h5 >Telephone : 095-687xxxx</h5>
                </div>
                <img src="แมว.jpg" />
            </div>
            <br />
            <div>
                <table className="table">
                    <tr>
                        <td>
                            <h1>Profile</h1>
                        </td>
                        <td><p>Keep practicing and improving yourself. In order to keep up with the technology that keeps advancing</p></td>
                    </tr>

                    <tr>
                        <td>
                            <h1>Skills</h1>
                        </td>
                        <td>
                            <tr><p>Baby Developer</p></tr>
                            <tr><p>Project Maneger</p></tr>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <h1>Technical</h1>
                        </td>
                        <td>
                            <li>C++</li>
                            <li>Java</li>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <h1>Education</h1>
                        </td>
                        <td>
                            <tr>
                                <h1>High school : Yupparaj Wittayalai School - Chiang Mai</h1>
                            </tr>
                            <tr>
                                <h1>Master : Chiang Mai University - Chiang Mai</h1>
                            </tr>
                        </td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default Port
