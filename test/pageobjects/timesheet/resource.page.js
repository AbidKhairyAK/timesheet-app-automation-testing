import Page from './page.js';
import ResourceDetailsPage from './resource-details.page.js'

class ResourcePage extends Page {

    // Class Getter Selectors
    get menuRes() { return $('.sc-cbfGDZ.drnJGs > div:nth-child(3)') }
    get pageTitleRes() { return $('[data-widgetname-cy="resource_page_title"] span') }
    get btnDeleteRes() { return $('[data-widgetname-cy="delete_modal_trigger"]') }
    get btnViewRes() { return $('[data-widgetname-cy="detail_resource_button"]') }
    get btnEditRes() { return $('[data-widgetname-cy="edit_modal_trigger"] ') }
    get btnAddRes() { return  $('[data-widgetname-cy="create_modal_trigger1"] ')}
    get firstRow() { return $('[role="button"][data-rowindex="0"]') }
    get firstRowNip() { return this.firstRow.$('[data-colindex="0"]') }
    get firstRowName() { return this.firstRow.$('[data-colindex="1"]') }
    get firstRowEmail() { return this.firstRow.$('[data-colindex="2"]') }
    get firstRowContractStart() { return this.firstRow.$('[data-colindex="3"]') }
    get firstRowContractEnd() { return this.firstRow.$('[data-colindex="4"]') }
    get firstRowStatus() { return this.firstRow.$('[data-colindex="5"]') }
    get thirdRow() { return $('[role="button"][data-rowindex="2"]') }
    get selectedRow() { return $('.selected-row') }
    get searchInput() { return $('.t--search-input input') }
    get prevPage() { return $('.t--table-widget-prev-page') }
    get nextPage() { return $('.t--table-widget-next-page') }

    // Add Resource Form Getter Selectors
    get addResFormTitle() { return $('[data-widgetname-cy="create_modal_title"]')}
    get addResName() { return $('[data-widgetname-cy="create_resource_name"] [type="text"]') }
    get addResNip() { return $('[data-widgetname-cy="create_resource_nip"] [type="text"]') }
    get addResEmail() { return $('[data-widgetname-cy="create_resource_email"] [type="text"]') }
    get addResContractStart() { return $('[data-widgetname-cy="contract_start_date"] [type="text"]') }
    get addResContractEnd() { return $('[data-widgetname-cy="contract_end_date"] [type="text"]') }
    get addResDefaultPassword() { return $('[data-widgetname-cy="password_input"] [type="text"]') }
    get addResBtnCancel() { return $('[data-widgetname-cy="create_form_cancel"]') }
    get addResBtnSubmit() { return $('[data-widgetname-cy="create_form_submit"]') }

    // Edit Selected Resource Form Getter Selectors
    get editResFormTitle() { return $('[data-widgetname-cy="update_modal_title"]') }
    get editResName() { return $('[data-widgetname-cy="update_resource_name"] [type="text"]') }
    get editResNip() { return $('[data-widgetname-cy="update_resource_nip"] [type="text"]') }
    get editResEmail() { return $('[data-widgetname-cy="update_resource_email"] [type="text"]') }
    get editResContractStart() { return $('[data-widgetname-cy="contract_start_update"] [type="text"]') }
    get editResContractEnd() { return $('[data-widgetname-cy="contract_end_update"] [type="text"]') }
    get editResBtnCancel() { return $('[data-widgetname-cy="update_form_cancel"]') }
    get editResBtnSubmit() { return $('[data-widgetname-cy="update_form_submit"]"]') }

    // Delete Selected Resource Getter Selectors
    get delResFormTitle() { return $('[data-widgetname-cy="delete_confirm_text"]')}
    get delBtnCancel() { return $('[data-widgetname-cy="delete_confirm_cancel"]') }
    get delBtnSubmit() { return $('[data-widgetname-cy="delete_confirm_submit"]') }

    // Class Functions
    async open() {
        await super.open('app/timesheet-admin/resources-659e1ab68547e15be747099f')
    }

    async openResourceMenu() {
        await this.menuRes.waitForDisplayed()
        await this.menuRes.click()
    }

    async selectRow() {
        await this.thirdRow.waitForDisplayed()
        await this.thirdRow.click()
    }

    async unselectRow() {
        await this.selectedRow.waitForDisplayed()
        await this.selectedRow.click()
    }

    // Add Resource Form Functions
    async addResourceForm() {
        await this.btnAddRes.isEnabled()
        await this.btnAddRes.click()
    }

    async fillAddResourceForm({ name, 
                                nip, 
                                email, 
                                startDate, 
                                endDate }) {
        
        await this.addResFormTitle.waitForDisplayed()
        await this.addResName.setValue(name)
        await this.addResNip.setValue(nip)
        await this.addResEmail.setValue(email)
        await this.fillContractDateByInput(startDate, endDate)
    }

    async fillContractDateByInput(startDate, endDate) {
        await this.addResContractStart.setValue(startDate)
        await this.addResContractEnd.setValue(endDate)
    }

    async fillContractDateByDatepicker() {

    }

    async clearDate() {

    }

    async todayDate() {

    }

    async addResource() {
        await this.addResBtnSubmit.click()
    }

    async cancelAddResource() {
        await this.addResBtnCancel.click()
    }

    // Edit Resource Form Functions
    async editResourceForm() {
        await this.selectRow()
        await this.btnEditRes.isEnabled()
        await this.btnEditRes.click()
    }

    async fillEditResourceForm({ name, 
                                 nip, 
                                 email, 
                                 startDate, 
                                 endDate }) {
        
        await this.editResFormTitle.waitForDisplayed()
        await this.editResName.setValue(name)
        await this.editResNip.setValue(nip)
        await this.editResEmail.setValue(email)
        await this.editResContractStart.setValue(startDate)
        await this.editResContractEnd.setValue(endDate)
    }

    async editResource() {
        await this.editResBtnSubmit.click()
    }

    async cancelEditResource() {
        await this.editResBtnCancel.click()
    }

    // View Resource Functions
    async viewResource() {
        await this.selectRow()
        await this.btnViewRes.isEnabled()
        await this.btnViewRes.click()
        }
        
        // Delete Resource Form Functions
    async deleteResourceForm() {
        await this.selectRow()
        await this.btnDeleteRes.isEnabled()
        await this.btnDeleteRes.click()
    }

    async cancelDeleteResource() {
        await this.delBtnCancel.click()
    }

    async deleteResource() {
        await this.delBtnSubmit.click()
    }
}

export default new ResourcePage();