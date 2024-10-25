import './App.css'
import useLogger from './hooks/useLogger';

export default function App(valid)
{  
  const logger = useLogger()

  return (  
  <form {...logger}>
    <label>
      SCOPE: 
      <input name='scope'
      required/>
    </label>
    <label>
      MESSAGE: 
      <input name='message' 
      required/>
    </label>
    <select name='type'>
      <option value="error">ERROR</option>
      <option value="warn">WARN</option>
      <option value="log">LOG</option>
      <option value="debug">DEBUG</option>
    </select>
    <button type='submit'>Submit</button>  
  </form>
  )
}