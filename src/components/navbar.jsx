import React from 'react';
import styles from '@/styles/navbar.module.scss';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/housePage">House</Link>
        </li>
        <li>
          <Link href="/location">Location</Link>
        </li>
        <li>
          <Link href="/about-us">Pagina About</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;