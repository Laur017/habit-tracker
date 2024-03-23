import { useEffect, useState } from 'react'
import './Dashboard.css'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase'

interface Props {
  id:string
}

export default function Mid({id}:Props) {
  const today = new Date()
  const month = today.toLocaleString('default', { month: 'long' })
  const date = today. getDate()
  const [habits, setHabits] = useState()

  useEffect(() => {
    const fetchData = async () => {
      
        try {
          const docRef = doc(db, "habits", id);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            const data = docSnap.data();
            console.log(data)
            setHabits(data.habit)
          } else {
            console.log("No such document exists");
          }
        } catch (error) {
          console.error("Error getting document:", error);
        }
  
    };
    
    fetchData();
  }, []);

  return (
    <div className="w-[60%] p-[5%]">
      <div className="top-dash flex items-center">
        <span>
          <h2>Today</h2>
          <h4>{month} {date}</h4>
        </span>
        <button className='add-hab-btn'>+ Add Habit</button>
      </div>
      <div className="mid-dash">
      {habits && 
              <div className='bottom-hab-div mt-[5%] flex flex-col gap-[1rem]'>
                {habits.map((i,indx) => 
                <div className='flex w-[100%] items-center gap-[1rem]'>
                <div className="checked-btn-check flex items-center justify-center">✔</div>
                <div className='habits-list-div flex items-center' key={indx}>
                  
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
                  </div>
                </div>
                )}
          </div>
        }
        </div>
    </div>
  )
}
