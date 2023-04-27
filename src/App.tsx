import { createSignal, type Component } from "solid-js";
import { Button } from "components";

const App: Component = () => {
  const [count, setCount] = createSignal(0);

  return (
    <div>
      <h1 class="text-3xl font-bold text-red-500 underline">{count()}</h1>
      <button onClick={() => setCount(count() + 10)}>Click</button>
      <div class="bg-black text-red-500">
        <h1>Yare yare</h1>
      </div>
      <Button class="ml-10 mt-4">Button</Button>
    </div>
  );
};

export default App;
