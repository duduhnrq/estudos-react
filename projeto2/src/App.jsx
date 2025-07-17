import Title from "./title"

function App() {
  return (
    <div>
      <Title color="blue" paragraph={false} />
      <Title paragraph={true} />
      <Title color="red" />
      <Title />
    </div>
  ) 
}

export default App