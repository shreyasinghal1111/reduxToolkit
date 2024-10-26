import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../features/user/userSlice'

const Todos = () => {
   const users= useSelector((state)=>state.users)
   const dispatch=useDispatch()
  return (
    <div>
    <ul>
    {
            users.users.map((user)=>(
                <li key={user.id}>
                    <span>{user.text}</span>
                    <button onClick={()=>dispatch(removeUser(user.id))}>Remove</button>
                </li>
            ))
        }
    </ul>
      
    </div>
  )
}

export default Todos
