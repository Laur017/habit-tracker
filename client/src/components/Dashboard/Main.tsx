import './Dashboard.css'
import Left from "./Left";
import { useParams } from 'react-router-dom';

export default function Main() {
  const { name } = useParams();

  console.log('Name:', name);

  return (
    <div className="main-dashboard">
      {name &&
        <Left name={name}/>
      }
    </div>
  )
}
