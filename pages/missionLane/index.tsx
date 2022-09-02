import { ChangeEvent, FormEvent, useState } from "react"

export default function Form() {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const isValid = username.length > 0 && password.length >= 6

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log('username --', username)
    console.log('password --', password)
    console.log('password len --', password.length)
  }

  function onUsernameChange(e: ChangeEvent<HTMLInputElement>) {
    setUsername(e.target.value)
  }

  function onPasswordChange(e: ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
  }
  
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
        <form onSubmit={onSubmit}>
          <input type="text" onChange={onUsernameChange}/>
          <input type="password" onChange={onPasswordChange}/>
          <input type="submit" disabled={!isValid}/>
        </form>
      </div>
    </div>
  )
}