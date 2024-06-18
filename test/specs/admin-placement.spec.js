import { browser } from '@wdio/globals'

describe('Login', () => {
    it('login dengan valid', async () => {
        await browser.url('https://timesheet.app.prosigmaka.com/app/timesheet-admin/placements-65a89dd0dda64114fdf4ce54')
        await $('input[name="username"]').setValue('andinira25@gmail.com')
        await $('input[name="password"]').setValue('kaepsong25')
        await $('button[type="submit"]').click()
        const judul = await $('div[class="sc-iZGRgC iMaXdc"]')
        expect (judul).toHaveText('Timesheet Admin')
        await browser.pause(5000)
    })

    it('PF_001 User mengklik button back pada placement form', async () => {                        
        await browser.url('https://timesheet.app.prosigmaka.com/app/timesheet-admin/placements-65a89dd0dda64114fdf4ce54')
        await $('[data-widgetname-cy="AddButton"]').click()
        await $('[data-widgetname-cy="BackButton"]').click()
        const judulPlacement = await $('[data-widgetname-cy="PlacementListTitle"]')
        expect (judulPlacement).toHaveText('Placement List')
        await browser.pause(5000)
    })

    it('PF_002 User membuat placement baru dengan menginput data yang valid', async () => {                        
        await browser.url('https://timesheet.app.prosigmaka.com/app/timesheet-admin/placements-65a89dd0dda64114fdf4ce54')
        await $('[data-widgetname-cy="AddButton"]').click()
        await browser.pause(2000)

        await $('[data-widgetname-cy="ResourceSelection"]').click()
        await browser.pause(2000)
        await $('.menu-virtual-list > div > div:nth-child(4) .menu-item-link').click()

        await $('[data-widgetname-cy="ClientNameSelection"]').click()
        await browser.pause(2000)
        await $('.menu-virtual-list > div > div:nth-child(3) .menu-item-link').click()

        await $('[data-widgetname-cy="PRFInput"]').click()
        await $('//*[@id="auto_1544bhrvtv"]/div/div/div[2]/div/span/span/div/input').setValue('12345')

        const inputEndDate = await $('//*[@id="auto_38uv4p4hv6"]/div/div/div[2]/div/span/span/span/span/div/input') 
        await inputEndDate.setValue('20 June, 2024')
        await inputEndDate.addValue('\uE007')

        await $('[data-widgetname-cy="PositionSelection"]').click()
        await browser.pause(2000)
        await $('.menu-virtual-list > div > div:nth-child(3) .menu-item-link').click()
        
        await $('[data-widgetname-cy="PlacementLocationInput"]').click()
        await $('//*[@id="auto_8g8e0dekfr"]/div/div/div[2]/div/span/span/div/input').setValue('Jakarta')

        await $('[data-widgetname-cy="TypeSelect"]').click()
        await $('.menu-virtual-list > div > div:nth-child(1) .menu-item-link').click()

        await $('[data-widgetname-cy="StatusSelect"]').click()
        await $('.menu-virtual-list > div > div:nth-child(1) .menu-item-link').click()
    
        const submitButton = await $('[data-widgetname-cy="SubmitButton"]')
        await submitButton.waitForClickable()
        await submitButton.click()
        
        
        await browser.pause(5000)
        
    })


})