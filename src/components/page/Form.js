import React, { useEffect, useState } from 'react'

export const Form = () => {
  const [title, setTitle] = useState('')
  const [display, setDisplay] = useState(false)
  const [originalText, setOriginalText] = useState('')
  const handleChange = (e) => {
    // console.log('edede',e)
    setTitle(e.target.value)
    setOriginalText(e.target.value)
  }

  const updateValue = (e) => {
    e.preventDefault()
    // console.log('edede',e)
    setDisplay(true)
    setTitle('')

  }
  return (
    <div>
      <form>
        <label> <p>title</p> </label> <input type='text' value={title} onChange={(e) => handleChange(e)} />
        <button onClick={(e) => updateValue(e)}> render </button>

      </form>

      <p> {display ? originalText : ''}</p>
    </div>
  )
}
