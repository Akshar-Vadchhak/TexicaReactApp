import './App.css';
import { useState } from 'react'

function App() {
  const [text, newText] = useState("")

  const upperCese = () => {
    // console.log("" + text)
    let tx = text
    let uppCase = tx.toUpperCase();
    newText(uppCase)
  }

  const lowerCass = () => {
    let low = text
    let lowCase = low.toLowerCase();
    newText(lowCase)
  }

  const clear = () => {
    newText("")
  }


  const hendleChange = (event) => {
    // console.log("on clange")
    newText(event.target.value)
  }

  const [myStyle, SetNewStyle] = useState({
    color: 'rgb(31, 31, 31)',
    backgroundColor: 'white'
  })

  const [setBtn, setNewBtn] = useState("Enable Dark Mode")

  let changeMode = () => {
      if (myStyle.color === 'white') {
        SetNewStyle({
          color: 'rgb(31, 31, 31)',
          backgroundColor: 'white'
        })
        setNewBtn("Enable Dark Mode");
      }
      else{
        SetNewStyle({
          color: 'white',
          backgroundColor: 'rgb(31, 31, 31)'
        })
        setNewBtn("Enable Light Mode");
      }
  }


  return (
    <>
      <div className="cantainatr" style={myStyle}>
        <button className="btn" onClick={changeMode}>{setBtn}</button>
        <h1 >Play With Your Own Text Bro..</h1>
        <textarea name="Text" rows="8" className='textBox' value={text} onChange={hendleChange}></textarea>
        <br />
        <button className="btn" onClick={upperCese}>Upper Case</button>
        <button className="btn" onClick={lowerCass}>Lower Case</button>
        <button className="btn" onClick={clear}>Clear</button>
        <h2>Your summary</h2>
        <p>{text.split(" ").length} words And {text.length} Characters</p>
      </div>
    </>
  );
}

export default App;