'use client'

import Link from 'next/link'
import Image from 'next/image'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs'

export default function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 dark:bg-black/80 dark:border-gray-700 px-6 py-3 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Image src="/vercel.svg" alt="Logo" width={24} height={24} className="dark:invert" />
        <Link href="/" className="text-xl font-bold text-gray-800 dark:text-white">
          MiApp
        </Link>

        <Link href="/about" className="text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition">
          About
        </Link>

        <SignedIn>
          <Link href="/dashboard" className="text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition">
            Dashboard
          </Link>
          <Link href="/protegida" className="text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition">
            Protegida
          </Link>
        </SignedIn>
      </div>

      <div className="flex items-center gap-4">
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  )
}
