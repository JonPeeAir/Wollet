import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <div class="flex flex-col gap-8 justify-center items-center p-32">
      <h1 class="text-6xl font-bold text-center">Welcome to your Wollet</h1>
      <button class="btn" id="btn" disabled>
        Add bank
      </button>
    </div>
  );
};

export default App;
