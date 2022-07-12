import { FC, useState } from 'react'
import {fetchJSON} from "./api/api"
import QuestionnairePage from './pages/Questionnaire'

const App:FC =() =>  {
  const [count, setCount] = useState(0)
  const testRequest = async () => {
    const result = await  fetchJSON("/users/hoge",{method: "GET"})
    console.log(result)
  }
  return (
    <>
    <QuestionnairePage/>
    </>
  )
}

export default App
