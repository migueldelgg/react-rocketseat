import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/150628051?v=4" />
                    <div className={styles.authorInfo}>
                        <strong>Miguel Santos Delgado</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='13 de Agosto às 16:37' dateTime='2024-08-13 16:37:00'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href="">jane.design/doctorcare</a></p>
                <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    );
}
