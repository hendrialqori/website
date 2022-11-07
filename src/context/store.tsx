import { 
    createContext,
    useContext,
    useReducer
     } from "react";
import { ActionTypes } from './actionType'
import type { Action } from './actionType'
import type { ProjectTypes } from '../types'

interface initialStateProps {
    isShowModalProject: boolean,
    project: ProjectTypes
}

interface ContextType{
    state: initialStateProps;
    dispatch : React.Dispatch<Action>
}

const Context = 
    createContext<ContextType>({} as ContextType)

const initialValue = {
    isShowModalProject: false,
    project: {}
} as initialStateProps

const reducer:React.Reducer<initialStateProps, Action> = (state, action) => {
    switch(action.type) {
        case ActionTypes.SHOWMODALPROJECT:
            return {
                ...state,
                isShowModalProject: !state.isShowModalProject
            }
        case ActionTypes.SETMODALPROJECT:
            return {
                ...state,
                project: action.payload
            }
        default:
            return state
    }
}

export const AppProvider = ({  children }: { children: React.ReactNode }) => {
    const [state, dispatch]  = useReducer(reducer, initialValue)
    return (
        <Context.Provider value={{ state, dispatch }}>
            { children }
        </Context.Provider>
    )
}

export const useStore = () => useContext(Context) 