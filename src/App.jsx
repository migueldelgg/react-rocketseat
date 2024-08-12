// JSX = Javascript + XML(HTML)

import { Post } from "./Post"
import { Header } from "./components/Header"

import './global.css'

export function App() {
  return (
    <div>
      <Header/>
      <Post author = "Miguel" content = "conteudo da pagina"/> 

      <Post author = "Gabriel" content = "Post do Gabriel"/> 
    </div>
  )
}
