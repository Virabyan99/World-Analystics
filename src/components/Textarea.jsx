import { useState } from 'react'
import Warning from './Warning'

export default function Textarea({text, setText}) {

  const [warningText, setWarningText] = useState('')


  const handleChange = (e) => {
    let newText = e.target.value

    // Basic validation
    if (newText.includes('<script>')) {
      setWarningText('No <script> tag Allowed')

      newText = newText.replace('<script>', '')
    } else if (newText.includes('@')) {
      setWarningText('no @ symbol allowed')

      newText = newText.replace('@', '')
    } else {
      setWarningText("")
    }

    setText(newText)
  }

  return (
    <div className="textarea">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Enter your text"
        spellCheck="false"></textarea>

      {<Warning warningText={warningText} />}
    </div>
  )
}
