import React from 'react'
import { useTranslation } from 'react-i18next';

const Navbar = () => {
    const { t } = useTranslation();
  return (
      
    <nav>
        <h1>Logo</h1>
        <ul className="menuList">
            <li>{t("Home.1")}</li>
            <li>{t("About")}</li>
            <li>{t("News")}</li>
            <li>{t("Information")}</li>
            <li>{t("Contacts")}</li>
        </ul>
    </nav>
  )
}

export default Navbar