// JSX = Javascript + XML(HTML)

import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import './global.css'
import styles from './App.module.css'

export function App() {
  const name = 'Miguel Santos Delgado'

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post name={name} />
        </main>
      </div>
    </div>
  )
}
