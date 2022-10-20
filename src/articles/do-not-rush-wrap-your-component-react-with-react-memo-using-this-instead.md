---
id: 1
title: 'Do not rush wrap your component react with React.memo, using this instead!'
highlight: 'While your have children component re-renders because has data change on parent component? using this way instead React.memo '
tag: '#reactJS'
created: 'Oct, 10 2022'
timeRead: '9 minute read'
slug: 'do-not-rush-wrap-your-component-react-with-react-memo-using-this-instead'
---

```jsx:ChildrenComponent
export const ChildrenComponent = () => {

  console.count('Children component Render!')

  return (
    <section>
      <h1>This is Children Component!</h1>
    </section>
  )
}
```

```jsx:ParrentComponent.jsx
import { useState } from 'react'
import { ChildrenComponent } from './'

const Parent = () => {
  const [name, setName] = useState('')
  const handleSubmit = () => {
    // Api sending request code this
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Your name</label>
        <input 
          id='name'
          value={name}
          onChange={(evt) => setName(evt.target.value)} 
          type='text'
          />
      </form>
      <ChildrenComponent />
    </main>
  )
}

export default Parent;
```
<br/>
What do you thing about component code above ? There's nothing wrong with it all, 
but **ChildrenComponent** could be re-render multiple times if name state is change,
It happened bacause has data changes in the parent component.
There's actually nothing wrong with the re-renders if no heavy process in **Children Component** it.
Imagine has a heavy process let's say calling API from server with many data and i try create a function which calling **console.log()** 10.000.000 times. Its would be something bad for **optimization** your App. 
<br />
The way to solve it is wrap **ChildrenComponent** with **memo**, example code below!  

```jsx:ChildrenComponent
import { memo } from 'react';

export const ChildrenComponent = memo(function _() => {

  console.count('Children component Render!')

  return (
    <section>
      <h1>This is Children Component!</h1>
    </section>
  )
})
```  
<br />
This way has enough for prevent re-renders problems, But i have own way to resolve this problem
with **make separated component**.    

```jsx:ParrentComponent.jsx
import { useState } from 'react'
import { ChildrenComponent } from './'


const ChildrenComponentTwo = () => {
  const [name, setName] = useState('')
  const handleSubmit = () => {
    // Api sending request code this
  }
  return (
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Your name</label>
        <input 
          id='name'
          value={name}
          onChange={(evt) => setName(evt.target.value)} 
          type='text'
          />
      </form>
  )
}

const Parent = () => {
  return (
    <main>
      <ChildrenComponent />
      <ChildrenComponentTwo />
    </main>
  )
}

export default Parent;
```  
<br />
The above way make **ChildrenComponent** not re-renders again because there's nothing data changed in Parent component.
This is one way of dealing with these re-renders problem with React component.  
Thank you for reading!