import Link from 'next/link'

const Port = () => {
    return (
        <>
        <div className="background">
            <div className="manu manu-bar">
                <Link href={`/port`}><h3>Home</h3></Link>
                <Link href={`/port/gallery`}><h3>Gallery</h3></Link>
                <Link href={`/port/contect`}><h3>Contact</h3></Link>
            </div>
            <Link href={'./'}>
            <button className="button-post button-postid" style={{backgroundColor:"#f44336"}}>Go back</button>
          </Link>
            <br />
            <div className="profile1">
                <div className="">
                    <h3 >Kitiyaporn Takham</h3>
                    <h5 >CMU student</h5>
                    <h5 >Faculty of Computer Engineering</h5>
                    <h5 >Telephone : 095-687xxxx</h5>
                </div>
                <a href="https://www.facebook.com/parn.takhum/" ><img src="แมว.jpg" class="rounded" /></a> 
            </div>
            <br />
            <div>
                <table className="table">
                    <tr>
                        <td>
                            <h3 className="text-header">Profile</h3>
                        </td>
                        <td className="table-position"><p>Keep practicing and improving yourself. In order to keep up with the technology that keeps advancing</p></td>
                    </tr>

                    <tr>
                        <td>
                            <h3 className="text-header">Skills</h3>
                        </td>
                        <td>
                            <tr><p>Baby Developer</p></tr>
                            <tr><p>Project Maneger</p></tr>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <h3 className="text-header">Technical</h3>
                        </td>
                        <td className="table-position">
                            <li>C++</li>
                            <li>Java</li>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <h3 className="text-header">Education</h3>
                        </td>
                        <td className="table-position">
                            <tr>
                                <p>High school : Yupparaj Wittayalai School - Chiang Mai</p>
                            </tr>
                            <tr>
                                <p>Master : Chiang Mai University - Chiang Mai</p>
                            </tr>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
            
        </>
    )
}

export default Port
