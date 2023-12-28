/* eslint-disable react/prop-types */
export function TasksCard( {tasks} ){
    return(
        <div>
        <h1>{tasks.title}</h1>
        <p>{tasks.description}</p>
    </div>
    )
}