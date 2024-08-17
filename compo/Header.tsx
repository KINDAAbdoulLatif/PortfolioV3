import Link from "next/link";
import clsx from "clsx"
import { useContext } from "react";



export default function Header() {
  return (
    <ul className="fixed top-0 flex px-12 bg-black text-white">
        <li className="px-8"><Link href="#about">About</Link></li>
        <li className="px-8"><Link href="#skills">Skills</Link></li>
        <li className="px-8"><Link href="#contact">Contact</Link></li>
    </ul>
    
  )
}