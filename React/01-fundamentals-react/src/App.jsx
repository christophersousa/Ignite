import { Post } from "./components/Post"
import { Header } from "./components/Header"
import style from "./App.module.css"
import './global.css'
import { Sidebar } from "./components/Sidebar"
function App() {
  return (
    <>
      <Header/>
      <div className={style.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author="John"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dicta, dolorem a consequuntur praesentium, molestias distinctio tempore vero asperiores eveniet enim quisquam ad rerum quia. Sint fugiat quos quod consequuntur."
          />
          <Post 
            author="Maira"
            content="Novo post"
          />
        </main>
      </div>
    </>
  )
}

export default App
