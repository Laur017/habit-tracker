import './Dashboard.css'
import Left from "./Left";
import { useParams, useLocation } from 'react-router-dom';
import Mid from './Mid';
import Right from './Right';

export default function Main() {
  const { name } = useParams();
  const location = useLocation();
  const data = location.state?.data;
  console.log("Data:", data);

  return (
    <div className="main-dashboard">
      {name &&
        <div className='flex h-[100%]'>
          <Left name={name} pannel={1} data={data} />
          <Mid />
          <Right />
        </div>
      }
    </div>
  )
}
