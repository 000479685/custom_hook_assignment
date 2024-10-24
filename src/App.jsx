import './App.css'
import { useLogger } from './hooks/useLogger'

export default function App()
{  
  return (
  <form action={useLogger}>
    <label>
      SCOPE: 
      <input name='scope' />
    </label>
    <label>
      MESSAGE: 
      <input name='message' />
    </label>
    <select name="type" id="">
      <option value="error">ERROR</option>
      <option value="warn">WARN</option>
      <option value="log">LOG</option>
      <option value="debug">DEBUG</option>
    </select>
    <button type='submit'>Submit</button>
  </form>
  )
}