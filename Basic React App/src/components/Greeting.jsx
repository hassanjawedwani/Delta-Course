function Greeting({userName, color}) {
  return (
    <div style={{backgroundColor: color}}>
      <h1>Hello {userName}</h1>
    </div>
  )
}

export default Greeting;