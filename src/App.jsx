import './App.css'
import { MdArrowOutward, MdEmail } from "react-icons/md";
import { FaLinkedin, FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { SiFlask } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const App = () => {
  return (
    <div className='max-w-[1300px] pt-[50px]  min-h-9 mx-auto text-white'>
     
     {/* Added Background effect
      */}
      <div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">
        
        
        
        </div></div>
         <header className=''>
        
        <div className="heading-more ">
          <div className='flex flex-col lg:flex-row gap-2 px-3 lg:px-0 items-center lg:items-start text-center lg:text-start justify-between my-[18px] '>
            <h1 className='shadow-lg text-5xl md:text-5xl lg:text-6xl font-extrabold leading-snug text-center lg:text-start'>Hi, I'm<br></br>
    
    Arun Chandra👋</h1>

            {/* <ul className='list-none'>
              <li className='cursor-pointer hover:font-bold'>About</li>
              <li className='cursor-pointer hover:font-bold'>Education</li>
              <li className='cursor-pointer hover:font-bold'>Projects</li>
              <li className='cursor-pointer hover:font-bold'>Tech Stack</li>
              <li className='cursor-pointer hover:font-bold'>Connect</li>
            </ul> */}
              
          </div>

          <p className=' opacity-70 px-3 lg:px-0 items-center lg:items-start text-center lg:text-start'>I'm all about coding, tech, and turning ideas into reality. If it involves programming, I'm probably into it!</p>
          
        </div>

        </header>
        

        <main className='px-3 lg:px-0 items-center lg:items-start text-center lg:text-start'>

        <section>
        <h1 className='font-bold text-3xl mt-[65px]'>About</h1>
          <p className='leading-7 opacity-70'>
          I'm a passionate postgraduate student currently pursuing an MCA at Department of Computer Science, University of Delhi. I've got a strong background in Computer Science from my B.Sc. at Hansraj College, and I'm always looking to learn more and improve in this fast-changing tech world. Coding and solving problems have always been what I love to do, and I enjoy the challenge of turning difficult problems into simple solutions.
Lately, I've been learning React.js and getting into building interactive user interfaces. I've had a few late nights struggling with code and sometimes even making things more complicated—especially when I try my hand at designing UIs. But, that's all part of learning, right?
When I'm not coding or fixing bugs, I like to relax by cricket or badminton. These games help me unwind and take a break from all the screen time that comes with being into tech.
In short, I'm on a path of constant learning, eager to use my growing skills to solve real problems, drive new ideas, and maybe, just maybe, complete a project without any bugs!
          </p>
        </section>
        
        <section>
        <h1 className='font-bold text-3xl mt-[65px]'>Education</h1>
        <div className='card backdrop-blur-lg mt-[12px] p-6 shadow-lg min-h-20 w-full bg-white bg-opacity-5 rounded-xl'>
          <h1 className='opacity-90 text-xl font-semibold'>Master of Computer Applications</h1>
          <h2 className='font-normal text-sm opacity-70'>University of Delhi</h2>
          <h3 className='font-light text-sm opacity-70'>2024-Present</h3>
        </div>

        <div className='card backdrop-blur-lg mt-[12px] p-6 shadow-lg min-h-20 w-full bg-white bg-opacity-5 rounded-xl'>
          <h1 className='opacity-90 text-xl font-semibold'>B.Sc. (H) Computer Science</h1>
          <h2 className='font-normal text-sm opacity-70'>University of Delhi</h2>
          <h3 className='font-light text-sm opacity-70'>2021-2024</h3>
        </div>
        </section>

        <section>
        <h1 className='font-bold text-3xl mt-[65px]'>Projects</h1>

        <div className='card backdrop-blur-lg mt-[12px] p-6 shadow-lg min-h-20 w-full bg-white bg-opacity-5 rounded-xl'>
          <h1 className='opacity-90 text-xl font-semibold'>E-Commerce Site</h1>
          <h2 className='font-normal text-sm opacity-70'>This project is a full-stack eCommerce website that makes online shopping easy and secure. On the front end, it uses React.js to create a smooth and interactive user experience, while Tailwind CSS ensures a modern and clean look. For the back end, Flask handles everything behind the scenes, like user accounts and order management. Users can log in securely with session-based authentication. Stripe is integrated to process payments safely. </h2>
          <h3 className='my-2 font-light text-sm opacity-70 underline flex justify-center lg:justify-start' ><a href='#' className='flex items-center gap-0'>Link to Github<MdArrowOutward /></a></h3>
          <div className='flex flex-row gap-2 justify-center lg:justify-start'>

          <div className='font-medium mt-2 inline-block px-4 py-1 text-[10px] justify-center items-center rounded-full bg-gray-400 text-black'> React</div>
          <div className='font-medium mt-2 inline-block px-4 py-1 text-[10px] justify-center items-center rounded-full bg-gray-400 text-black'> HTML </div>
          <div className='font-medium mt-2 inline-block px-4 py-1 text-[10px] justify-center items-center rounded-full bg-gray-400 text-black'> CSS </div>
          <div className='font-medium mt-2 inline-block px-4 py-1 text-[10px] justify-center items-center rounded-full bg-gray-400 text-black'> Flask   </div>
          <div className='font-medium mt-2 inline-block px-4 py-1 text-[10px] justify-center items-center rounded-full bg-gray-400 text-black'> Stripe </div>
          </div>
          
        </div>

        <div className='card backdrop-blur-lg mt-[12px] p-6 shadow-lg min-h-20 w-full bg-white bg-opacity-5 rounded-xl'>
          <h1 className='opacity-90 text-xl font-semibold'>StuFac</h1>
          <h2 className='font-normal text-sm opacity-70'>A student and faculty communication portal for notices, resources, and queries.</h2>
          <h3 className='my-2 font-light text-sm opacity-70 underline  flex justify-center lg:justify-start' ><a href='#' className='flex items-center gap-0'>Link to Github<MdArrowOutward /></a></h3>
          <div className='flex flex-row gap-2 justify-center lg:justify-start'>

          <div className='font-medium mt-2 inline-block px-4 py-1 text-[10px] justify-center items-center rounded-full bg-gray-400 text-black'> HTML </div>
          <div className='font-medium mt-2 inline-block px-4 py-1 text-[10px] justify-center items-center rounded-full bg-gray-400 text-black'> CSS </div>
          <div className='font-medium mt-2 inline-block px-4 py-1 text-[10px] justify-center items-center rounded-full bg-gray-400 text-black'> Flask </div>
          </div>
          
        </div>


        </section>


        </main>

        <footer>

        <div className='two-section-footer flex flex-col gap-[65px] lg:flex-row justify-between  mt-[65px]'>

          <div className='techstack-connect'>

              <div className='tech-stack font-bold text-3xl flex-col gap-1 px-3 lg:px-0 items-center lg:items-start text-center lg:text-start'>Tech Stack
                <p className='opacity-70 mt-[12px] flex flex-row items-center gap-2 text-4xl justify-center lg:justify-start'>
                  
                <FaPython />                
                <IoLogoJavascript />
                <SiCplusplus />
                <FaReact />
                <SiFlask />
                <FaGitAlt />  
                <FaGithub />
</p>
              </div>
              <div className='connect mt-[65px] font-bold text-3xl lg: flex-col lg: gap-1 px-3 lg:px-0 items-center lg:items-start text-center lg:text-start'> Connect
              <p className='opacity-70 mt-[12px] flex flex-row items-center gap-3 text-3xl justify-center lg:justify-start'>
              <MdEmail />
              <FaGithub />
              <FaLinkedin />
  </p>
              </div>
                
          </div>

          <div className='message flex flex-col px-3 lg:px-0  sm:justify-center sm:items-center lg:justify-start lg:items-start  '>
              <label className='text-sm opacity-70' htmlFor="Name">Name</label>
              <input className='px-3 rounded-md bg-white bg-opacity-10 h-[52px] max-w-[526px] lg:w-[526px] my-2' type='text' name='Name'></input>
              <label className='text-sm opacity-70' htmlFor="Email">Email</label>
              <input className='px-3 rounded-md bg-white bg-opacity-10 h-[52px] max-w-[526px] lg:w-[526px] my-2' type='Email' name='Email'></input>
              <label className='text-sm opacity-70' htmlFor="Message">Message</label>
              <textarea className='px-3 rounded-md bg-white bg-opacity-10 h-[52px] max-w-[526px] lg:w-[526px] my-2' rows='10'  name="Message" ></textarea>
              <button className='px-3 py-2 rounded-md bg-white bg-opacity-90 text-black  my-2' type='submit'>Submit</button>
          </div>
        </div>

          <p className='text-sm text-center mb-[10px] mt-[50px]'>Designed with ❤️ using <strong>Figma</strong>. Built with <strong>React.js</strong> and <strong>Tailwind CSS</strong>. </p>
        </footer>

    </div>
 
  )
}

export default App