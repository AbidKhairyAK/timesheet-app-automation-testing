import Page from '../timesheet/page.js'

class ResourceDetailsPage extends Page {

    get pageTitleResDet() { return $('[data-widgetname-cy="page_title"]') }
}

export default new ResourceDetailsPage()