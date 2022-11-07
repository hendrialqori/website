---
id: 2
title: 'Powerfull of useRef'
highlight: 'To handle a state often we using useState, but useRef can replace it!'
tag: '#reactJs'
created: 'Oct, 22 2022'
timeRead: '5 minute read'
slug: 'powerfull-of-useref'
---

> ```useRef``` returns a mutable ref object whose *.current* property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component. [[reactjs docs]](https://reactjs.org/docs/hooks-reference.html#useref)  

Essentially, useRef is like a *“box”* that can hold a mutable value in its **.current** property.
If on vanilla javascript, useRef like **document.querySelector()**
<br />
Its mean we can access property which exists, as example on input tag had *.value* or *.focus* property.

```js:Vanilla
const input = document.querySelector('.input')
document.getElementById('root').innerHTML = input.value;
```
<br/>

```jsx:React
import { useRef } from 'react';

const InputComponent = () => {
  const inputRef = useRef(null)
  return (
    <>
      <h1>{inputRef.current.value}</h1>
      <input
       ref={inputRef}
       type='text'
      />
    </>
  )
}
```
In this case, we try'na refactory code below using *useRef* previously used *useState*. Les't code!
<br/>

```jsx:JSX
import { useState } from 'react';

const InputComponent = () => {
  const [usename, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const handleSubmit = () => {
    console.log({ username, password })
  }

  return (
    <form>
        <label htmlFor='username'>username</label>
        <input
          id="username"
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor='password'>password</label>
        <input
          id='password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type='submit'>Submit</button>
    </form>
    )
}
```
At first glance nothing is wrong with this code all walking normally, but if you want make you own component do not re-render even thought value on state changes, useRef is choices.

```jsx:JSX
import { useRef } from 'react';

const InputComponent = () => {
  const usernameRef = useRef(null)
  const passwordRef = useRef(null)

  const handleSubmit = () => {
    console.log({
        username: usernameRef.current.value,
        password: passwordRef.current.value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='username'>username</label>
        <input id='username' type='text' ref={usernameRef} required />

        <label htmlFor='password'>password</label>
        <input id='password'type='password' ref={passwordRef} required />

         <button type='submit'>Submit</button>
    </form>
    )
}
```
Look a like more clean than using *useState*. **Thank you for reading!**