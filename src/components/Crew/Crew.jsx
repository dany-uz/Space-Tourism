import { useState } from "react";
import styles from "./Crew.module.css"
import Pagination from "#components/Pagination/Pagination.jsx";

export default function Crew({ crews }) {
  const [crew, setCrew] = useState(crews[0]);
  const [activeCrew, setActiveCrew] = useState(crew.name);

  const changeCrew = (crew) => {
    setCrew(crews.find(c => c.name === crew.name));
    setActiveCrew(crew.name);
  }

  return (
    <main id={styles.crewMain}>
      <div className={styles.content}>
        <div className={styles.pageTitle}>
          <p className={styles.crewTitle + " text-preset-5 uppercase barlow-condensed"}><span className='bold'>02</span> Meet your crew</p>
        </div>

        <section className={styles.crewContent}>
          <div className={styles.explanationContainer}>
            <div className={styles.crewExplanation}>
              <div className={styles.explanation}>
                <div className={styles.crewRankAndName}>
                  <h2 className="text-preset-4 uppercase">{crew.role}</h2>
                  <h1 className="text-preset-3 uppercase">{crew.name}</h1>
                </div>
                <p className={`${styles.crewDescription} text-preset-9 blue-300`}>{crew.bio}</p>
              </div>
            </div>
            <div className={styles.crewPagination}>
              <Pagination elements={crews} dataActive={activeCrew} callback={changeCrew} />
            </div>
          </div>

          <div className={styles.crewImage}>
            <img src={crew.images.webp} alt={crew.name} className={styles.crewImage} height={300} />
          </div>
        </section>
      </div >
    </main >
  )
}
