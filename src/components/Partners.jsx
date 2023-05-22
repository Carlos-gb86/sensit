import { partners } from "../constants";
import styles from "../style";

const Partners = () => {
  return (
    <section className={`bg-gray-200`}>
        <h2 className="font-poppins font-semibold mx-auto pt-6 text-center text-[26px] sm:text-[40px]">SensIT - Partners</h2>
        <hr className="h-1 w-[120px] mx-auto my-6 bg-gray-200 border-0 dark:bg-gray-700"/>
        <div className={`${styles.flexCenter} flex-wrap w-full md:w-[80%] mx-auto`}>
        {partners.map((partner) => (
            <a href={partner.link} key={partner.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[102px] m-5 transform transition duration-500 hover:scale-110`}>
            <img src={partner.logo} alt="client_logo" className="sm:w-[192px] object-contain" />
            </a>
        ))}
        </div>
  </section>
  )
}

export default Partners