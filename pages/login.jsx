import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth'
import { auth } from '../lib/firebase'

export default function Login() {
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) router.push('/dashboard')
    })
    return () => unsubscribe()
  }, [router])

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
      router.push('/dashboard')
    } catch (err) {
      console.error(err)
      alert('Login failed')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow text-center">
        <h1 className="text-2xl font-bold mb-4">Welcome to SubSentry</h1>
        <p className="mb-6 text-gray-600">Sign in with Google to manage your subscriptions.</p>
        <button
          onClick={handleLogin}
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  )
}
