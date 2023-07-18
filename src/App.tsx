import { useAppSelector } from './hooks/useAppSelector';
import Router from './router/Router'
import './styles/_color-palette.scss';

function App() {
  const { theme } = useAppSelector(state => state.theme)

  return (
    <div className={`theme-${theme}`}>
      <Router />
    </div>
  )
}

export default App
