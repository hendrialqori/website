---
id: 3
title: 'Global state with useContext and useReducer typescript'
highlight: 'Getting started react state maneger with context API and useReducer hook'
tag: '#reactStateManeger'
created: 'Nov, 18 2022'
timeRead: '10 minute read'
slug: 'global-state-with-usecontext-and-usereducer-typescript'
--- 
There is a lot of library in React JS to handle states, especially **global states**, which are the most important topic to master for frontend developers
<br />
But why the developers need global state?   
For small-scale applications we don't need global state, we could using local state like a useState hook.  
*`useState hook available on react version 16.8 and more which released on october of 2018`*
<br />
But, what if the applications starts large?  
start from here we need global state to handle all of states. We no longer pass a value or state through props, things that can give rise of terms **Props Drilling**.  

>**Prop drilling** *is a situation where data is passed from one component through multiple interdependent components until you get to the component where the data is needed.*

<br />
I suggest that you watch to video from **PedroTech** who discuss about Props Drilling and how to prevent it on him youtube channel, [Link video here!](https://www.youtube.com/watch?v=MCTB_w0Guso).  
<br />
There's 3 point to created global state centralized:
- Store (An object which provides the state of the application)
- Reducer (Function that takes an action and the previous state of the application and returns the new state)
- Action creator (Function that literally creates an action object)
<br />
**1. Store**  
  
Create file store.ts in your starting React App Project, initial state object, interface of state and action types.
  
```ts:store.ts
import { createContext, useContext, useReducer } from 'react'

interface initialState {
    count: number
}

export enum ActionTypes {
    INCREMENT = 'increment',
    DECREMENT = 'decrement'
}

type ActionsReducerTypes = 
    {type: typeof ActionTypes.INCREMENT, payload: number} |
    {type: typeof ActionTypes.DECREMENT, payload: number}

interface ContextTypes {
    state: initialState,
    dispatch: React.Dispatch<ActionReducerTypes>
}


const Context = 
    createContext<ContextTypes>({} as ContextTypes) //Type Assertion

const initialValue = {
    count: 0
} as initialState

```  
we have done to created initial state, continue to create action reducer  
<br />  

**2. Reducer**  
  
useReducer hook attend to handle this,
```ts:store.ts
import { createContext, useContext, useReducer } from 'react'

interface initialState {
    count: number
}

export enum ActionTypes {
    INCREMENT = 'increment',
    DECREMENT = 'decrement'
}

type ActionReducerTypes = 
    {type: typeof ActionTypes.INCREMENT, payload: number} |
    {type: typeof ActionTypes.DECREMENT, payload: number}

interface ContextTypes {
    state: initialState,
    dispatch: React.Dispatch<ActionReducerTypes>
}


const Context = 
    createContext<ContextTypes>({} as ContextTypes) //Type Assertion

const initialValue = {
    count: 0
} as initialState


// Reducer
const reducer:React.Reducer<initialState, ActionReducerTypes> = (state, action) => {
    switch(action.type) {
        case ActionTypes.INCREMENT:
            return {
                ...state,
                count: state.count + action.payload
            }
        case ActiomTypes.DECREMENT:
            return {
                ...state,
                count: state.count - action.payload
            }
        default:
            return state
    }
}

export const ContextProvider = ({  children }: { children: React.ReactNode }) => {
    const [state, dispatch]  = useReducer(reducer, initialValue)
    return (
        <Context.Provider value={{ state, dispatch }}>
            { children }
        </Context.Provider>
    )
}

export const useStore = () => useContext(Context) 

```  
If it is already, don't forget to add **ContextProvider** to wrapper root component. 

```ts:main.ts

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ContextProvider } from './store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ContextProvider>
        <App />
    </ContextProvider>
)

```  
<br />  

**3. Action**  

Enter the stage of using the action creator, in JSX file import **ActionType** and **useStore** hook to get the initial value.  
```tsx:App.tsx
import { ActionType, useStore } from './store'

const App = ():JSX.Element => {
    const { state, dispatch } = useStore()

    const incrementActions = () => dispatch({type: ActionType.INCREMENT, payload: 1})
    const decrementActions = () => dispatch({type: ActionType.DECREMENT, payload: 1})
    return (
        <>
        <p>current count : {state.count}<p/>
        <button onClick={decrementActions}>
            Less 1
        </button>
        <button onClick={incrementActions}>
            Add 1
        </button>
        </>
    )
}
```  
Free to customize any value for the action payload, for example,
```tsx:App.tsx
import { ActionType, useStore } from './store'

const App = ():JSX.Element => {
    const { state, dispatch } = useStore()

    const incrementActions = 
        (value) => dispatch({type: ActionType.INCREMENT, payload: value})

    const decrementActions = 
        (value) => dispatch({type: ActionType.DECREMENT, payload: value})

    return (
        <>
        <p>current count : {state.count}<p/>
        <button onClick={() => decrementActions(10)}>
            Less 10
        </button>
        <button onClick={() => incrementActions(10)}>
            Add 10
        </button>
        </>
    )
}
```  
<br />
Just that's a fraction of the usage **useContext** and **useReducer** hooks to handle global state on your React App.
The code can be adjusted according to individual needs.
<br />
**Thank for reading!**