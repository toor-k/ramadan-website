/* translation.js */
const translations = {
  en: {
    prayerTimes: "Prayer Times",
    eatingTimes: "Eating Times",
    suhur: "Suhur",
    foodRecommendation: "Food Recommendation",
    recommendButton: "Get Food Recommendation",
    quran: "Quran",
    tips: "Tips",
    prayerTimesContent: "Below are the prayer times for today. Adjust as necessary for your location: Fajr: 4:30 AM, Dhuhr: 12:30 PM, Asr: 4:00 PM, Maghrib: 6:30 PM, Isha: 8:00 PM.",
    eatingTimesContent: "Fasting begins at dawn and ends at sunset. Iftar is served at sunset, and Suhur should be taken before dawn.",
    suhurContent: "Suhur is the pre-dawn meal that provides energy for the day. It is recommended to have a balanced meal rich in protein and complex carbohydrates.",
    quranContent: "Explore the Quran with daily verses, translations, and commentaries. <a href='https://quran.com' target='_blank'>Read Online</a>",
    tipsContent: "Tips for a Healthy Ramadan:<ul><li>Stay hydrated</li><li>Plan balanced meals</li><li>Maintain regular prayer</li><li>Engage in spiritual reflection</li></ul>"
  },
  fr: {
    prayerTimes: "Horaires de Prière",
    eatingTimes: "Heures de Repas",
    suhur: "Suhur",
    foodRecommendation: "Recommandation Alimentaire",
    recommendButton: "Obtenir une recommandation",
    quran: "Coran",
    tips: "Conseils",
    prayerTimesContent: "Voici les horaires de prière d'aujourd'hui. Adaptez-les en fonction de votre localisation: Fajr: 4:30, Dhuhr: 12:30, Asr: 4:00, Maghrib: 6:30, Isha: 8:00.",
    eatingTimesContent: "Le jeûne commence à l'aube et se termine au coucher du soleil. L'Iftar est servi au coucher du soleil, et le Suhur doit être pris avant l'aube.",
    suhurContent: "Le Suhur est le repas avant l'aube qui fournit l'énergie nécessaire pour la journée. Il est recommandé d'avoir un repas équilibré riche en protéines et glucides complexes.",
    quranContent: "Découvrez le Coran avec des versets quotidiens, des traductions et des commentaires. <a href='https://quran.com' target='_blank'>Cliquez ici pour en savoir plus</a>",
    tipsContent: "Conseils pour un Ramadan sain:<ul><li>Restez hydraté</li><li>Planifiez des repas équilibrés</li><li>Maintenez la prière régulière</li><li>Engagez-vous dans la réflexion spirituelle</li></ul>"
  },
  ar: {
    prayerTimes: "مواقيت الصلاة",
    eatingTimes: "أوقات الإفطار",
    suhur: "السحور",
    foodRecommendation: "توصية طعام",
    recommendButton: "احصل على توصية",
    quran: "القرآن",
    tips: "نصائح",
    prayerTimesContent: "فيما يلي مواقيت الصلاة لليوم. اضبطها حسب موقعك: الفجر: 4:30 صباحاً، الظهر: 12:30 مساءً، العصر: 4:00 مساءً، المغرب: 6:30 مساءً، العشاء: 8:00 مساءً.",
    eatingTimesContent: "يبدأ الصوم من الفجر وينتهي عند الغروب. يُقدم الإفطار عند الغروب، ويجب تناول السحور قبل الفجر.",
    suhurContent: "السحور هو الوجبة قبل الفجر التي تزودك بالطاقة لليوم. يُنصح بتناول وجبة متوازنة غنية بالبروتينات والكربوهيدرات المعقدة.",
    quranContent: "استكشف القرآن مع آيات يومية وترجمات وتفاسير. <a href='https://quran.com' target='_blank'>اقرأ المزيد</a>",
    tipsContent: "نصائح لرمضان صحي:<ul><li>حافظ على شرب الماء</li><li>خطط لوجبات متوازنة</li><li>استمر في أداء الصلاة</li><li>خصص وقتاً للتأمل الروحي</li></ul>"
  }
};

let currentLanguage = "en";

function setLanguage(lang) {
  currentLanguage = lang;
  // Save the selected language so it persists across refreshes
  localStorage.setItem("selectedLanguage", lang);
  // Update all elements with the data-key attribute
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang] && translations[lang][key]) {
      let translationText = translations[lang][key];
      // Use innerHTML if the translation contains HTML tags
      if (translationText.indexOf("<") !== -1) {
        el.innerHTML = translationText;
      } else {
        el.textContent = translationText;
      }
    }
  });
  // Update the random wise quote when language changes
  if (typeof updateQuote === "function") {
    updateQuote();
  }
}

// Set default language on load (if saved language exists)
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("selectedLanguage") || "en";
  setLanguage(savedLang);
});
