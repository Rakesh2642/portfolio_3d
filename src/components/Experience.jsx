import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import {motion} from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../style";
import { experiences } from "../constants";
import { textVariant} from "../utils/motion";
import { staggerContainer } from "../utils/motion";


const ExperienceCard = ({experience}) => (
  <VerticalTimelineElement
   contentStyle={{background:'#1d1836', color:'#fff'}}
   contentArrowStyle={{borderRight :'7px solid #232631'}}
   date={experience.date}
   iconStyle={{background : experience.iconBg}}
   icon ={
    <div className="flex w-full h-full justify-center items-center">
      <img src={experience.icon} alt={experience.company_name} className=" w-[60%] h-[60%] object-contain" />
    </div>
   }
  >
    <div>
      <h3 className="text-white text-[25px] font-bold">{experience.title} </h3>
      <p className="text-secondary font-semibold text-[16px] " style={{margin:0}}>{experience.company_name}</p>
    </div>

    <ul className="mt-5 ml-5 list-disc space-y-2">
        { experience.points.map( (point,index) => (
          <li
           key={`experience-point-${index}`}
          className="pl-1 text-white-100 text-[14px]">
            {point}
          </li>
        ))}
    </ul>
    
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
     <motion.section
    variants={staggerContainer()}
    initial='hidden'
    whileInView='show'
    viewport={{ once: true , amount:0.25}}
    className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    > 
     <span className="hash-span" id={"experience"}>&nbsp;</span> 

      <motion.div variants={textVariant()}  >
       <p className={`${styles.sectionSubText} xl:text-[25px]`}>What i have done so far </p>
       <h2 className={styles.sectionHeadText}>Certification <span className="text-blue-400 ">&</span> Work Experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {
            experiences.map( (experience,index) => (
              <ExperienceCard key={index} experience={experience} />
            ))
          }
        </VerticalTimeline>
      </div>

    </motion.section>
    </>
  )
}

export default Experience