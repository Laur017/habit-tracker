import { useEffect, useState } from 'react';
import Bin from '../../assets/icons/bin.png'
import Edit from '../../assets/icons/edit.png'
import '../Dashboard/Dashboard.css'
import Left from "../Dashboard/Left";
import AddHabitCard from './AddHabitCard';
import { useParams } from "react-router-dom";

export default function Habits() {
    const { name} = useParams()
    const [addBtn, setAddBtn] = useState<boolean>(false)
    const [habits, setHabits] = useState<{habit:string, color:number}[]>([])

    const toggleAddHabit = (t:number,hab:string,col:number) => {
      if(t === 1)
        setAddBtn(false)
      if(t === 2){
        const aux = habits;
        aux.push({habit:hab,color:col})
        setHabits(aux)
        setAddBtn(false)
      }
    }

    useEffect(() => {
      console.log(habits)
    },[habits])

  return (
    <div className="h-[100%] w-[100%]">
        {name && 
        <div className="flex h-[100%] w-[100%]">
            <Left name={name} pannel={2} />
            <div className="habits-div p-[5%] w-[80%]">
              <div className="top-hab-div flex w-[100%]">
                <h2>Habits List</h2>
                <button className='add-hab-btn' onClick={() => setAddBtn(true)}>+ Add Habit</button>
              </div>
              {habits && 
              <div className='bottom-hab-div mt-[5%] flex flex-col gap-[1rem]'>
                {habits.map(i => 
                <div className='habits-list-div flex items-center'>
                  <div className='flex items-center gap-[1rem] h-[100%]'>
                  <span 
                  className=
                    {
                      `${i.color === 1 ? 'first-col' 
                      : i.color === 2 ? 'second-col' 
                      : i.color === 3 ? 'third-col'
                      : i.color === 4 ? 'fourth-col'
                    : 'fifth-col'}`
                    }>
                  </span>
                  {i.habit}
                  </div>
                  <div className='flex items-center gap-[1rem]'>
                    <img src={Edit} className='w-[1.5rem] cursor-pointer' />
                    <img src={Bin} className='w-[1.5rem] cursor-pointer' />
                  </div>
                </div>)}
              </div>  
              }
            </div>
        </div>
        }
        {addBtn && 
          <div className='blur-div flex justify-center items-center'>
            <AddHabitCard toggleAddHabit = {toggleAddHabit}/>
          </div>


        }
    </div>
  )
}
