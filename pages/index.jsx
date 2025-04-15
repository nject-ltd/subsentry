import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../lib/firebase'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        router.push('/dashboard')
      } else {
        router.push('/login')
      }
    })
    return () => unsubscribe()
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center text-gray-700 text-xl">
      Redirecting...
    </div>
  )
}
