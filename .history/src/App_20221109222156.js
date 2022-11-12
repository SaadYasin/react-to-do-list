import Header from './components/Header';
import Input from './components/Input';
import './App.css';

function App() {
  return (
    <div className="bg-sky-600 h-screen flex flex-col items-center md:flex-row md:justify-between px-8">

      <div className="container">
      <Header />
      <Input />

      </div>
    </div>
  );
}

export default App;