import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs } from 'firebase/firestore'
import { auth, db } from '../../lib/firebase'

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [subscriptions, setSubscriptions] = useState([])
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      if (u) {
        setUser(u)
        fetchSubscriptions(u.uid)
      } else {
        router.push('/login')
      }
    })
    return () => unsubscribe()
  }, [router])

  const fetchSubscriptions = async (uid) => {
    const snap = await getDocs(collection(db, 'users', uid, 'subscriptions'))
    setSubscriptions(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })))
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Your Subscriptions</h1>
      <ul className="space-y-4">
        {subscriptions.map((sub) => (
          <li key={sub.id} className="bg-white rounded shadow p-4">
            <h2 className="text-lg font-semibold">{sub.name}</h2>
            <p>{sub.price} / {sub.frequency}</p>
            <p className="text-sm text-gray-500">Status: {sub.status}</p>
          </li>
        ))}
        {subscriptions.length === 0 && (
          <p className="text-gray-600">No subscriptions found.</p>
        )}
      </ul>
    </div>
  )
}
