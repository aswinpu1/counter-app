import Counter from './components/Counter'
import './App.css'

function App() {


  return (
    <>
     <h1 className='text-center mt-5'>counter app</h1>
     <div style={{height:'70vh'}} className="d-flex justify-content-center align-items-center w-100">
      <Counter/>
     </div>
    </>
  )
}

export default App
