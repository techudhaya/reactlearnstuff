import { useState } from 'react'
import '../testtwo/App.css'
import Todolist from '../components/Todolist.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
          <div className="flex items-center justify-between p-4">
              <div className="flex items-center">
                  <img src="https://cdn-icons-png.freepik.com/256/138/138849.png?semt=ais_hybrid" alt="Icon" className="h-8 w-8" />
              </div>
              <div className="flex-grow text-center">
                  <h1 className="text-xl font-bold">Daily Things to do Manager</h1>
              </div>
              <div className="flex items-center h-8 w-8">
              </div>
          </div>
      </header> 

      {/* Main Content  */}
      <main className="pt-20">
          <div className="container mx-auto p-4 rounded border">
            <Todolist />
          </div>
      </main>
    </>
  )
}

export default App
