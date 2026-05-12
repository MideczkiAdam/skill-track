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
  const [maxAct, setMaxAct] = useState(0)
  const [color, setColor] = useState("#005500")

  useEffect(()=> {
    fetch("data.json")
    .then(res => res.json())
    .then(data => setDays(data))
  },[])

  useEffect(()=> {
    if(!days) return;

    let max = 0
    days.forEach(day => {
      let currentDay = 0;

      day.activities.forEach(act => {
        currentDay += act.timeInSec})

      if(max < currentDay) max = currentDay
    })

    setMaxAct(max)
  },[days])

  return (
    <>
    <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      {!days && <div>Loading...</div>}
      {days && <section className="tileWrapper" style={{"--my-color": color} as React.CSSProperties}>
        {days.map(day => <Tile date={day.date} activities={day.activities} maxAct={maxAct}/>)}
        </section>}
    </>
  )
}

export default App