import React from "react";
import {Tilt} from "react-tilt";
import {motion}  from "framer-motion";
import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { staggerContainer } from "../utils/motion";



const ServiceCard = ( {index,title,icon }) => {
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
       variants={fadeIn('right','spring',0.5*index,0.75)}
       className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div options={{
          max : 45,
          scale : 1,
          speed : 450
        }}  
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly flex-col items-center" 
        >
          <img src={icon} alt={title} 
          className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>

      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.section
    variants={staggerContainer()}
    initial='hidden'
    whileInView='show'
    viewport={{ once: true , amount:0.25}}
    className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
     <span className="hash-span" id={"about"}>&nbsp;</span>
     
  
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} xl:text-[25px]`}>Indroduction</p>
      <h2 className={styles.sectionHeadText}>Overview</h2>
    </motion.div>

    <motion.p variants={fadeIn(" "," ",0.1,1)}
    className="mt-4 xl:text-[30px] xl:leading-[35px] border-red-600  text-secondary text-[17px] max-w-3xl leading-[30px]"
    >
      I have a strong foundation in web development, backed by a  MCA in Computer Application from SRM Institute of Science and Technology, Where i've maintained a CGPA of <span className="text-red-500">9.01</span> / 10.0 %
    </motion.p>

    <div className="mt-28 flex flex-wrap gap-10">
      { services.map( (service,index) => (
        <ServiceCard key={service.title} index={index} {...service} />
      ))}
      </div>
        </motion.section>
    </>
  )
}


export default About;