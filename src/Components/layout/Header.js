import { Link, NavLink } from 'react-router-dom'
import { ReactComponent as Icon } from '../../assets/logo.svg'

import AuthButton from '../../Pages/auth/components/AuthButton'
import styles from './header.module.css'

export default function Header() {
  return (
    <header>
      <div className={styles.container}>
        <div>
          <Link to="/">
            <Icon width={32} height={32} />
          </Link>
        </div>
        <nav className={styles.navbar}>
          <div className={styles.nav_item}>
            <NavLink to="/adverts/new">New Advert</NavLink>
          </div>
          <div className={styles.nav_item}>
            <NavLink to="/adverts" end>
              Latest adverts
            </NavLink>
          </div>
        </nav>
        <AuthButton className="auth-button"></AuthButton>
      </div>
    </header>
  )
}
