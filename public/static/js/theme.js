export default class themeChanger {
    /**
     * @constructor
     */
    constructor() {}
    _addDarkTheme() {
        const darkThemeLinkEl = document.createElement('link')
        darkThemeLinkEl.setAttribute('rel', 'stylesheet')
        darkThemeLinkEl.setAttribute('href', 'static/css/app-dark.min.css')
        darkThemeLinkEl.setAttribute('id', 'app-dark-style')

        const docHead = document.querySelector('head')
        docHead.append(darkThemeLinkEl)

        //For Bootstrap Dark Mode
        const bootThemeLinkEl = document.createElement('link')
        bootThemeLinkEl.setAttribute('rel', 'stylesheet')
        bootThemeLinkEl.setAttribute('href', 'static/css/bootstrap-dark.min.css')
        bootThemeLinkEl.setAttribute('id', 'boot-dark-style')

        const bootHead = document.querySelector('head')
        bootHead.append(bootThemeLinkEl)
    }
    _removeDarkTheme() {
        const darkThemeLinkEl = document.querySelector('#app-dark-style')
        const parentNode = darkThemeLinkEl.parentNode
        parentNode.removeChild(darkThemeLinkEl)

        const bootThemeLinkEl = document.querySelector('#boot-dark-style')
        const childNode = bootThemeLinkEl.parentNode
        childNode.removeChild(bootThemeLinkEl)
    }
    _darkThemeSwitch() {
        const darkThemeLinkEl = document.querySelector('#app-dark-style')
        // const bootThemeLinkEl = document.querySelector('#boot-dark-style')
        if (!darkThemeLinkEl) {
            this._addDarkTheme()
        } else {
            this._removeDarkTheme()
        }
    }
}