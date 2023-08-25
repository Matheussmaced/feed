import styles from './Sidebar.module.css'

import backgroundSidebar from '../assets/background-sidebar.svg'
import {PencilLine} from 'phosphor-react'

import { Avatar } from './Avatar'

export const Sidebar = () => {
    return(
        <>
            <aside className={styles.sidebar}>
                <img className={styles.background} src={backgroundSidebar}/>

                <div className={styles.profile}>
                    <Avatar src='https://github.com/Matheussmaced.png'/>

                    <strong>Matheus Gregorio</strong>
                    <span>Web Developer</span>
                </div>

                <footer>
                    <a href="#">
                        <PencilLine size={20} />
                        Editar seu perfil
                    </a>
                </footer>
            </aside>
        </>
    )
}