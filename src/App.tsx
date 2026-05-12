import { useEffect, useState } from "react"
import Tile from "./components/Tile"

export type Activity = {
  name: string,
  timeInSec: number
}

export type ActivityDay = {
  date: string,
  activities: Activity[]
}

const App = () => {

  const [days, setDays] = useState<ActivityDay[]>([])

  useEffect(()=> {
    fetch("data.json")
    .then(res => res.json())
    .then(data => setDays(data))
  },[])

  return (
    <>
      {!days && <div>Loading...</div>}
      {days && <section className="tileWrapper">
        {days.map(day => <Tile date={day.date} activities={day.activities}/>)}
        </section>}
    </>
  )
}

export default App