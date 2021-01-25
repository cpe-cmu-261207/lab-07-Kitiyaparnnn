import Link from 'next/link'

const Gallery = () => {
    return (
        <>
            <div className="background">
                <div className="manu manu-bar">
                    <Link href={`/port`}><h3>Home</h3></Link>
                    <Link href={`/port/gallery`}><h3>Gallery</h3></Link>
                    <Link href={`/port/contect`}><h3>Contact</h3></Link>
                </div>
                <br />
                <div className="profile1">
                    <div className="">
                        <h3 >Kitiyaporn Takham</h3>
                        <h5 >CMU student</h5>
                        <h5 >Faculty of Computer Engineering</h5>
                        <h5 >Telephone : 095-687xxxx</h5>
                    </div>
                    <a href="https://www.facebook.com/parn.takhum/" ><img src="../แมว.jpg" class="rounded" /></a>
                </div>
                <br />
                <div className="manu background">
                    <div className="card">
                        <img src="../picture/IMG_0029.jpg"></img>
                        <p>Sky</p>
                    </div>
                    <div className="card">
                        <img src="../picture/IMG_0326.jpg"></img>
                        <p>Sky</p>
                    </div>
                    <div className="card">
                        <img src="../picture/IMG_3833.jpg"></img>
                        <p>Sky</p>
                    </div>
                    <div className="card">
                        <img src="../picture/IMG_4144.jpg"></img>
                        <p>Road</p>
                    </div>
                    <div className="card">
                        <img src="../picture/IMG_4130.jpg"></img>
                        <p>Road</p>
                    </div>
                    <div className="card">
                        <img src="../picture/IMG_6962.jpg"></img>
                        <p>Road</p>
                    </div>
                    <div className="card">
                        <img src="../picture/IMG_5388.jpg"></img>
                        <p>Fly</p>
                    </div>
                    <div className="card">
                        <img src="../picture/IMG_6023.jpg"></img>
                        <a href="https://www.youtube.com/watch?v=7QkTtnjyVJM">
                            <p>and Happy New Year</p>
                        </a>
                    </div>
                    <div className="card">
                        <img src="../picture/IMG_5388.jpg"></img>
                        <p>Fly</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Gallery
