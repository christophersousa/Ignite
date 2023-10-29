import style from './Header.module.css';
import logoIgnite from '../assets/logo-ignite.svg';
export function Header(){
  return(
    <header className={style.header}>
      <img src={logoIgnite} alt="logo" />
    </header>
  )
}