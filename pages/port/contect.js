import Link from 'next/link'

const Contect = () => {
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
                <img src="../แมว.jpg" />
            </div>
            <br />
            <div>
                
            </div>
        </>
    )
}

export default Contect
