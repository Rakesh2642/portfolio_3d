import { BallCanvas } from "./canvas"
import { technologies, sm_tech } from "../constants"
import { staggerContainer } from "../utils/motion"
import {motion} from 'framer-motion';
import { styles } from '../style';
import {useMediaQuery} from "react-responsive";

const Tech = () => {
  const isLargeScreen = useMediaQuery({ query: '(min-width: 1024px)' });
  const isSmallScreen = useMediaQuery({ query: '(max-width: 425px)' });
  return (
    <motion.section
    variants={staggerContainer()}
    initial='hidden'
    whileInView='show'
    viewport={{ once: true , amount : 0.25}}
    className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
     <span className="hash-span" id={"tech"}>&nbsp;</span>  

    { isLargeScreen &&
    <div className="flex flex-row flex-wrap justify-center gap-10">
      { technologies.map( (technology) => (
         <div className="w-28 h-28" key={technology.name}>
           <BallCanvas icon={technology.icon} />
         </div>
      ))}
    </div>
   }
    { isSmallScreen &&
    <div className="flex flex-row flex-wrap justify-center gap-10">
      { sm_tech.map( (technology) => (
         <div className="w-28 h-28" key={technology.name}>
           <BallCanvas icon={technology.icon} />
         </div>
      ))}
    </div>
   }
    </motion.section>
  )
}

export default Tech