import { browser } from '@wdio/globals'
import { Key } from 'webdriverio'

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open(path) {
        browser.maximizeWindow()
        return browser.url(`https://timesheet.app.prosigmaka.com/${path}`)
    }

    // get document.title
    getTitle() {
        return browser.getTitle()
    }

    getUrl() {
        return browser.getUrl()
    }

    // this method is used to address the wdio's clearValue() 
    // because it didn't clear input area that set a default value
    clearInput() {
        browser.keys([Key.Ctrl, 'a'])
        browser.keys(Key.Backspace)
    }
}
