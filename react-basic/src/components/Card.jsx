import styles from "./Card.module.css"

function Card (props) {
    return(
        <div className={styles.template}>
            <h3>{props.name}</h3>
            <p><strong>역활: </strong>{props.role}</p>
            <p><strong>소개: </strong>{props.introduction}</p>
        </div>
    )
}

export default Card