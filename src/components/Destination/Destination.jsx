import { useState } from 'react'
import styles from "./Destination.module.css"

export default function Destination({ deviceSize, destinations }) {
  const [destination, setDestination] = useState(destinations[0]);
  const [activeDestination, setActiveDestination] = useState("Moon");

  const changeDestination = (destination) => {
    setDestination(destinations.find(d => d.name === destination));
    setActiveDestination(destination);
  }

  return (
    <main id={styles.destinationMain}>

      <div className={styles.destinationHeader}>
        <h2 className={styles.destinationTitle + " text-preset-5 uppercase barlow-condensed"}><span className='bold'>01</span>Pick your destination</h2>

        <img src={destination.images.webp} alt="Destination" className={styles.destinationImage} width={deviceSize === "mobile" ? "150" : "auto"} />
      </div>

      <div className={styles.destinationContent + " text-center"}>
        <ul id={styles.destinations}>
          {destinations.map((destination, index) => (
            <li
              key={index}
              className={(activeDestination === destination.name ? styles.active : "") + " text-preset-8 blue-300 uppercase"}
              onClick={() => changeDestination(destination.name)}>
              {destination.name}
            </li>
          ))}
        </ul>

        <h1 className={styles.destinationName + " text-preset-2 uppercase"}>{destination.name}</h1>

        <p className='text-preset-9 blue-300'>{destination.description}</p>

        <hr />

        <div className={styles.destinationStats}>
          <div>
            <h3 className='text-preset-7 blue-300 uppercase'>Avg. Distance</h3>
            <p className='text-preset-6 uppercase'>{destination.distance}</p>
          </div>
          <div>
            <h3 className='text-preset-7 blue-300 uppercase'>Est. Travel Time</h3>
            <p className='text-preset-6 uppercase'>{destination.travel}</p>
          </div>
        </div>
      </div>

    </main>
  )
}
