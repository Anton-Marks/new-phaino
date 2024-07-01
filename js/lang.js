const baseWorld = 'phaino-'
const baseWorldMovil = 'phaino-m-'
const baseWorldTtlFig = 'phaino-ttl-'

const setTranslateMenu = (options) => {
    Object.entries(options).forEach(([key, val]) => {
        document.querySelector(`#${baseWorld}${key}`).textContent = val
        document.querySelector(`#${baseWorldMovil}${key}`).textContent = val
    });
}

const setTranslateSections = (options) => {
    Object.entries(options).forEach(([key, val]) => {
        document.querySelector(`#${baseWorld}${key}`).textContent = val
    });
}

const setTranslateFigures = (options) => {
    Object.entries(options).forEach(([key, val]) => {
        document.querySelector(`#${baseWorld}${key}`).textContent = val
        document.querySelector(`#${baseWorldTtlFig}${key}`).textContent = val
    });
}

const translatePage = ( data ) => {

    if (Object.keys(data.menu).length > 0) {
        setTranslateMenu(data.menu)
    }

    if (Object.keys(data.menu).length > 0) {
        setTranslateFigures(data.figures)
    }

    /*if (Object.keys(data.sections).length > 0) {
        setTranslateSections(data.sections)
    }*/

};

const fetchContent = async (optionLang) => {
    const response = await fetch(`lang/${optionLang}.json`);
    const data = await response.json();
    translations = data;

    if (translations) {
        translatePage( translations);
    }
    
};

const getFetchLanguage = (el) => {
    if (el) {
        const acronimLang = el.getAttribute('data-i18n')
        if (acronimLang) {
            fetchContent(acronimLang);
        }
    }
}

const changeCurrentClassLanguage = (currentNumber) => {
    const optionI18ns2 = currentNumber ===  0 ? 1 : 0;

    optionsFirst = document.querySelectorAll(`[data-option-i18n="${currentNumber}"]`)
    optionsSecond = document.querySelectorAll(`[data-option-i18n="${optionI18ns2}"]`)

    if (optionsFirst.length > 0) {
        optionsFirst.forEach(item => {
            item.classList.toggle('i18n-language-current');
        })
    }

    if (optionsSecond.length > 0) {
        optionsSecond.forEach(item => {
            item.classList.toggle('i18n-language-current');
        })
    }

}

const i18ns = document.querySelectorAll('[data-i18n]');

if (i18ns.length > 0) {
    i18ns.forEach(item => {
        item.addEventListener('click', function handleClick(e) {
            if (e.target.hasAttribute('data-i18n')) {
                if (!e.target.classList.contains('i18n-language-current')) {
                    const optionI18ns = parseInt(e.target.getAttribute('data-option-i18n'));
                    changeCurrentClassLanguage(optionI18ns);

                    getFetchLanguage(e.target);
                }
            }
        });
    });
}

