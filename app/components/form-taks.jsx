'use client'
import { useRouter } from 'next/navigation';
import React from 'react'

export default function FormTaks() {
    
    const router = useRouter();
     
    const onSubmit = async (e)=>{
        e.preventDefault();
        const title = e.target.title.value;
        const description = e.target.description.value;
        const res = await fetch('/api/tasks',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({title, description})
        })

        if(res.ok){

            router.push('/')
            router.refresh()
        }
    }


  return (
    <div className='h-screen flex justify-center items-center'>
      <form className='bg-slate-500 p-10 rounded w-1/3'  onSubmit={onSubmit}>
        <label htmlFor='title' className='font-bold text-sm '>
            Title
        </label>
        <input
            type='text' 
            placeholder="Enter your title"
            className='border border-gray-400  text-black p-2 mb-4 w-full rounded'
            name='title'
            id='title'
            required
        />
        <label htmlFor='title' className='font-bold text-sm '>
            Description
        </label>
        <textarea 
            rows='4'
            className='border border-gray-400 text-black  p-2 mb-4 w-full rounded'
            placeholder='Enter your description'
            name='description'

        />
        <button
            type='submit' 
            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
            Create task
        </button>
      </form>
    </div>
  )
}
