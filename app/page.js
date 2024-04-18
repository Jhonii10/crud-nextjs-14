import Navbar from "./components/navbar";
import Task from "./components/task";
import { prisma } from "./libs/prisma";

const loadTaks = async ()=>{
  return await prisma.task.findMany();
  
}

export default async function Home() {


  const tasks = await loadTaks();

  return (
    <section className='container mx-auto'>
    
    <div className='grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 p-6'>
      {
        tasks?.map(({id, title , description , createdAt})=>{
          return(
            <Task id={id}createdAt={createdAt} description={description}  title={title} key={id}/>
          )
        })
      }
    
    </div>
    
    </section>
  );
}
