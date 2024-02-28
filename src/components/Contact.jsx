import { useState, useRef } from "react";
import {motion} from "framer-motion";
import emailjs from '@emailjs/browser';
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { staggerContainer } from '../utils/motion';

//fws1Km_5qEdo75MxX
// template_j4ubmk9
// service_xjsiu8a

const Contact = () => {
  
  const formRef = useRef();
  const [form,setForm] = useState({
    name:'',
    email:'',
    message: '',
  });
  const [loading,setLoading] = useState(false);

  const handleChange = (e) => {
    const {name,value}= e.target;
    setForm({ ...form,[name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_xjsiu8a',
      'template_j4ubmk9',
      {
        from_name: from.name,
        to_name:"Rakesh",
        from_email: from.email,
        to_email:'rakeshreddy2642@gmail.com',
        message: from.message
      },
      "fws1Km_5qEdo75MxX"
      )
      .then(() => {
        setLoading(false);
        alert('Thank You, I will get back to you soon as possible');

        setForm({
          name:'',
          email:'',
          message:'',
        },(error) => {
          setLoading(false)
          console.log(error)
          alert("Something went wrong")
        })
      })
  }

  return (
    <motion.section
    variants={staggerContainer()}
    initial='hidden'
    whileInView='show'
    viewport={{ once: true , amount:0.25}}
    className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
       <span className="hash-span" id={"contact"}>&nbsp;</span>
       <div className="xl:mt-12 xl:flex-row flex flex-col-reverse gap-10 overflow-hidden ">
          <motion.div
           variants={slideIn('left','tween', 0.2,1)}
           className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
          >
            <p className={styles.sectionSubText}> Get in touch</p>
            <h3 className={styles.heroHeadText}> contact</h3>


            <form
           ref={formRef}
           onSubmit={handleSubmit}
           className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col"> 
             <span className="mb-4 text-white font-medium ">Your Name</span>
             <input 
               type="text" 
               name="name"
               value={form.name}
               onChange={handleChange}
               placeholder="What's Your name ?"
               className="py-4 px-6 bg-tertiary placeholder:text-secondary text-white rounded-lg outline-line font-medium border-none"  
            />
            </label>
            <label className="flex flex-col"> 
             <span className="mb-4 text-white font-medium ">Your Email</span>
             <input 
               type="email" 
               name="email"
               value={form.email}
               onChange={handleChange}
               placeholder="What's Your email ?"
               className="py-4 px-6 bg-tertiary placeholder:text-secondary text-white rounded-lg outline-line font-medium border-none"  
            />
            </label>
            <label className="flex flex-col"> 
             <span className="mb-4 text-white font-medium ">Your Message</span>
             <textarea
               rows='7' 
               type="text" 
               name="message"
               value={form.message}
               onChange={handleChange}
               placeholder="What's Your name ?"
               className="py-4 px-6 bg-tertiary placeholder:text-secondary text-white rounded-lg outline-line font-medium border-none"  
            />
            </label>

              <button className="bg-tertiary py-3 px-8 outline-none w-fit shadow-md text-white font-bold roundex-xl shadow-primary" type="submit">
                {loading ? 'Sending...' : 'Send'}
              </button>
          </form>
          </motion.div>

          <motion.div
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
          variants={slideIn('right','tween',0.2,1)}
          >
           <EarthCanvas />
          </motion.div>

          
       </div>

    </motion.section>
  )
}

export default Contact