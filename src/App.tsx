import { useEffect } from 'react';
import { useAppSelector } from './hooks/useAppSelector';
import Router from './router/Router'
import './styles/_color-palette.scss';
import { Toaster } from 'react-hot-toast';

function App() {
  const { theme } = useAppSelector(state => state.theme)


  return (
    <div className={`theme-${theme}`}>
      <Toaster />
      <Router />
    </div>
  )
}

export default App
