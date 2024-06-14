import Page from './page.js'

class DashboardPage extends Page {

    async open() {
        return super.open('app/timesheet-admin/dashboard-659e1a7a8547e15be747099b')
    }
}

export default new DashboardPage()