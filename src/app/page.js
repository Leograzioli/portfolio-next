import { BsBootstrapFill } from 'react-icons/bs'
import { SiHtml5, SiCss3, SiTailwindcss, SiMysql } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import { FaVuejs, FaReact, FaPhp, FaLaravel, FaSass } from 'react-icons/fa'
import SkillIcon from '@/components/SkillIcon'

export default function Home() {

  return (
    <>

      {/* about me section */}
      <section id='about' className="w-full h-[calc(100vh+100px)] relative ms-container">

        <div className="flex justify-center">
          <img className="absolute top-16 w-2/3 -z-10" src="/static/4.png" alt="" />
        </div>

        <div className="flex h-full justify-center items-center">
          <div className="w-2/3 sm:pt-28">

            <h2 className="text-2xl text-center font-semibold uppercase text-secondary/50 sm:text-secondary"> i am leonardo</h2>
            <p className="mt-8 leading-8 text-lg ">The passion for technology and video games has driven me to enter the world of web development and study to become a Web Developer. Now more than ever, I dedicate my time to studying new technologies and deepening my previous knowledge.</p>

            <div className="text-center mt-12 w-full sm:2/3 md:w-1/3 mx-auto border-b border-secondary pb-2">

              <a href="/static/leonardo-grazioli-CV.pdf" download={'Leonado Grazioli CV'}> Download CV</a>
            </div>
          </div>
        </div>

        <div className='absolute bg-white h-[200px] md:h-[300px] lg:h-[500px] mx-[8%] bottom-[-100px] md:bottom-[-200px] lg:bottom-[-400px] left-0 right-0'>

          <div className="flex justify-center ">

            <img className="w-full max-h-[500px] sm:w-2/3 z-10" src="/static/skills.png" alt="" />
          </div>
        </div>

      </section>

      {/* skills section */}
      <section id='skills' className="bg-white w-full h-[calc(100vh-196px)] flex flex-col justify-center pt-40 xl:pt-80 relative">

        <div className="ms-container">
          <div className="flex justify-center flex-wrap gap-6 text-4xl /sm:mt-8 pb-16">

            <SkillIcon title={'Html'}>
              <SiHtml5 className="text-[#e44d26] bg-white p-0.5 rounded" />
            </SkillIcon>

            <SkillIcon title={'Css'}>
              <SiCss3 className="text-[#264de4] bg-white p-0.5 rounded" />
            </SkillIcon>

            <SkillIcon title={'Bootstrap'}>
              <BsBootstrapFill className="text-[#673ab7] bg-white  p-0.5 rounded" />
            </SkillIcon>

            <SkillIcon title={'Sass'}>
              <FaSass className="text-[#cf649a] bg-white  p-0.5 rounded" />
            </SkillIcon>

            <SkillIcon title={'Tailwind'}>
              <SiTailwindcss className="text-[#38bdf8] bg-white p-0.5 rounded" />
            </SkillIcon>

            <SkillIcon title={'Javascript'}>
              <IoLogoJavascript className="text-black bg-[#f7df1e] p-1.5 rounded-md" />
            </SkillIcon>

            <SkillIcon title={'Vue.js'}>
              <FaVuejs className="text-[#41b883] bg-white pt-0.5 rounded" />
            </SkillIcon>

            <SkillIcon title={'React'}>
              <FaReact className="text-[#5ed3f3] bg-white p-0.5 rounded" />
            </SkillIcon>

            <SkillIcon title={'Php'}>
              <FaPhp className="text-[#4d588e] bg-white p-0.5 rounded" />
            </SkillIcon>

            <SkillIcon title={'Laravel'}>
              <FaLaravel className="text-[#f63424] bg-white p-0.5 rounded" />
            </SkillIcon>

            <SkillIcon title={'MySql'}>
              <SiMysql className="text-[#005e86] bg-white p-0.5 rounded" />
            </SkillIcon>
          </div>
        </div>

      </section>

      {/* section formation*/}
      <section id='formation' className='ms-container relative'>

        <div className="flex justify-center">
          <img className="absolute top-0 w-2/3 -z-10" src="/static/formation.png" alt="" />
        </div>

        <div className="pt-44 sm:pt-96 pb-16 min-h-[calc(100vh-96px)] space-y-8">
          <div className="">
            <h2 className="text-2xl font-semibold uppercase text-secondary/50 sm:text-secondary"> Boolean - <span className='text-sm'>FULL STACK WEB DEVELOPER TRAINEE</span></h2>
            <p className="mt-4 sm:leading-8 text-normal sm:text-lg">
              Experience of 700 hours, achieving the goal of developing the mindset of a complete programmer, developing problem-solving skills, breaking down complex problems into more manageable components, and analyzing requirements to create efficient solutions.
              Particular emphasis was placed on implementing processes inspired by well-known web apps (such as Netflix, WhatsApp Web, etc.) developed independently. The experience culminated in the collaborative creation of a website, inspired by a social media platform for doctors, working with incomplete briefs in order to fulfill the requests while also bringing forth creative and functional solutions and proposals.
            </p>
          </div>
          <div className="">
            <h2 className="text-2xl font-semibold uppercase text-secondary/50 sm:text-secondary"> the net ninja - <span className='text-sm'>REACT.JS - BUILD WEB APPS WITH REACT</span></h2>
            <p className="mt-4 sm:leading-8 text-normal sm:text-lg">
              Learn React from the ground up to make dynamic websites (includes Context, Hooks, Reducers, Routing, Auth, Databases)
            </p>
          </div>
        </div>
      </section>


    </>
  )
}
