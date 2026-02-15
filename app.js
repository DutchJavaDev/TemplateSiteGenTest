window.onload = async (event) => {

  // Set default language
  const supportedLanguages = ['en', 'es', 'fr'];
  const languageCookieName = 'langCache';
  const defaultLanguage = 'en';
  const expirationInDays = 365;

  if(!getCookie(languageCookieName)) {
    setCookie(languageCookieName, defaultLanguage, expirationInDays);
  }

  // Get the current language from cookies
  const currentLanguage = getCookie(languageCookieName) || defaultLanguage;

  // load json
  const languages = await fetch('lang.json')
    .then(response => response.json())
    .then(data => data);

    console.log('Languages loaded:', languages);
    updateView();

  const languageSelect = document.getElementById('languageSelect');

  // Set the select value to the current language
  languageSelect.value = currentLanguage;

  languageSelect.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    setCookie(languageCookieName, selectedLanguage, expirationInDays);
    updateView();
  });

  function updateView(){
    const currentLanguage = getCookie(languageCookieName) || defaultLanguage;
    
    const title = document.getElementById('cad');
    title.textContent = languages[currentLanguage]['cakesTitle'];

    const title2 = document.getElementById('hsc');
    title2.textContent = languages[currentLanguage]['cookiesTitle'];

    const orderNow = document.getElementById('orno');
    orderNow.textContent = languages[currentLanguage]['orderNow'];

    const birthdayCakes = document.getElementById('bc');
    birthdayCakes.textContent = languages[currentLanguage]['birthdayCakes'];
    
    const cupCakes = document.getElementById('cc');
    cupCakes.textContent = languages[currentLanguage]['cupCakes'];
    
    const cakeJars = document.getElementById('cj');
    cakeJars.textContent = languages[currentLanguage]['cakeJars'];
    
    const cheesecakes = document.getElementById('che');
    cheesecakes.textContent = languages[currentLanguage]['cheesecakes'];

    const nuttelaFilled = document.getElementById('nf');
    nuttelaFilled.textContent = languages[currentLanguage]['nuttelaFilled'];
    
    const oreoExplosion = document.getElementById('oe');
    oreoExplosion.textContent = languages[currentLanguage]['oreoExplosion'];
    
    const caramelDelight = document.getElementById('cd');
    caramelDelight.textContent = languages[currentLanguage]['caramelDelight'];

    const birthdayBlast = document.getElementById('bb');
    birthdayBlast.textContent = languages[currentLanguage]['birthdayBlast'];

    const priceList = document.getElementById('priceListTitle');
    priceList.textContent = languages[currentLanguage]['priceList'];

    const cakesCaption = document.getElementById('cakesCaption');
    cakesCaption.textContent = languages[currentLanguage]['cakesCaption'];

    const cookiesCaption = document.getElementById('cookiesCaption');
    cookiesCaption.textContent = languages[currentLanguage]['cookiesCaption'];
  }

















  function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
};  