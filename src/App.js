import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import './style.css';
function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyse below" />
      </div>
    </>
  );
}

export default App;
