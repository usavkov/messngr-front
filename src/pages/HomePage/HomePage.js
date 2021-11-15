import { NavLink } from "react-router-dom"
import { PAGE_MAIN } from "../../constants"

export const HomePage = () => {

  return (
    <NavLink to={PAGE_MAIN}>Main</NavLink>
  )
}
