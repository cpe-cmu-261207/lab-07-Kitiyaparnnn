import Link from 'next/link'

const Contect = () => {
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
                    <div>
                        <h3 >Kitiyaporn Takham</h3>
                        <h5 >CMU student</h5>
                        <h5 >Faculty of Computer Engineering</h5>
                        <h5 >Telephone : 095-687xxxx</h5>
                    </div>
                    <a href="https://www.facebook.com/parn.takhum/" ><img src="../แมว.jpg" class="rounded" /></a>
                </div>
                <br></br>
                <div class="containerport setinput">
                    <p style={{textAlign: "center"}}>Please fill the information</p>
                        <div className="row">
                            <div className="col-25">
                                <label for="fname">First Name</label>
                            </div>
                            <div className="col-75">
                                <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="lname">Last Name</label>
                            </div>
                            <div className="col-75">
                                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="country">Country</label>
                            </div>
                            <div className="col-75">
                                <select id="country" name="country">
                                    <option value="australia">Australia</option>
                                    <option value="canada">Canada</option>
                                    <option value="usa">USA</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label for="subject">Subject</label>
                            </div>
                            <div className="col-75">
                                {/* <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea> */}
                                <input type="text" id="lname" name="lastname" placeholder="Write something.." />
                            </div>
                        </div>
                        <div className="row">
                            <button className="button-contact " type="submit" value="Submit">Submit</button>
                        </div>
                   
                </div>

            </div>
        </>
    )
}

export default Contect
