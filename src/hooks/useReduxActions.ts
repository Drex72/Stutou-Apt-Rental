import { useDispatch } from 'react-redux'
import { ActionCreatorsMapObject, bindActionCreators } from 'redux'
import { authenticationSlice } from '../redux/authenticationSlice'
import { themeSlice } from '../redux/themeSlice'
import { apartmentsSlice } from '../redux/aparmentsSlice'
import { messageSlice } from '../redux/messageSlice'
import { layoutSlice } from '../redux/layoutSlice'
import { usersSlice } from '../redux/usersSlice'

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

export const useApartmentActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(
    Object.assign({}, apartmentsSlice.actions),
    dispatch
  )
}

export const useMessageActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(Object.assign({}, messageSlice.actions), dispatch)
}

export const useLayoutActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(Object.assign({}, layoutSlice.actions), dispatch)
}

export const useUserActions = () => {
  const dispatch = useDispatch()

  return bindActionCreators(Object.assign({}, usersSlice.actions), dispatch)
}
