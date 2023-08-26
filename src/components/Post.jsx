import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import { Comment } from './Comment';
import { Avatar } from './Avatar';

import styles from './Post.module.css'
 
export const Post = ({author, publishedAt, content}) => {

    // date published
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBr
    });

    // amarzenar a data da publ do post relativa a agora
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true,
    })

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder={true} src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(line =>{                       // publications
                    if(line.type === 'paragraph'){
                        return <p>{line.content}</p>
                    }else if(line.type === 'link'){
                        return <p> <a href="#">{line.content}</a></p>
                    }
                })}
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

