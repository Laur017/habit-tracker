import { useState } from 'react'
import './Dashboard.css'

interface Props {
    name:string
}

type active = 1 | 2 | 3

export default function Left({name}:Props) {
    const [active, setActive] = useState<active>(1);
  return (
    <div className="w-[20%] left-pannel flex flex-col ">
        <div className="flex flex-col gap-[4rem]">
            <h2 className='text-center text-[1.1rem] font-bold'>Habit Tracker</h2>
            <div className="flex flex-col left-btns gap-[2rem]">
                <button>Dashboard</button>
                <button>Habits</button>
                <button>Settings</button>
            </div>
        </div>

        <div>
            <p>{name}</p>
        </div>
    </div>
  )
}
