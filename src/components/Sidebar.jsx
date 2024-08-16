import { Avatar } from './Avatar';
import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1722641277067-a7fba0ad1a59?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""
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
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}
