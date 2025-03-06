import "./App.css";
import { useQuery } from "@tanstack/react-query";

function App() {
  const { data } = useQuery({
    queryKey:['todo'],
    queryFn:async () => await (await fetch("http://localhost:8000/todo")).json()
  });

  console.log("data", data);

  return (
    <div className="App">
      <h1>setup</h1>
    </div>
  );
}
export default App;
