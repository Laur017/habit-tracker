import './Dashboard.css'
import Dash from '../../assets/icons/dashboard.png'
import Dasha from '../../assets/icons/dashboard-a.png'
import Habit from '../../assets/icons/calendar.png'
import Habita from '../../assets/icons/calendar-a.png'
import Sett from '../../assets/icons/setting.png'
import Setta from '../../assets/icons/setting-a.png'
import { useNavigate } from 'react-router-dom'

interface Props {
    access_token:string
    pannel:number,
    name:string,
    img:string
}

type active = 1 | 2 | 3

export default function Left({access_token, pannel,name,img}:Props) {
    const navigate = useNavigate()

    const handlePannel = (n:active) => {
        n === 1 ? navigate(`/dashboard/${access_token}`) : navigate(`/habits/${access_token}`)
    }
  return (
    <div className="w-[20%] left-pannel flex flex-col h-[100%]">
        <div className="flex flex-col gap-[4rem]">
            <h2 className='text-center text-[1.1rem] font-bold'>Habit Tracker</h2>
            <div className="flex flex-col left-btns gap-[2rem]">
                <button onClick={() => handlePannel(1)} className={`${pannel === 1 ? 'active-left-btn' : ''} flex items-center gap-[1rem]`}><img src={pannel === 1 ? Dasha : Dash} /> Dashboard</button>
                <button onClick={() => handlePannel(2)} className={`${pannel === 2 ? 'active-left-btn' : ''} flex items-center gap-[1rem]`}><img src={pannel === 2 ? Habita : Habit} /> Habits</button>
                <button onClick={() => handlePannel(3)} className={`${pannel === 3 ? 'active-left-btn' : ''} flex items-center gap-[1rem]`}><img src={pannel === 3 ? Setta : Sett} /> Settings</button>
            </div>
        </div>

        <div className='flex gap-[1rem] items-center'>
            <img src={img} className='w-[2rem] rounded-[10px]'/>
            <p>{name}</p>
        </div>
    </div>
  )
}
