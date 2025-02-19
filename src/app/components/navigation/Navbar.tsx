import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
        <Link href={'/'}>Home</Link>
        <Link href={'/about'}>About</Link>
        <Link href={'/products'}>Product</Link>
        <Link href={'/login'}>Login</Link>
        <Link href={'/register'}>SignUP</Link>
        <div>
           <Link className='m-1' href={'/articles/breaking-news-123?lang=en'}>Read in english</Link>
           <Link href={'/articles/breaking-news-123?lang=bn'}>Read in bangla</Link>
        </div>
    </div>
  )
}

export default Navbar