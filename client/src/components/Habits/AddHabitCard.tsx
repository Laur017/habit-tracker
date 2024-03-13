import { useState } from "react"

interface Props {
  toggleAddHabit(a:number, b:string, c:number):void,
  hbt:string,
  clr:number,
  edt:boolean

}

export default function AddHabitCard({toggleAddHabit, hbt, clr, edt}:Props) {
    const [selectedColor, setSelectedColor] = useState<number>(clr)
    const [habit, setHabit] = useState<string>(hbt)

  return (
    <div className="add-habit-card flex flex-col">
        <h3>Let's add a new habit !</h3>
        <input type="text" placeholder="habit" value={habit} onChange={(e) => setHabit(e.target.value)}/>
        <div className="colors">
            <span className={`${selectedColor === 1 ? 'selected-color' : ''}`} onClick={() => setSelectedColor(1)}></span>
            <span className={`${selectedColor === 2 ? 'selected-color' : ''}`} onClick={() => setSelectedColor(2)}></span>
            <span className={`${selectedColor === 3 ? 'selected-color' : ''}`} onClick={() => setSelectedColor(3)}></span>
            <span className={`${selectedColor === 4 ? 'selected-color' : ''}`} onClick={() => setSelectedColor(4)}></span>
            <span className={`${selectedColor === 5 ? 'selected-color' : ''}`} onClick={() => setSelectedColor(5)}></span>
        </div>
        <div className="add-card-btns">
            <button onClick={() => toggleAddHabit(1,"",9)}>Cancel</button>
            <button onClick={() => edt ?toggleAddHabit(3,habit,selectedColor) :toggleAddHabit(2,habit,selectedColor)}>{edt ? 'Save' : 'Add'}</button>
        </div>
    </div>
  )
}
