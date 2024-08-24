import { Avatar } from './Avatar';
import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="" alt=""
            />

            <div className={styles.profile}>
                <Avatar 
                src="https://github.com/migueldelgg.png"
                />

                <strong>Miguel Delgado</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="https://github.com/migueldelgg">
                    <PencilLine size={20}/>
                    Editar perfil
                </a>
            </footer>
        </aside>
    );
}
