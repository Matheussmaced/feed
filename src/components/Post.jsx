import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import { Comment } from './Comment';
import { Avatar } from './Avatar';

import styles from './Post.module.css'
import { useState } from 'react';
 
export const Post = ({author, publishedAt, content}) => {
    const [comments, setComments] = useState([
        'Post muito bacana, hein!'
    ])

    const [newCommentText, setNewCommentText] = useState('');

    // date published
    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBr
    });

    // amarzenar a data da publ do post relativa a agora
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true,
    })

    const handleCreateNewComment = () => {
        event.preventDefault()
        setComments([...comments, newCommentText]) // pego meu array e concateno
        setNewCommentText('');
    }

    const handleNewCommentChange = () =>{
        setNewCommentText(event.target.value);
    }

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

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea
                name = 'comment'
                placeholder='Deixe um comentário'
                value={newCommentText}
                onChange={handleNewCommentChange}
                />

                <footer>
                    <button  type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comments=>{
                    return(
                            <Comment photo = 'https://github.com/Matheussmaced.png'
                            nameUser = {author.name}
                            content = {comments}
                            />
                    )
                })}
            </div>
        </article>
    )
}

