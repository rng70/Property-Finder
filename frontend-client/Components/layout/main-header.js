import Link from 'next/link';

import classes from './main-header.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link to='/'>Property FInder</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link to='/'>Browse All Properties</Link>
            {/* <Link to='/signin'>Sign In</Link>
            <Link to='/singup'>Sign Up</Link> */}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
