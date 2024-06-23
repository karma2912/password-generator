import './App.css'
import Lowerblock from './components/Lowerblock'
import Password from './components/Password'
import Upperblock from './components/Upperblock'

function App() {

  return (
    <>
    <div className='main'>
      <div className="pass"><Password/></div>
      {/* <div className="upper"><Upperblock/></div> */}
      <div className="lower"><Lowerblock/></div>
    </div>
    </>
  )
}

export default App
