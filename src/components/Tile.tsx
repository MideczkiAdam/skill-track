import type { Activity } from "../App"

type TilePropsType = {
    date: string,
    activities: Activity[]
}

const Tile = ({ date, activities }: TilePropsType) => {
  return (
    <div className="tile" title={date}></div>
  )
}

export default Tile