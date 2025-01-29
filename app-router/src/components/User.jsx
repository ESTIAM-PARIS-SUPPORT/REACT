import { useParams } from "@tanstack/react-router"


function User() {
    
    const { userId } = useParams({ from : "/user/$userId"})

  return (
    <>
        <h1>User</h1>  
        <p>{userId}</p>      
    </>
  )
}

export default User
