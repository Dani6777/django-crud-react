import { createTask } from '../api/tasks.api'
import {useForm} from 'react-hook-form'
import {useNavigate} from 'react-router-dom'

export function TasksFormPage() {

    const {register, handleSubmit, formState:{errors}} = useForm();
    const  navigate = useNavigate();
    const onSubmit = handleSubmit( async data => { await createTask( data ); navigate('/tasks');});

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type='text' placeholder='title' {...register('title',{required:true})} />
                {errors.title && <span>this field is required</span>}
                <textarea rows='3' placeholder='description' {...register('description',{required:true})}></textarea>
                {errors.description && <span>this field is required</span>}
                <button>Save</button>
            </form>
        </div>
    )
}

