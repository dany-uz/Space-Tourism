import styles from "./Home.module.css"
import { NavLink } from "react-router"

export default function Home() {
  return (
    <main id={styles.homeMain}>
      <div className={styles.content + " text-center"}>
        <h2 className="text-preset-5 blue-300 uppercase">So, you want to travel to</h2>
        <h1 className="text-preset-1 uppercase">Space</h1>
        <p className="text-preset-9 blue-300">
          Let's face it; if you want to go to space, you might as well genuinely go to
          outer space and not hover kind of on the edge of it. Well sit back, and relax
          because we'll give you a truly out of this world experience!
        </p>
      </div>

      <div className={styles.homeExplore}>
        <NavLink to="/destination" className='text-preset-4 blue-900 text-center uppercase'>Explore</NavLink>
      </div>
    </main>
  )
}
