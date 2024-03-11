import { useState } from 'react'
import './Dashboard.css'
import Dash from '../../assets/icons/dashboard.png'
import Dasha from '../../assets/icons/dashboard-a.png'
import Habit from '../../assets/icons/calendar.png'
import Habita from '../../assets/icons/calendar-a.png'
import Sett from '../../assets/icons/setting.png'
import Setta from '../../assets/icons/setting-a.png'

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
                <button onClick={() => setActive(1)} className={`${active === 1 ? 'active-left-btn' : ''} flex items-center gap-[1rem]`}><img src={active === 1 ? Dasha : Dash} /> Dashboard</button>
                <button onClick={() => setActive(2)} className={`${active === 2 ? 'active-left-btn' : ''} flex items-center gap-[1rem]`}><img src={active === 2 ? Habita : Habit} /> Habits</button>
                <button onClick={() => setActive(3)} className={`${active === 3 ? 'active-left-btn' : ''} flex items-center gap-[1rem]`}><img src={active === 3 ? Setta : Sett} /> Settings</button>
            </div>
        </div>

        <div>
            <p>{name}</p>
        </div>
    </div>
  )
}
