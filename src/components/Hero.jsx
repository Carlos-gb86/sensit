import styles from '../style';
import HeroButton from './HeroButton';
import { hero } from '../assets';

const Hero = () => {
  return (
    <section id="hero" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col sm:px-16 px-6`}>
       

        <div className="flex flex-row items-center w-full">
          <h1 className="flex-none font-poppins font-semibold ss:text-[72px] text-[52px] mr-12 text-white ss:leading-[100.8px] leading-[75px]">
            Driving <br className="block" />{" "}
            <span className="text-gradient">Digitalization</span>{" "}
          </h1>
          <div className="ss:flex hidden mr-4">
            <HeroButton />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          in Construction.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We leverage state-of-the-art sensor technology combined with machine 
          learning algorithms and advanced visualization tools to deliver decision-making
          support tools for engineers and infrastructure owners.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={hero} alt="hero_image" className=" mr-24 w-[80%] md:w-[100%] h-auto relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <HeroButton />
      </div>
    </section>
  )
}

export default Hero