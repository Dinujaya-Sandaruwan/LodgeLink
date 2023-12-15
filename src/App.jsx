import Companies from "./components/Companies";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
    </div>
  );
}

export default App;
