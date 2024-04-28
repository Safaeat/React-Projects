import "./App.css";
import "./components/Hero";
import Hero from "./components/Hero";
import "./components/navigation";
import Navigation from "./components/navigation";

const App = () => {
    return (
        <div>
            <Navigation />
            <Hero />
        </div>
    );
};

export default App;
