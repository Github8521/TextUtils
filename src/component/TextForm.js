import React, { useState } from 'react'

export default function TextForm(props) {
  const [text, setText] = useState('Enter your text here')
  let funk1 = (event) => {
    setText(event.target.value)
  }
  let funk2 = () => {
    setText(text.toUpperCase())
    props.showAlert('converted to upper case','success')

  }
  let funk3 = () => {
    setText(text.toLowerCase())
    props.showAlert('converted to lower case','success')

  }
  let funk4 = () => {
    setText('')
    props.showAlert('text cleared','success')

  }
  let funk5 = () => {

    setText(text.charAt(0).toUpperCase() + text.toLowerCase().slice(1))
  }
  let funk6 = () => {
    navigator.clipboard.writeText(text)
    props.showAlert('text copied','success')

  }

  return (
    <div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1 className='mb-3 text-center'>Enter your text to analyze ...</h1>
        <textarea className="form-control" value={text} onChange={funk1} placeholder="Leave a comment here" id="floatingTextarea2" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: props.mode === 'dark' ? 'grey' : 'white', height: '200px' }}></textarea>
        <button disabled={text.length===0} type="button" onClick={funk2} className="btn btn-primary my-2 mx-2">Convert upper case</button>
        <button disabled={text.length===0} type="button" onClick={funk3} className="btn btn-primary my-2 mx-2">Convert lower case</button>
        <button disabled={text.length===0} type="button" onClick={funk4} className="btn btn-primary my-2 mx-2">Clear text</button>
        <button disabled={text.length===0} type="button" onClick={funk5} className="btn btn-primary my-2 mx-2">Captlize</button>
        <button disabled={text.length===0} type="button" onClick={funk6} className="btn btn-primary my-2 mx-2">copy text</button>
        <h1>Overview</h1>
        <h3>The no of words is :{text.split(' ').filter((element)=>{return element.length!==0}).length}.  The no of character is:{text.length}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}
