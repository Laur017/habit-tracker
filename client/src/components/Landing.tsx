import Image from '../assets/home-img.jpg'

export default function Landing() {
  return (
    <div className="div-landing flex flex-col items-center mt-[2rem]">
        <h2 className='text-[2rem] font-bold'>Habit Tracker</h2>
        <div className='flex m-[2rem] items-center justify-center gap-[1rem]'>
            <div className="left-landing w-[55%] flex flex-col items-center gap-[1rem]">
                <h4 className='text-[1.1rem] font-semibold'>Embark on a journey of self-improvement</h4>
                <p>Whether you're striving for personal development, fitness goals, or a more balanced lifestyle, our intuitive habit tracking app is designed to empower you every step of the way.</p>
                <button className='landing-btn'>Let's Start</button>
            </div>
            <img src={Image} className='w-[40%]'/>
        </div>
    </div>
  )
}
