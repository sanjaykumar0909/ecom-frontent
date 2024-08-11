import { useEffect, useState } from "react"

import { useAuthContext } from "../../context/AuthContext"
import BufferAni from "../../components/BufferAni/BufferAni";
import useAuthenticated from "../../hooks/Authenticated"

const Home = () => {
    const user = useAuthContext()
    let [loading, setLoading] = useState(false)
    useAuthenticated(setLoading)
  return (
    <div>
        {loading && <BufferAni />}
        <h2>This is Dashboard.</h2>
        <h2>Logged in as: {user.user}</h2>
    </div>
  )
}

export default Home
