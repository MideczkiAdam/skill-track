import type { Activity } from "../App"

type TilePropsType = {
    date: string,
    activities: Activity[],
    maxAct: number
}

const Tile = ({ date, activities, maxAct }: TilePropsType) => {
  let sumActTime = 0;

  activities.forEach(act => sumActTime += act.timeInSec)


  const calcColor = () => {
    if(sumActTime > maxAct * 0.8) return "var(--my-color)"
    if(sumActTime > maxAct * 0.6) return "oklch(from var(--my-color) l c h / 0.6)"
    if(sumActTime > maxAct * 0.4) return "oklch(from var(--my-color) l c h / 0.4)"
    if(sumActTime > maxAct * 0.2) return "oklch(from var(--my-color) l c h / 0.2)"
    return "gainsboro"
  }

  return (
    <div className="tile" style={{background: calcColor()}} title={date}></div>
  )
}

export default Tile