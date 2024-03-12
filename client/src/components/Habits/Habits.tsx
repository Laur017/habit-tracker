import Left from "../Dashboard/Left";
import { useParams } from "react-router-dom";

export default function Habits() {
    const { name} = useParams();
  return (
    <div>
        {name && 
        <div>
            <Left name={name} pannel={2} />
        </div>
        }
        Habits
    </div>
  )
}
