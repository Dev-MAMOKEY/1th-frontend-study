import styles from "./Card.module.css"


const Card = (({name, role, introduction}) => {
    return(
        <div className={styles.template}>
            <h3>{name}</h3>
            <p><strong>역활: </strong>{role}</p>
            <p><strong>소개: </strong>{introduction}</p>
        </div>
    )
})

export default Card