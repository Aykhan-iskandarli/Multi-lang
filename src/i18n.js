import i18n from 'i18next';
import translationAZ from "./Locales/az/translation.json";
import translationEN from "./Locales/en/translation.json";
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
const resources = {
    az: {
        translation: translationAZ
      },
    en: {
      translation: translationEN
    }
  };
 
i18n
  
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    resources,

    interpolation: {
      escapeValue: false, 
    }
  });


export default i18n;