import styles from "./Pagination.module.css"

export default function Pagination({ elements, dataActive, callback }) {
    return (
        <ul className={styles.paginationList}>
            {elements.map((element, index) => (
                <li
                    key={index}
                    className={`${styles.paginationItem} ${(dataActive === element.name ? styles.active : "")}`}
                    onClick={() => callback(element)}>
                </li>
            ))}
        </ul>
    )
}
