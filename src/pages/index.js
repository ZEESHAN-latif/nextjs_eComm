import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
// import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  return (
    <div>
      <h1>Welcome to the Nextjs</h1>
      <button onClick={() => router.push('/contact')}>
      Contact Us
    </button>
    </div>
  )
}
