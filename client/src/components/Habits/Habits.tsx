import { useState, useRef } from 'react'
import Bin from '../../assets/icons/bin.png'
import Edit from '../../assets/icons/edit.png'
import '../Dashboard/Dashboard.css'
import Left from "../Dashboard/Left"
import AddHabitCard from './AddHabitCard'
import {deleteDoc, doc, setDoc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function Habits() {
  const { access_token } = useParams();
  const [user,setUser] = useState();
  console.log(access_token)
  
  useEffect(() => {
    axios
        .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${access_token}`, {
          headers: {
            Authorization: `Bearer ${access_token}`,
            Accept: 'application/json',
          },
        })
        .then((res) => {
          if (res.data) {
            console.log(res.data.name);
            setUser(res.data)
          } else {
            console.log('Name not available');
          }  
        })
        .catch((err) => console.log(err));
  },[access_token])

    const dragItem = useRef()
    const dragOverItem = useRef()
    const [addBtn, setAddBtn] = useState<boolean>(false)
    const [habits, setHabits] = useState<{habit:string, color:number}[]>([])
    const [hbt, setHbt] = useState<string>('')
    const [clr, setClr] = useState<number>(1)
    const [edit, setEdit] = useState<boolean>(false)
    const [indxToEdit, setIndxToEdit] = useState<number>(0)

    const azi = new Date();
  
  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        try {
          const docRef = doc(db, "habits", user.id);
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
      }
    };
    
    fetchData();
  }, [user]);
     

    const dragStart = (position) => {
      dragItem.current = position
    }
    useEffect(() => {
      console.log(Array(habits.length).fill(0))
    },[habits])

    const dragEnter = (position) => {
      dragOverItem.current = position
  
    }

    const drop = () => {
      const copyListItems = [...habits]
      const dragItemContent = copyListItems[dragItem.current]
      copyListItems.splice(dragItem.current, 1)
      copyListItems.splice(dragOverItem.current, 0, dragItemContent)
      dragItem.current = null
      dragOverItem.current = null
      setHabits(copyListItems)
    }

    const toggleAddHabit = (t:number,hab:string,col:number) => {
      if(t === 1)
        setAddBtn(false)
      if(t === 2){
        const aux = habits
        aux.push({habit:hab,color:col})
        setHabits(aux)
        setAddBtn(false)
      } else if(t === 3){
        const aux = habits
        aux[indxToEdit].habit = hab
        aux[indxToEdit].color = col
        setHabits(aux)
        setHbt('')
        setClr(1)
        setEdit(false)
        setAddBtn(false)
      }

    }

    const handleEdit = (hab:string, col:number, indx:number) => {
      setIndxToEdit(indx)
      setHbt(hab)
      setClr(col)
      setEdit(true)
      setAddBtn(true)
    }

    const handleDelete = (indx:number) => {
      
      const updatedHabits = [...habits.slice(0, indx), ...habits.slice(indx + 1)];
      setHabits(updatedHabits);

    }

    const addToDb = async (e) => {
      e.preventDefault()

      

      try{
        const docRef = doc(db, "habits", user.id)

        await deleteDoc(docRef)

        await setDoc(docRef,{
          habit: habits,
          date: azi.getDate(),
          checked: Array(habits.length).fill(0)
        });
        console.log("Document written with ID: ")
      } catch (e) {
        console.log("Error adding document: ", e)
      }
    }


  return (
    <div className="h-[100%] w-[100%]">
    
        {user && 

        <div className="flex h-[100%] w-[100%]">
            <Left 
            access_token={access_token} 
            name={user.name} 
            pannel={2}
            img={user.picture}
          />
            <div className="habits-div p-[5%] w-[80%]">
              <div className="top-hab-div flex w-[100%]">
                <h2>Habits List </h2>
                <button className='add-hab-btn' onClick={() => setAddBtn(true)}>+ Add Habit</button>
              </div>
              {habits && 
              <div className='bottom-hab-div mt-[5%] flex flex-col gap-[1rem]'>
                {habits.map((i,indx) => 
                <div className='habits-list-div flex items-center' key={indx} 
                onDragStart={() => dragStart(indx)}
                onDragEnter={() => dragEnter(indx)}
                onDragEnd={drop}
                draggable>
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
                    <img src={Edit} className='w-[1.5rem] cursor-pointer' onClick={() => handleEdit(i.habit, i.color, indx)}/>
                    <img src={Bin} className='w-[1.5rem] cursor-pointer' onClick={() => handleDelete(indx)}/>
                  </div>
                </div>)}
                <button className='save-changes-btn' onClick={(e) => addToDb(e)}>Save Changes</button>
              </div>  
              }
            </div>
        </div>
        }
        {addBtn && 
          <div className='blur-div flex justify-center items-center'>
            <AddHabitCard toggleAddHabit = {toggleAddHabit} hbt = {hbt} clr = {clr} edt = {edit}/>
          </div>


        }
    </div>
  )
}
