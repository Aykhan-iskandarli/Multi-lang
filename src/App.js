import './App.css';
import Navbar from './components/Navbar';
import Select from './components/Select';
import { useTranslation } from 'react-i18next';
function App() {
  const { t, i18n } = useTranslation();

  // const handleChange=(lang)=>{
  //     i18n.changeLanguage(lang)
  // }
  const handleClick =(lang)=>{
    i18n.changeLanguage(lang)
  }

  return (
    <div className="App">
     {/* <select>
        <option value="AZ" onChange={()=>handleChange("az")}>AZ</option>
        <option value="EN" onChange={()=>handleChange("en")}>EN</option>
    </select> */}
    <button onClick={()=>handleClick("az")}>az</button>
    <button onClick={()=>handleClick("en")}>en</button>
      <nav>
        <h1>Logo</h1>
        <ul className="menuList">
        <p>{t('Home')}</p>

        </ul>
    </nav>
    </div>
  );
}

export default App;
