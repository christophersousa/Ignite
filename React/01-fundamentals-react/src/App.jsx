import { Post } from "./Post"
import { Header } from "./components/Header"
import './global.css'
function App() {
  return (
    <>
      <Header/>
      <Post 
        author="John"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dicta, dolorem a consequuntur praesentium, molestias distinctio tempore vero asperiores eveniet enim quisquam ad rerum quia. Sint fugiat quos quod consequuntur."
      />
      <Post 
      author="Maira"
      content="Novo post"
    />
    </>
  )
}

export default App
