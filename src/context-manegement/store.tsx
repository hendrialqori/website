import { createContext, useContext, useReducer } from "react";

interface initialStateProps {
    isSearch : boolean
}
type Action = { type: 'isSearch', paylod: boolean }

interface ContextType{
    state: initialStateProps ;
    dispatch : React.Dispatch<Action>
}

const AppState = createContext<ContextType>({} as ContextType)

const initialValue: initialStateProps = {
    isSearch: false
}

const reducer:React.Reducer<initialStateProps, Action> = (state, action) => {
    switch(action.type) {
        case "isSearch":
            return {
                ...state,
                isSearch: action.paylod
            }
        default:
            return state
    }
}

export const AppProvider = ({  children }: { children: React.ReactNode }) => {
    const [state, dispatch]  = useReducer(reducer, initialValue)
    return (
        <AppState.Provider value={{ state, dispatch }}>
            { children }
        </AppState.Provider>
    )
}

export const useStore = () => useContext(AppState) 