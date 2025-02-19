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
    </div>
  )
}

export default Navbar