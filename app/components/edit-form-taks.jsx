'use client'
import { useParams, useRouter } from 'next/navigation';
import React, {useState , useEffect} from 'react'

export default function EditFormTaks() {
    
    const router = useRouter();
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        fetch(`/api/tasks/${id}`)
            .then(response => response.json())
            .then(data => {
                setTitle(data.title);
                setDescription(data.description)
            });
    }, [id]);
    
    const onSubmit = async (e)=>{
        e.preventDefault();
        const res = await fetch(`/api/tasks/${id}`,{
            method:'PUT',
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
            value={title}
            onChange = {(e)=>setTitle(e.target.value)}
        />
        <label htmlFor='title' className='font-bold text-sm '>
            Description
        </label>
        <textarea 
            rows='4'
            className='border border-gray-400 text-black  p-2 mb-4 w-full rounded'
            placeholder='Enter your description'
            name='description'
            value={description}
            onChange = {(e)=>setDescription(e.target.value)}

        />
        <button
            type='submit' 
            className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'>
            Save task
        </button>
      </form>
    </div>
  )
}