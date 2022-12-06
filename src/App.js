// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import './style.css';
import Alert from './components/Alert';
function App() {
  const [mode, setMode] = useState('light'); //Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1400);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#13202d'
      showAlert("Dark Mode was enabled","success")
      document.title = 'Textutils - Dark Mode'
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode was enabled","success")
      document.title = 'Textutils - Light Mode'
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <TextForm heading="Enter the text to analyse below" mode={mode} showAlert={showAlert}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
