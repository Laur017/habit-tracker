import './Dashboard.css'

export default function Mid() {
  const today = new Date()
  const month = today.toLocaleString('default', { month: 'long' })
  const date = today. getDate()

  return (
    <div className="w-[60%] p-[5%]">
      <div className="top-dash flex items-center">
        <span>
          <h2>Today</h2>
          <h4>{month} {date}</h4>
        </span>
        <button className='add-hab-btn'>+ Add Habit</button>
      </div>
    </div>
  )
}
