import { useEffect } from 'react';
import { useAppSelector } from './hooks/useAppSelector';
import Router from './router/Router'
import './styles/_color-palette.scss';
import accessToken from './utils/accessToken/AccessToken';
import { Toaster } from 'react-hot-toast';

function App() {
  const { theme } = useAppSelector(state => state.theme)
  const { userToken } = useAppSelector(state => state.authentication)

  // Set the access token any time it is changed in our store
  useEffect(() => {
    accessToken.setAccessToken(userToken)
  }, [userToken])

  return (
    <div className={`theme-${theme}`}>
      <Toaster />
      <Router />
    </div>
  )
}

export default App
