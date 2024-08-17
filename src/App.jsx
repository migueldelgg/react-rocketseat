// JSX = Javascript + XML(HTML)

import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import './global.css'
import styles from './App.module.css'

// author: {avatar_url "", name: "", role: "", }
// publishedAt: Date
// content: String  

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/migueldelgg.png",
      name: 'Miguel Santos',
      role: 'Back-end Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-08-16 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Lissone.png",
      name: 'Leonardo Lissone',
      role: 'Front-end Developer'
    },
    content: [
      { type: 'paragraph', content: 'Opa gente 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2024-08-17 19:18:00'),
  },
];

export function App() {

  // Iteração
  // Foreach nao retorna nada de dentro. Sempre usamos Map, pois ele tem retorno

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post
              key={post.id} // É uma boa prática adicionar uma key quando se está renderizando listas
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}
