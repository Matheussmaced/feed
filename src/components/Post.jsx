import { Comment } from './Comment';
import { Avatar } from './Avatar';

import styles from './post.module.css'
 
export const Post = ({photo, name}) => {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder={true} src={photo} />
                    <div className={styles.authorInfo}>
                        <strong>{name}</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='24 de Agosto as 20:07:30' dateTime='2023-08-24 20:07:30'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉 <a href="#">jane.design/doctorcare </a></p>

                <p><a href="#"> #novoprojeto</a>{' '}
                <a href="#">#nlw</a>{' '}
                <a href="#">#rocketseat </a></p>{' '}
                
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment photo={'https://github.com/MaykBrito.png'} nameUser='Mayk Brito'/>
                <Comment photo={'https://github.com/vwvictor.png'} nameUser='Victor'/>
                <Comment photo={'https://github.com/Matheussmaced.png'} nameUser='Matheus Macedo'/>
            </div>
        </article>
    )
}

