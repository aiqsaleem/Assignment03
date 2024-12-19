export default function Home() {
    return(
        <div className="font-Roboto p-[120px] m-0 flex bg-white">

        {/* Left Section     */}
        <div className="border-2 flex border-black border-solid rounded-[10px]">
        <div className="p-[50px] text-lg text-white bg-[#8b055f]">
            <img className="h-[180px] w-[180px] border-2 border-solid border-white rounded-[90px]" src="profile picture.jpg" alt="photo" />

        <section>
          <h2 className="text-center pt-[30px] text-[1.5em] font-bold">Contact</h2>
          <p><b>Phone</b><br />+923478396751</p>
          <p>
            <b>Email</b><br /><a className="hover:text-blue-800" href="mailto:muhammadfaiq780@gmail.com">
              muhammadfaiq780@gmail.com</a>
          </p>
          <p>
            <b>Address</b><br />House no 306,Gulshan-e-Muhammadi,Area
            35/A,Korangi no 3,Karachi
          </p>
        </section>

        <section>
          <h2 className="text-center pt-[30px] text-[1.5em] font-bold">Skills</h2>
          <ul className="list-disc text-justify">
            <li>Html</li>
            <li>Css</li>
            <li>Javascript</li>
            <li>Typescript</li>
          </ul>
        </section>
        
       <section>
          <h2 className="text-center pt-[30px] text-[1.5em] font-bold">Certifications</h2>
          <p>
            Artifical Intelligence,Web 3.0 & Metaverse <br />
            From Governor House Karachi (Ongoing)
          </p>
        </section>
        </div>

        {/* Right Section  */}

        <div className="text-center">
        <h1 className="text-[50px] font-bold text-[#980366]">Muhammad Faiq</h1>
        <section className="text-lg p-[50px]">
          <h2 className="text-center pt-[30px] text-[1.5em] font-bold text-[#c00682]">Profile</h2>
          <p className="text-justify">
            I am a passionate and enthusiastic web developer with a strong
            foundation in front-end technologies such as HTML, CSS, JavaScript,
            and TypeScript. As a detail-oriented individual, I enjoy creating
            user-friendly, responsive, and visually appealing web interfaces. I
            am eager to apply my skills to real-world projects, learn new
            technologies, and grow as a developer. My goal is to contribute to
            innovative solutions while continuously enhancing my technical
            expertise and problem-solving abilities.
          </p>
        </section>

        <section className="text-lg">
            <h2 className="text-center pt-[30px] text-[1.5em] font-bold text-[#c00682]">Education</h2>
            <p>
                <b>The Educator Zaman Town Campus</b><br />
                <i>2021-2022</i><br />
                Matriculation
            </p>
            <p>
                <b>Govt.Science College Gulshan-e-Iqbal Block 7</b><br />
                <i>2022-2024</i><br />
                Intermediate
            </p>
        </section>

        <section className="text-lg">
            <h2 className="text-center pt-[30px] text-[1.5em] font-bold text-[#c00682]">Experience</h2>
            <p>Seeking an opportunity as a fresh candidate to start my
                professional career.
            </p>
        </section>
        </div>
        </div>
        </div>
    )
}