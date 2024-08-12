// JSX = Javascript + XML(HTML)

import { Post } from "./Post"
import { Header } from "./components/Header"

import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post author="Miguel" content="conteudo da pagina" />

          <Post author="Gabriel" content="Post do Gabriel" />
        </main>
      </div>
    </div>
  )
}
