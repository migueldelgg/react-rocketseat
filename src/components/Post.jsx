import styles from './Post.module.css'
import { Comment } from './Comment';
import { Avatar } from './Avatar';

export function Post({ name }) {
    return (
        <article className={styles.post}>

            <header>
                <div className={styles.author}>

                    <Avatar 
                    src="https://github.com/migueldelgg.png"
                    />

                    <div className={styles.authorInfo}>
                        <strong>{name}</strong>
                        <span>Web Developer</span>
                    </div>

                </div>

                <time title="13 de Agosto às 16:37" 
                dateTime="2024-08-13 16:37:00">
                    Publicado há 1h
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. 
                    É um projeto que fiz no NLW Return, evento da Rocketseat. 
                    O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href="">jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>{' '}
                    <a href="">#nlw</a>{' '}
                    <a href="">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback:</strong>

                <textarea
                    placeholder='Escreva um comentário...'
                />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    );
}
