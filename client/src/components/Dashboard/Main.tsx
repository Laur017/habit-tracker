import './Dashboard.css'
import Left from "./Left";
import { useParams } from 'react-router-dom';
import Mid from './Mid';
import Right from './Right';

export default function Main() {
  const { name } = useParams();

  return (
    <div className="main-dashboard">
      {name &&
        <div className='flex h-[100%]'>
        <Left name={name} pannel={1}/>
        <Mid />
        <Right />
        </div>
      }
    </div>
  )
}
