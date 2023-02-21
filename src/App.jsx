import { Divider } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import style from "./App.module.css"
function App() {

  return (
    <div className={style.container}>
      <div className={style.app}>
      <Outlet/>
      </div>
    </div>
  )
}

export default App
