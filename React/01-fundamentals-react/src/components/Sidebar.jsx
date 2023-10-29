import style from './Sidebar.module.css'
export function Sidebar(){
  return (
    <aside className={style.siderbar}>
      <img 
        className={style.cover}
        src="https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&q=50&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" 
      />
      <div className={style.profile}>
          <strong>Christopher</strong>
          <span>Develop</span>
      </div>
      <footer>
          <a href="#">
            Edite seu perfil
          </a>
      </footer>
    </aside>
  )
}