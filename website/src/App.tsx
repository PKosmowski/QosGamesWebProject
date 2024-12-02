import Nav from "./Nav";


function MyButton() {
  return (
    <button>Hello, I'm a button.</button>
  );
}

export default function App() {
  return (
    <div>
      <Nav />
      <h1>Welcome to my app!</h1>
      <MyButton />
    </div>
  )
}