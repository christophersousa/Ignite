import style from './Post.module.css'
export function Post(props){
  return(
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <img className={style.avatar} src="https://github.com/christophersousa.png"/>
          <div className={style.authorInfo}>
            <strong>Christopher</strong>
            <span>Develop</span>
          </div>
        </div>

        <time title='11 de Maio às 08:13' dateTime='2022-05-11 08:13:56'>publicado há uma 1 hora</time>
      </header>
      <div className={style.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p><a href='#'>👉 {' '} jane.design/doctorcare</a></p>

        <p>
          <a href='#'>#novoprojeto </a>{' '}
          <a href='#'>#nlw </a>{' '}
          <a href='#'>#rocketseat</a>
        </p>
      </div>
    </article>
  )
}