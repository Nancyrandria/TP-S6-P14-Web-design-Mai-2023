import Article from "./Article";
import { useState, useEffect } from 'react';
import axios from "axios";
import styles from "../style";
import { robot } from "../assets";

const CardDeal = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      let res = await axios.get(`https://intelligence-artificielle-api.up.railway.app/actualite/listeactu`);
      let newArticles = await res.data.filter(result => (result.status != 0));
      let threeArticles = newArticles.slice(0, 3);
      setArticles(threeArticles);
    };
    getArticles();
  }, []);
  return (
    <>
      <div id="actualites" className="w-full flex text-center items-center md:flex-row flex-col relative z-[1] mb-6">
        <h2 className={styles.heading2}>
          Actualités
        </h2>
      </div>
      <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gridGap: "15px" }} >
        {articles.map((article, idxArticle) => <Article key={article.idactualite} imgUrl={robot} titre={article.titre} description={article.description} application={article?.application?.application} />)}
      </section >
    </>
  )
};

export default CardDeal;
