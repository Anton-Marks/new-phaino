let translations = {};

const baseWorld = 'phaino-'
const nameDataOptionLang = 'data-default-i18n';
const nameOptionLang = 'data-option-i18n';

const optionLang = {
    0: "esp",
    1: "eng"
}

const fetchContent = async (optionLang) => {
    const response = await fetch(`lang/${optionLang}.json`);
    const data = await response.json();
    translations = data;

    if (translations) {
        translatePage( translations);
    }
    
};

const setTranslateMenu = (options) => {

    Object.entries(options).forEach(([key, val]) => {
        document.querySelector(`#${baseWorld}${key}`).textContent = val
    });
    
}

const setTranslateSections = (options) => {

    Object.entries(options).forEach(([key, val]) => {
        document.querySelector(`#${baseWorld}${key}`).textContent = val
    });

}

const translatePage = ( data ) => {

    if (Object.keys(data.menu).length > 0) {
        setTranslateMenu(data.menu)
    }

    if (Object.keys(data.sections).length > 0) {
        setTranslateSections(data.sections)
    }

};


const switcher = document.querySelector('#localization-switcher-phaino');

switcher.addEventListener('click', (e) => {

    const option = parseInt(e.target.getAttribute(nameOptionLang))
    
    e.target.setAttribute(nameDataOptionLang, optionLang[option]);
    e.target.setAttribute(nameOptionLang, option === 0 ? 1 : 0);

    const acronimLang = e.target.getAttribute(nameDataOptionLang)

    if (acronimLang) {
        fetchContent(acronimLang);
    }
    
});