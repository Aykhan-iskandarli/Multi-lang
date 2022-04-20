import React from 'react'
import { useTranslation } from 'react-i18next';


const Select = () => {
  const { t, i18n } = useTranslation();

    const handleChange=(lang)=>{
        i18n.changeLanguage(lang)
    }
  return (
    <select>
        <option value="AZ" onChange={()=>handleChange("az")}>AZ</option>
        <option value="EN" onChange={()=>handleChange("en")}>EN</option>
    </select>
  )
}

export default Select