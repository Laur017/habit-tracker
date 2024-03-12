
export default function AddHabitCard({toggleAddHabit}) {
  return (
    <div className="add-habit-card flex flex-col">
        <h3>Let's add a new habit !</h3>
        <input type="text" placeholder="habit" />
        <div className="colors">
            <span className="selected-color"></span>
            <span className=""></span>
            <span className=""></span>
            <span className=""></span>
            <span className=""></span>
        </div>
        <div className="add-card-btns">
            <button onClick={toggleAddHabit}>Cancel</button>
            <button>Add</button>
        </div>
    </div>
  )
}
