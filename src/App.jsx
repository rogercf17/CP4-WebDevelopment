import Header from './Componentes/Header'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      {/* <h1>Home</h1> */}
      <Outlet />
    </>
  )
}

export default App
