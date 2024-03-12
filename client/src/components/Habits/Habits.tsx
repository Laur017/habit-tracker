import { useState } from 'react';
import '../Dashboard/Dashboard.css'
import Left from "../Dashboard/Left";
import AddHabitCard from './AddHabitCard';
import { useParams } from "react-router-dom";

export default function Habits() {
    const { name} = useParams()
    const [addBtn, setAddBtn] = useState<boolean>(true)

    const toggleAddHabit = () => {
      setAddBtn(false)
    }

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
