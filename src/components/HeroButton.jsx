import styles from "../style";
import { arrowUp } from "../assets";
import '../index.css';

const HeroButton = () => {
  return (
    <div className={`${styles.flexCenter} 
    w-[140px] h-[140px] rounded-full 
    bg-blue-gradient p-[4px] cursor-pointer 
    transition-transform duration-200 ease-in-out 
    transform hover:scale-110 hover:shadow-[15px_15px_35px_rgba(255,255,255,0.5)]`}
    >
        <a  href={"https://sensit-portal.azurewebsites.net/"}
            className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
        <div className={`${styles.flexStart} flex-row`}>
            <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Web</span>
            </p>
            <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
        </div>
        
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Portal</span>
        </p>
        </a>
    </div>
  )
}

export default HeroButton