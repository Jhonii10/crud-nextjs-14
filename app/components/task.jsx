'use client'
import { useRouter } from 'next/navigation'
import React from 'react'


export default function Task({ id , title , description , createdAt}) {

  const router = useRouter();
 

  const deleteTasks = async ()=>{
    const res = await fetch(`/api/tasks/${id}`, { method : "DELETE" })
    if (res.ok) {
        router.refresh();
        
    }
  }

  

  return (
    <div className='bg-slate-500 m-4 rounded p-3'>
               <div>
                <h1 className='font-bold text-xl'>{title}</h1>
                <p>{description}</p>
                <small>{new Date(createdAt).toLocaleDateString()} </small>
                </div>
                <div className="task-actions flex justify-end gap-2">
                    <button 
                        type="button" 
                        className="btn edit px-4 py-2  rounded-md bg-blue-500 hover:bg-blue-700 text-white focus:outline-none"
                        onClick={()=>router.push(`/tasks/edit/${id}`)}
                    >
                        Edit
                    </button>
                    <button 
                        type="button" 
                        className="btn delete px-4 py-2 rounded-md bg-red-500 hover:bg-red-700 text-white focus:outline-none"
                        onClick={deleteTasks}
                        
                    >
                        Delete
                    </button>
                </div>
            </div>
  )
}
