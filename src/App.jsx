import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


function App() {
  const [time, setTime] = useState(0)
  const[running,setrunning]=useState(false)

  useEffect(()=>{
    let interval;
    if(running){
      interval=setInterval(()=>{
        setTime((prevtime)=>prevtime+10);
      },10);  
      } else if(!running){
        clearInterval(interval);
      }
      return ()=>clearInterval(interval);
    }, [running]);

  return (
    <>
    <div className='max-w-md flex flex-col items-center justify-center py-8 border'>
      <h1 className='text-2xl font-semibold pb-2'>Stopwatch</h1>
      <div className='text-xl font-semibold m-5 px-5 py-2 text-green-900 border border-indigo-900 rounded-2xl border-3'>
        <span>{("0"+Math.floor((time/60000)%60)).slice(-2)}:</span>
        <span>{("0"+Math.floor((time/1000)%60)).slice(-2)}:</span>
        <span>{("0"+Math.floor((time/10)%100)).slice(-2)}:</span>
      </div>
      <div className='w-1/3 max-wsm flex flex-row justify-evenly'>
        {running ? (
          <button className='border rounded-lg py-1 px-2 border-yellow-900'
          onClick={()=>{setrunning(false)}}>Stop</button>
        ):(
          <button className='border rounded-lg py-1 px-2' 
          onClick={()=>{setrunning(true)}}>Start</button>
        )
        }
        <button className='border rounded-lg py-1 px-2' 
        onClick={()=>setTime(0)}>Reset</button>
      </div>
    </div>
    </>
  )
}

export default App
