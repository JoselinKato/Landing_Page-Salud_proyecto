import './App.css'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import PrincipalPage from './pages/principal'

function App() {


  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PrincipalPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
