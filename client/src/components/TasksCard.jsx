/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"

export function TasksCard( {tasks} ){

    const navigate = useNavigate()
    return(
        <div className='bg-zinc-500 p3 hover:bg-zinc-700 hover:cursor-pointer' onClick={()=>{navigate(`/tasks/${tasks.id}`)}}>
        <h1 className='font-bold uppercase'>{tasks.title}</h1>
        <p className='text-slate-400'>{tasks.description}</p>
    </div>
    )
}