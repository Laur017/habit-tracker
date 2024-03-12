import { useState } from "react"

export default function AddHabitCard({toggleAddHabit}) {
    const [selectedColor, setSelectedColor] = useState<number>(1)
    const [habit, setHabit] = useState<string>()
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
            <button onClick={() => toggleAddHabit(1,"","")}>Cancel</button>
            <button onClick={() => toggleAddHabit(2,habit,selectedColor)}>Add</button>
        </div>
    </div>
  )
}
