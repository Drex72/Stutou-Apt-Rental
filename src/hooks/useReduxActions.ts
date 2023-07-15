import { useDispatch } from 'react-redux'
import { ActionCreatorsMapObject, bindActionCreators } from 'redux'
import { authenticationSlice } from '../redux/authenticationSlice'
import { themeSlice } from '../redux/themeSlice'

export const useReduxActions = (action: ActionCreatorsMapObject<any>) => {
  const dispatch = useDispatch()

  return bindActionCreators(Object.assign({}, action), dispatch)
}

export const useAuthActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(
    Object.assign({}, authenticationSlice.actions),
    dispatch
  )
}

export const useThemeActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(Object.assign({}, themeSlice.actions), dispatch)
}
