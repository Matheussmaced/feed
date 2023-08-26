import { ThumbsUp, Trash } from 'phosphor-react'

import styles from './Comment.module.css'
import { Avatar } from './Avatar'

export const Comment = ({photo, nameUser, content}) => {
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={photo}/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{nameUser}</strong>
                            <time title='24 de Agosto as 20:07:30' dateTime='2023-08-24 20:07:30'>Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
