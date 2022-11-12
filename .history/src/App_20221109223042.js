import Header from './components/Header';
import Input from './components/Input';
import './App.css';

function App() {
  return (
    <div>
      <div className=" flex flex-col items-center justify-start md:flex-row md:justify-between px-8 h-screen bg-sky-600 ">
        <Header />
        <Input />
      </div>
    </div>
  );
}

export default App;
