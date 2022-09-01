import { useState } from "react"

export default function Form() {
  const username = useState<string>('')
  const password = useState<string>('')

  function onSubmit() {}
  
  return (
    <div>
      <h1>Mission lane form</h1>
      <h2>Acceptance criteria</h2>
      <ul>
        <li>Input for user name</li>
        <li>Input for password</li>
        <li>Submit button, conosle.log username on submit</li>
        <li>Form validation - both inputs have values, pw has 6 or more chars</li>
      </ul>

      <div>
        <form onSubmit={onSubmit}></form>
      </div>

    </div>
  )
}