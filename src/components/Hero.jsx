import { motion } from 'framer-motion';
import { styles } from '../style';
import { ComputersCanvas } from './canvas';
import { useMediaQuery } from "react-responsive";

const Hero = () => {
    
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  return (
    <section className="relative w-full h-screen mx-auto">
      <div div className={`${styles.paddingX} absolute inset-0  top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div className="flex flex-col justify-center item-center  mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 ml-2 violet-gradient h-40 sm:h-80" />
        </div>

        <div >
          <h1 className={`${styles.heroHeadText} text-white `}>Hi,I'am <span className="text-[#915eff]">Rakesh reddy</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3d visuals, user
            <br className='sm:block hidden' />
            interface and Web application
          </p>
       
        </div>
      </div>

      {isLargeScreen && <ComputersCanvas />}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="W-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full mb-1 bg-secondary"
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero