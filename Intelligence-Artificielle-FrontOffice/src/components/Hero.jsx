import styles from "../style";
import { robot } from "../assets";

const Hero = () => {
  return (
    <section id="apropos" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col px-6`}>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Intelligence <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Artificielle</span>{" "}
          </h1>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          C'est quoi ?
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Technologie informatique qui permet aux machines de traiter et d'analyser des données en utilisant des algorithmes complexes pour simuler certaines fonctions de l'intelligence humaine, comme la reconnaissance de la parole ou des images, l'apprentissage, la prise de décision et la résolution de problèmes.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} className="w-[100%] h-[100%] relative z-[5]" alt="main-robotique" />
      </div>

    </section>
  );
};

export default Hero;
