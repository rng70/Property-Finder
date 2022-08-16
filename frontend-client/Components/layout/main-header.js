import Link from 'next/link';

import classes from '../../styles/MainHeader.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href='/'>Property FInder</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href='/'>Browse All Properties</Link>
            {/* <Link href='/signin'>Sign In</Link>
            <Link href='/singup'>Sign Up</Link> */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
