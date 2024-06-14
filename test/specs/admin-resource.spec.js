import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/timesheet/login.page.js'
import DashboardPage from '../pageobjects/timesheet/dashboard.page.js'
import ResourcePage from '../pageobjects/timesheet/resource.page.js'
import ResourcePageDetails from '../pageobjects/timesheet/resource-details.page.js'

describe('FITUR RESOURCES', () => {
    before('Login Timesheet App', async () => {
        await LoginPage.open()
        await LoginPage.userLogin()
    })
    
    it('RES_001 - Klik Menu Resources', async () => {  
        await DashboardPage.open()   
        await ResourcePage.openResourceMenu()
        await expect(ResourcePage.pageTitleRes).toBeDisplayed()
        await expect(ResourcePage.pageTitleRes).toHaveText('Resource List')
    })

    it('RES_002 - Pilih Row Resource List', async () => {
        await ResourcePage.selectRow()
        await expect(ResourcePage.btnEditRes).toBeEnabled()
        await expect(ResourcePage.btnViewRes).toBeEnabled()
        await expect(ResourcePage.btnDeleteRes).toBeEnabled()
    })

    it.only('RES_003 - Batalkan Pilih Row Resource List', async () => {
        await ResourcePage.open()
        await ResourcePage.unselectRow()   
        await expect(ResourcePage.btnEditRes).toBeDisabled()
        await expect(ResourcePage.btnViewRes).toBeDisabled()
        await expect(ResourcePage.btnDeleteRes).toBeDisabled()
    })

    it('RES_016 - Klik Tombol New Resource', async () => {
        await ResourcePage.addResourceForm()
        await expect(ResourcePage.addResFormTitle).toBeDisplayed()
        await expect(ResourcePage.addResFormTitle).toHaveText('Resource Form')
    })

    it('RES_022 - Batalkan Tambah Resource Baru', async () => {
        const resData = { resName: "Rangga", nip: "000203", 
                          email: "rangga@gmail.com", startDate: "17 April, 2024", 
                          endDate: "17 June, 2024"
        }

        await ResourcePage.fillAddResourceForm(resData)
        await ResourcePage.addResource()
        await ResourcePage.cancelAddResource()
    })

    it('RES_039 - Klik Tombol Edit Selected Resource', async () => {
        await ResourcePage.editResourceForm()
        await expect(ResourcePage.editResFormTitle).toBeDisplayed()
        await expect(ResourcePage.editResFormTitle).toHaveText('Resource Form')
    })

    it('RES_055 - Klik Tombol View Selected Resource', async () => {
        await ResourcePage.viewResource()
        await expect(ResourcePageDetails.pageTitleResDet).toBeDisplayed()
        await expect(ResourcePageDetails.pageTitleResDet).toHaveText('Resource Details')
    })

    it('RES_056 - Klik Tombol Delete Selected Resource', async () => {
        await ResourcePage.deleteResourceForm()
        await expect(ResourcePage.delResFormTitle).toBeDisplayed()
        await expect(ResourcePage.delResFormTitle).toHaveText('The resource will be deleted permanently')
    })
})