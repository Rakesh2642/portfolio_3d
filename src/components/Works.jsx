import {github} from "../assets";
import {projects} from "../constants";
import { styles } from "../style";
import {textVariant, fadeIn, staggerContainer } from "../utils/motion" 
import {motion} from 'framer-motion';
import {Tilt} from "react-tilt";
 

const ProjectCard = ({index,name, description,tags,image,source_code_link}) =>{
  return(
    <motion.div variants={fadeIn('up',"string", index * 0.5,0.75)}>
      <Tilt
       options={{
        max: 45,
        scale : 1,
        speed :450
       }}
       className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative h-[230px] w-full"> 
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
        </div>

        <div className="absolute inset-0 flex justify-end m-3 card_img_hover">
          <div 
           onClick={ () => window.open(source_code_link,'_blank')}
           className="black-gradient w-10 h-10 rounded-full justify-center flex items-center cursor-pointer"
          >
           <img src={github} alt={"github"} className="w-1/2 h-1/2 object-contain" />
          </div>
        </div>

        <div className="mt-15">
           <h3 className="text-white font-bold text-[24px] mt-2">{name}</h3>
           <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map( (tags) => (
            <p key={tags.name} className={`text-[14px] ${tags.color}`}>
              #{tags.name}
            </p>
          ))

          }
        </div>

      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <motion.section
    variants={staggerContainer()}
    initial='hidden'
    whileInView='show'
    viewport={{ once: true , amount : 0.25}}
    className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
     <span className="hash-span" id={"work"}>&nbsp;</span>  
    
    <motion.div variants={textVariant()} >
     <p className={styles.sectionSubText}>  my work </p>
     <h2 className={styles.sectionHeadText}> Projects </h2>
    </motion.div>

    <div className="w-full flex">
      <motion.p
       variants={fadeIn("","",0.1,1)}
       className=" mt-3 text-secondary text-[17px] max-w-7xl leading-[30px]"
      >
        
Dabbling in diverse languages and frameworks constantly enriches my skills. Each encounter yields valuable lessons, fostering adaptability and problem-solving prowess. Embracing variety fuels continuous growth in software development expertise.
      </motion.p>
    </div>

    <div className="mt-20 gap-7 flex flex-wrap">
      {
        projects.map((project, index) => (
         <ProjectCard
          key={`project-${index}`}
          index={index}
          {...project}
         />
        ))
      }
    </div>

    </motion.section>
  )
}

export default Works