import { browser, $, expect } from '@wdio/globals'


describe('TimeTale - Timesheet', () => {
    describe('Uji Modul Login', () => {
        it('LOG_001 - Login dengan alamat email valid dan password default', async () => {
            await browser.url('timetale.app.prosigmaka.com')
            await $('input[type="email"]').setValue('rahman@gmail.com')

            // jika akan mencoba menggunakan password default ('123@PSM), comment terlebih dahulu password ("cobacoba123")
            await $('input[type="password"]').setValue('cobacoba123')

            // digunakan ketika reset password
            // await $('input[type="password"]').setValue('123@PSM')
    
            // await $('//*[@id="auto_fqz6ws5ld2"]').click()
            await $('[data-widgetname-cy="login_button"]').click()
    
            await browser.pause(5000)

            // digunakan ketika reset password
    
            // await $('input[placeholder="Enter new password"]').setValue('cobacoba123')
            // await $('input[placeholder="Confirm new password"]').setValue('cobacoba123')
    
            // await $('[data-widgetname-cy="Button1"]').click()
    
            // await $('input[type="email"]').setValue('rahman@gmail.com')
            // await $('input[type="password"]').setValue('cobacoba123')
    
            // await $('[data-widgetname-cy="login_button"]').click()
    
            const titlePage = await $('[data-widgetname-cy="Text1"]')
            expect (titlePage).toHaveText('Dashboard')
    
            await browser.pause(5000)
    
        })
    })
    
    describe.skip('Uji Modul Dashboard', () => {
        it('DB_002 - User klik Go to timesheet page', async () => {
            await browser.url('timetale.app.prosigmaka.com')
                
            await $('[data-widgetname-cy="Button1"]').click()
    
            const titlePage2 = await $('[data-widgetname-cy="Text5"]')
            expect (titlePage2).toHaveText('Timesheet')
    
            await browser.pause(5000)
        })
    
    })

    describe.skip('Uji Modul Print Timesheet', () => {
        it.skip('PT_001 - User klik Print Timesheet', async () => {
            await browser.url('https://timetale.app.prosigmaka.com/app/timetale/timesheet-65dda8906215144bea139c32')
                
            await $('[data-widgetname-cy="IconButton2"]').click()
    
            const titlePage2 = await $('[data-widgetname-cy="Print"]')
            expect (titlePage2).toHaveText('Print')
    
            await browser.pause(5000)
        })

        it('PT_002 - User mengisi data print timesheet dengan data yang lengkap dan valid', async () => {
            await browser.url('https://timetale.app.prosigmaka.com/app/timetale/timesheet-65dda8906215144bea139c32')
                
            await $('[data-widgetname-cy="IconButton2"]').click()
    
            await $('//*[@id="auto_llx7rr9gr0"]/div/div/div[2]').click()
            await $('//*[@id="auto_llx7rr9gr0"]/div/div/div[2]/div/span/span/span/span/div/input').setValue('2024-05-30')

            await $('//*[@id="auto_v460ugqhym"]/div/div/div[2]').click()
            await $('//*[@id="auto_v460ugqhym"]/div/div/div[2]/div/span/span/span/span/div/input').setValue('2024-06-20')

            await $('//*[@id="auto_yulv1p58w7"]/div/div/div[2]/div/span/span/div/input').setValue('satu')
            // await $('//*[@id="auto_zxtd6zwwhz"]/div/div/div[2]/div/span/span/div/input').setValue('dua')
            // await $('//*[@id="auto_04tgjshe2l"]/div/div/div[2]/div/span/span/div/input').setValue('tiga')
            // await $('//*[@id="auto_860v6r1xfm"]/div/div/div[2]/div/span/span/div/input').setValue('empat')
            // await $('//*[@id="auto_70g4bid7ev"]/div/div/div[2]/div/span/span/div/input').setValue('lima')
            // await $('//*[@id="auto_yy8f6tcjdp"]/div/div/div[2]/div/span/span/div/input').setValue('enam')

            await browser.pause(5000)

            await $('[data-widgetname-cy="submit_print_button"]').click()

            const titlePrint = await $('//*[@id="ToastId185"]/div[1]')
            expect (titlePrint).toHaveText('Timesheets printed successfully!')
    
            await browser.pause(5000)
        })

        it('PT_003 - User mengosongkan bagian start date pada modul print', async () => {
            await browser.url('https://timetale.app.prosigmaka.com/app/timetale/timesheet-65dda8906215144bea139c32')
                
            await $('[data-widgetname-cy="IconButton2"]').click()
    
            await $('//*[@id="auto_llx7rr9gr0"]/div/div/div[2]').click()
            await $('//*[@id="auto_llx7rr9gr0"]/div/div/div[2]/div/span/span/span/span/div/input').setValue('2024-05-30')

            // await $('//*[@id="auto_v460ugqhym"]/div/div/div[2]').click()
            // await $('//*[@id="auto_v460ugqhym"]/div/div/div[2]/div/span/span/span/span/div/input').setValue('2024-06-20')

            await $('//*[@id="auto_yulv1p58w7"]/div/div/div[2]/div/span/span/div/input').setValue('satu')
            await $('//*[@id="auto_zxtd6zwwhz"]/div/div/div[2]/div/span/span/div/input').setValue('dua')
            await $('//*[@id="auto_04tgjshe2l"]/div/div/div[2]/div/span/span/div/input').setValue('tiga')
            await $('//*[@id="auto_860v6r1xfm"]/div/div/div[2]/div/span/span/div/input').setValue('empat')
            await $('//*[@id="auto_70g4bid7ev"]/div/div/div[2]/div/span/span/div/input').setValue('lima')
            await $('//*[@id="auto_yy8f6tcjdp"]/div/div/div[2]/div/span/span/div/input').setValue('enam')

            await browser.pause(5000)

            await $('[data-widgetname-cy="submit_print_button"]').click()

            
    
            await browser.pause(5000)
        })
    })

    describe('Uji Modul Add New Timesheet', () => {
        it('NT_001 - User klik Add New Timesheet', async () => {
            await browser.url('https://timetale.app.prosigmaka.com/app/timetale/timesheet-65dda8906215144bea139c32')
                
            await $('[data-widgetname-cy="AddButton"]').click()

            const titlePage3 = await $('[data-widgetname-cy="new_timesheet"]')
            expect (titlePage3).toHaveText('New Timesheet')

            await browser.pause(5000)

        })

        it.skip('NT_002 - User menambah / mengisi timesheet dengan data yang lengkap dan valid', async () => {
            await browser.url('https://timetale.app.prosigmaka.com/app/timetale/timesheet-65dda8906215144bea139c32')
                
            await $('[data-widgetname-cy="AddButton"]').click()

            await $('[data-widgetname-cy="attendance"]').click()
            await browser.pause(5000)
            await $('.menu-virtual-list > div > div:nth-child(1) .menu-item-link').click()

            await $('[data-widgetname-cy="date_picker"]').click()
            await $('//*[@id="auto_a6kabk6nz3"]/div/div/div[2]/div/span/span/span/span/div/input').setValue('12 June, 2024')
            
            // working time
            await $('//*[@id="auto_9cawbt0huy"]/div/div/div[2]/div/span/span/div/input').setValue('08:00')
            await $('//*[@id="auto_cj22askszk"]/div/div/div[2]/div/span/span/div/input').setValue('17:00')

            // overtime 
            await $('//*[@id="auto_dcxicnecpv"]/div/div/div[2]/div/span/span/div/input').setValue('18:00')
            await $('//*[@id="auto_bdbu05fdfb"]/div/div/div[2]/div/span/span/div/input').setValue('20:00')

            // activity note
            await $('//*[@id="auto_onwv2kln89"]/div/div[2]/div/span/span/textarea').setValue('test')
            
            await $('[data-widgetname-cy="btn_submit_new_timesheet"]').click()

            const titlePage4 = await $('//*[@id="ToastId139"]/div[1]/div[2]/span')
            expect (titlePage4).toHaveText('success create new record')

            await browser.pause(5000)

        })

        it('NT_003 - User hanya mengisi date dan attendance', async () => {
            await browser.url('https://timetale.app.prosigmaka.com/app/timetale/timesheet-65dda8906215144bea139c32')
                
            await $('[data-widgetname-cy="AddButton"]').click()

            await $('[data-widgetname-cy="attendance"]').click()
            await browser.pause(5000)
            await $('.menu-virtual-list > div > div:nth-child(1) .menu-item-link').click()

            await $('[data-widgetname-cy="date_picker"]').click()
            await $('//*[@id="auto_a6kabk6nz3"]/div/div/div[2]/div/span/span/span/span/div/input').setValue('13 June, 2024')

            await $('[data-widgetname-cy="btn_submit_new_timesheet"]').click()

            const titlePage5 = await $('//*[@id="ToastId52"]/div[1]/div[2]/span')
            expect (titlePage5).toHaveText('success create new record')

            await browser.pause(5000)

        })

        it('NT_004 - User mengosongkan bagian jam mulai (start)', async () => {
            await browser.url('https://timetale.app.prosigmaka.com/app/timetale/timesheet-65dda8906215144bea139c32')
                
            await $('[data-widgetname-cy="AddButton"]').click()

            await $('[data-widgetname-cy="attendance"]').click()
            await browser.pause(5000)
            await $('.menu-virtual-list > div > div:nth-child(1) .menu-item-link').click()

            await $('[data-widgetname-cy="date_picker"]').click()
            await $('//*[@id="auto_a6kabk6nz3"]/div/div/div[2]/div/span/span/span/span/div/input').setValue('12 June, 2024')

            // working time
            // await $('//*[@id="auto_9cawbt0huy"]/div/div/div[2]/div/span/span/div/input').setValue('08:00')
            await $('//*[@id="auto_cj22askszk"]/div/div/div[2]/div/span/span/div/input').setValue('17:00')

            // overtime 
            await $('//*[@id="auto_dcxicnecpv"]/div/div/div[2]/div/span/span/div/input').setValue('18:00')
            await $('//*[@id="auto_bdbu05fdfb"]/div/div/div[2]/div/span/span/div/input').setValue('20:00')

            // activity note
            await $('//*[@id="auto_onwv2kln89"]/div/div[2]/div/span/span/textarea').setValue('test')

            await $('[data-widgetname-cy="btn_submit_new_timesheet"]').click()

            const titlePage6 = await $('//*[@id="ToastId230"]/div[1]/div[2]/span')
            expect (titlePage6).toHaveText('success create new record')

            await browser.pause(5000)

        })

        it('NT_005 - User mengosongkan bagian jam selesai (end)', async () => {
            await browser.url('https://timetale.app.prosigmaka.com/app/timetale/timesheet-65dda8906215144bea139c32')
                
            await $('[data-widgetname-cy="AddButton"]').click()

            await $('[data-widgetname-cy="attendance"]').click()
            await browser.pause(5000)
            await $('.menu-virtual-list > div > div:nth-child(1) .menu-item-link').click()

            // await $('[data-widgetname-cy="date_picker"]').click()
            // await $('//*[@id="auto_a6kabk6nz3"]/div/div/div[2]/div/span/span/span/span/div/input').setValue('14 June, 2024')

            // working time
            await $('//*[@id="auto_9cawbt0huy"]/div/div/div[2]/div/span/span/div/input').setValue('08:00')
            // await $('//*[@id="auto_cj22askszk"]/div/div/div[2]/div/span/span/div/input').setValue('17:00')

            // overtime 
            await $('//*[@id="auto_dcxicnecpv"]/div/div/div[2]/div/span/span/div/input').setValue('18:00')
            await $('//*[@id="auto_bdbu05fdfb"]/div/div/div[2]/div/span/span/div/input').setValue('20:00')

            // activity note
            await $('//*[@id="auto_onwv2kln89"]/div/div[2]/div/span/span/textarea').setValue('test')

            await $('[data-widgetname-cy="btn_submit_new_timesheet"]').click()

            const titlePage6 = await $('//*[@id="ToastId296"]/div[1]/div[2]/span')
            expect (titlePage6).toHaveText('success create new record')

            await browser.pause(5000)

        })

        it('NT_006 - User mengosongkan bagian jam mulai dan selesai (start dan end)', async () => {
            await browser.url('https://timetale.app.prosigmaka.com/app/timetale/timesheet-65dda8906215144bea139c32')
                
            await $('[data-widgetname-cy="AddButton"]').click()

            await $('[data-widgetname-cy="attendance"]').click()
            await browser.pause(5000)
            await $('.menu-virtual-list > div > div:nth-child(1) .menu-item-link').click()

            await $('[data-widgetname-cy="date_picker"]').click()
            await $('//*[@id="auto_a6kabk6nz3"]/div/div/div[2]/div/span/span/span/span/div/input').setValue('11 June, 2024')

            // working time
            // await $('//*[@id="auto_9cawbt0huy"]/div/div/div[2]/div/span/span/div/input').setValue('08:00')
            // await $('//*[@id="auto_cj22askszk"]/div/div/div[2]/div/span/span/div/input').setValue('17:00')

            // overtime 
            await $('//*[@id="auto_dcxicnecpv"]/div/div/div[2]/div/span/span/div/input').setValue('18:00')
            await $('//*[@id="auto_bdbu05fdfb"]/div/div/div[2]/div/span/span/div/input').setValue('20:00')

            // activity note
            await $('//*[@id="auto_onwv2kln89"]/div/div[2]/div/span/span/textarea').setValue('test')

            await $('[data-widgetname-cy="btn_submit_new_timesheet"]').click()

            const titlePage7 = await $('//*[@id="ToastId376"]/div[1]/div[2]/span')
            expect (titlePage7).toHaveText('success create new record')

            await browser.pause(5000)

        })

        it('NT_007 - User mengisi bagian jam mulai (start) dengan alfabet', async () => {
            await browser.url('https://timetale.app.prosigmaka.com/app/timetale/timesheet-65dda8906215144bea139c32')
                
            await $('[data-widgetname-cy="AddButton"]').click()

            await $('[data-widgetname-cy="attendance"]').click()
            await browser.pause(5000)
            await $('.menu-virtual-list > div > div:nth-child(1) .menu-item-link').click()

            await $('[data-widgetname-cy="date_picker"]').click()
            await $('//*[@id="auto_a6kabk6nz3"]/div/div/div[2]/div/span/span/span/span/div/input').setValue('11 June, 2024')

            // working time
            await $('//*[@id="auto_9cawbt0huy"]/div/div/div[2]/div/span/span/div/input').setValue('abc')
            await $('//*[@id="auto_cj22askszk"]/div/div/div[2]/div/span/span/div/input').setValue('17:00')

            // overtime 
            await $('//*[@id="auto_dcxicnecpv"]/div/div/div[2]/div/span/span/div/input').setValue('18:00')
            await $('//*[@id="auto_bdbu05fdfb"]/div/div/div[2]/div/span/span/div/input').setValue('20:00')

            // activity note
            await $('//*[@id="auto_onwv2kln89"]/div/div[2]/div/span/span/textarea').setValue('test')

            // await $('[data-widgetname-cy="btn_submit_new_timesheet"]').click()

            // const titlePage7 = await $('//*[@id="ToastId376"]/div[1]/div[2]/span')
            // expect (titlePage7).toHaveText('success create new record')

            await browser.pause(5000)

        })

        it('NT_008 - User mengisi bagian jam selesai (end) dengan alfabet', async () => {
            await browser.url('https://timetale.app.prosigmaka.com/app/timetale/timesheet-65dda8906215144bea139c32')
                
            await $('[data-widgetname-cy="AddButton"]').click()

            await $('[data-widgetname-cy="attendance"]').click()
            await browser.pause(5000)
            await $('.menu-virtual-list > div > div:nth-child(1) .menu-item-link').click()

            // await $('[data-widgetname-cy="date_picker"]').click()
            // await $('//*[@id="auto_a6kabk6nz3"]/div/div/div[2]/div/span/span/span/span/div/input').setValue('11 June, 2024')

            // working time
            await $('//*[@id="auto_9cawbt0huy"]/div/div/div[2]/div/span/span/div/input').setValue('08:00')
            await $('//*[@id="auto_cj22askszk"]/div/div/div[2]/div/span/span/div/input').setValue('edf')

            // overtime 
            await $('//*[@id="auto_dcxicnecpv"]/div/div/div[2]/div/span/span/div/input').setValue('18:00')
            await $('//*[@id="auto_bdbu05fdfb"]/div/div/div[2]/div/span/span/div/input').setValue('20:00')

            // activity note
            await $('//*[@id="auto_onwv2kln89"]/div/div[2]/div/span/span/textarea').setValue('test')

            // await $('[data-widgetname-cy="btn_submit_new_timesheet"]').click()

            // const titlePage7 = await $('//*[@id="ToastId376"]/div[1]/div[2]/span')
            // expect (titlePage7).toHaveText('success create new record')

            await browser.pause(5000)

        })

        it('NT_009 - User mengisi bagian jam mulai (start) dengan format waktu yang berbeda', async () => {
            await browser.url('https://timetale.app.prosigmaka.com/app/timetale/timesheet-65dda8906215144bea139c32')
                
            await $('[data-widgetname-cy="AddButton"]').click()

            await $('[data-widgetname-cy="attendance"]').click()
            await browser.pause(5000)
            await $('.menu-virtual-list > div > div:nth-child(1) .menu-item-link').click()

            await $('[data-widgetname-cy="date_picker"]').click()
            await $('//*[@id="auto_a6kabk6nz3"]/div/div/div[2]/div/span/span/span/span/div/input').setValue('11 June, 2024')

            // working time
            await $('//*[@id="auto_9cawbt0huy"]/div/div/div[2]/div/span/span/div/input').setValue('8:15')
            await $('//*[@id="auto_cj22askszk"]/div/div/div[2]/div/span/span/div/input').setValue('17:30')

            // overtime 
            await $('//*[@id="auto_dcxicnecpv"]/div/div/div[2]/div/span/span/div/input').setValue('18:00')
            await $('//*[@id="auto_bdbu05fdfb"]/div/div/div[2]/div/span/span/div/input').setValue('20:00')

            // activity note
            await $('//*[@id="auto_onwv2kln89"]/div/div[2]/div/span/span/textarea').setValue('test')

            // await $('[data-widgetname-cy="btn_submit_new_timesheet"]').click()

            const titlePage8 = await $('//*[@id="ToastId37"]/div[1]/div[2]/span')
            expect (titlePage8).toHaveText('Please ensure the work start and end times have at least a 2-hour interval.')

            await browser.pause(5000)

        })

        it('NT_010 - User mengisi bagian jam selesai (end) dengan format waktu yang berbeda', async () => {
            await browser.url('https://timetale.app.prosigmaka.com/app/timetale/timesheet-65dda8906215144bea139c32')
                
            await $('[data-widgetname-cy="AddButton"]').click()

            await $('[data-widgetname-cy="attendance"]').click()
            await browser.pause(5000)
            await $('.menu-virtual-list > div > div:nth-child(1) .menu-item-link').click()

            // await $('[data-widgetname-cy="date_picker"]').click()
            // await $('//*[@id="auto_a6kabk6nz3"]/div/div/div[2]/div/span/span/span/span/div/input').setValue('11 June, 2024')

            // working time
            await $('//*[@id="auto_9cawbt0huy"]/div/div/div[2]/div/span/span/div/input').setValue('06:00')
            await $('//*[@id="auto_cj22askszk"]/div/div/div[2]/div/span/span/div/input').setValue('9:30')

            // overtime 
            await $('//*[@id="auto_dcxicnecpv"]/div/div/div[2]/div/span/span/div/input').setValue('18:00')
            await $('//*[@id="auto_bdbu05fdfb"]/div/div/div[2]/div/span/span/div/input').setValue('20:00')

            // activity note
            await $('//*[@id="auto_onwv2kln89"]/div/div[2]/div/span/span/textarea').setValue('test')

            // await $('[data-widgetname-cy="btn_submit_new_timesheet"]').click()

            const titlePage9 = await $('//*[@id="ToastId376"]/div[1]/div[2]/span')
            expect (titlePage9).toHaveText('success create new record')

            await browser.pause(5000)

        })

        it('NT_011 - User mengisi bagian jam mulai dan selesai (start dan end) dengan rentang waktu yang panjang', async () => {
            await browser.url('https://timetale.app.prosigmaka.com/app/timetale/timesheet-65dda8906215144bea139c32')
                
            await $('[data-widgetname-cy="AddButton"]').click()

            await $('[data-widgetname-cy="attendance"]').click()
            await browser.pause(5000)
            await $('.menu-virtual-list > div > div:nth-child(1) .menu-item-link').click()

            await $('[data-widgetname-cy="date_picker"]').click()
            await $('//*[@id="auto_a6kabk6nz3"]/div/div/div[2]/div/span/span/span/span/div/input').setValue('09 June, 2024')

            // working time
            await $('//*[@id="auto_9cawbt0huy"]/div/div/div[2]/div/span/span/div/input').setValue('00:01')
            await $('//*[@id="auto_cj22askszk"]/div/div/div[2]/div/span/span/div/input').setValue('23:59')

            // overtime 
            await $('//*[@id="auto_dcxicnecpv"]/div/div/div[2]/div/span/span/div/input').setValue('18:00')
            await $('//*[@id="auto_bdbu05fdfb"]/div/div/div[2]/div/span/span/div/input').setValue('20:00')

            // activity note
            await $('//*[@id="auto_onwv2kln89"]/div/div[2]/div/span/span/textarea').setValue('test')

            await $('[data-widgetname-cy="btn_submit_new_timesheet"]').click()

            const titlePage10 = await $('//*[@id="ToastId320"]/div[1]/div[2]/span')
            expect (titlePage10).toHaveText("error can't create new timesheet! !")

            await browser.pause(5000)

        })

        it('NT_012 - User mengisi bagian jam mulai (start) dengan karakter spesial', async () => {
            await browser.url('https://timetale.app.prosigmaka.com/app/timetale/timesheet-65dda8906215144bea139c32')
                
            await $('[data-widgetname-cy="AddButton"]').click()

            await $('[data-widgetname-cy="attendance"]').click()
            await browser.pause(5000)
            await $('.menu-virtual-list > div > div:nth-child(1) .menu-item-link').click()

            await $('[data-widgetname-cy="date_picker"]').click()
            await $('//*[@id="auto_a6kabk6nz3"]/div/div/div[2]/div/span/span/span/span/div/input').setValue('11 June, 2024')

            // working time
            await $('//*[@id="auto_9cawbt0huy"]/div/div/div[2]/div/span/span/div/input').setValue('!!')
            await $('//*[@id="auto_cj22askszk"]/div/div/div[2]/div/span/span/div/input').setValue('17:00')

            // overtime 
            await $('//*[@id="auto_dcxicnecpv"]/div/div/div[2]/div/span/span/div/input').setValue('18:00')
            await $('//*[@id="auto_bdbu05fdfb"]/div/div/div[2]/div/span/span/div/input').setValue('20:00')

            // activity note
            await $('//*[@id="auto_onwv2kln89"]/div/div[2]/div/span/span/textarea').setValue('test')

            // await $('[data-widgetname-cy="btn_submit_new_timesheet"]').click()

            await browser.pause(5000)

        })

        it('NT_013 - User mengisi bagian jam selesai (end) dengan karakter spesial', async () => {
            await browser.url('https://timetale.app.prosigmaka.com/app/timetale/timesheet-65dda8906215144bea139c32')
                
            await $('[data-widgetname-cy="AddButton"]').click()

            await $('[data-widgetname-cy="attendance"]').click()
            await browser.pause(5000)
            await $('.menu-virtual-list > div > div:nth-child(1) .menu-item-link').click()

            // await $('[data-widgetname-cy="date_picker"]').click()
            // await $('//*[@id="auto_a6kabk6nz3"]/div/div/div[2]/div/span/span/span/span/div/input').setValue('11 June, 2024')

            // working time
            await $('//*[@id="auto_9cawbt0huy"]/div/div/div[2]/div/span/span/div/input').setValue('08:00')
            await $('//*[@id="auto_cj22askszk"]/div/div/div[2]/div/span/span/div/input').setValue('!!')

            // overtime 
            await $('//*[@id="auto_dcxicnecpv"]/div/div/div[2]/div/span/span/div/input').setValue('18:00')
            await $('//*[@id="auto_bdbu05fdfb"]/div/div/div[2]/div/span/span/div/input').setValue('20:00')

            // activity note
            await $('//*[@id="auto_onwv2kln89"]/div/div[2]/div/span/span/textarea').setValue('test')

            // await $('[data-widgetname-cy="btn_submit_new_timesheet"]').click()

            await browser.pause(5000)

        })

        it('NT_014 - User mengisi bagian jam mulai (start) dengan angka dan alfabet', async () => {
            await browser.url('https://timetale.app.prosigmaka.com/app/timetale/timesheet-65dda8906215144bea139c32')
                
            await $('[data-widgetname-cy="AddButton"]').click()

            await $('[data-widgetname-cy="attendance"]').click()
            await browser.pause(5000)
            await $('.menu-virtual-list > div > div:nth-child(1) .menu-item-link').click()

            await $('[data-widgetname-cy="date_picker"]').click()
            await $('//*[@id="auto_a6kabk6nz3"]/div/div/div[2]/div/span/span/span/span/div/input').setValue('11 June, 2024')

            // working time
            await $('//*[@id="auto_9cawbt0huy"]/div/div/div[2]/div/span/span/div/input').setValue('o8u7e')
            await $('//*[@id="auto_cj22askszk"]/div/div/div[2]/div/span/span/div/input').setValue('17:00')

            // overtime 
            await $('//*[@id="auto_dcxicnecpv"]/div/div/div[2]/div/span/span/div/input').setValue('18:00')
            await $('//*[@id="auto_bdbu05fdfb"]/div/div/div[2]/div/span/span/div/input').setValue('20:00')

            // activity note
            await $('//*[@id="auto_onwv2kln89"]/div/div[2]/div/span/span/textarea').setValue('test')

            // await $('[data-widgetname-cy="btn_submit_new_timesheet"]').click()

            const titlePage11 = await $('//*[@id="ToastId37"]/div[1]/div[2]/span')
            expect (titlePage11).toHaveText('Please ensure the work start and end times have at least a 2-hour interval.')

            await browser.pause(5000)

        })

        it('NT_039 - User mengisi tanggal yang sama dengan data yang sudah ada di record timesheet', async () => {
            await browser.url('https://timetale.app.prosigmaka.com/app/timetale/timesheet-65dda8906215144bea139c32')
                
            await $('[data-widgetname-cy="AddButton"]').click()

            await $('[data-widgetname-cy="attendance"]').click()
            await browser.pause(5000)
            await $('.menu-virtual-list > div > div:nth-child(1) .menu-item-link').click()

            await $('[data-widgetname-cy="date_picker"]').click()
            await $('//*[@id="auto_a6kabk6nz3"]/div/div/div[2]/div/span/span/span/span/div/input').setValue('09 June, 2024')

            // working time
            await $('//*[@id="auto_9cawbt0huy"]/div/div/div[2]/div/span/span/div/input').setValue('00:01')
            await $('//*[@id="auto_cj22askszk"]/div/div/div[2]/div/span/span/div/input').setValue('23:59')

            // overtime 
            await $('//*[@id="auto_dcxicnecpv"]/div/div/div[2]/div/span/span/div/input').setValue('18:00')
            await $('//*[@id="auto_bdbu05fdfb"]/div/div/div[2]/div/span/span/div/input').setValue('20:00')

            // activity note
            await $('//*[@id="auto_onwv2kln89"]/div/div[2]/div/span/span/textarea').setValue('test')

            await $('[data-widgetname-cy="btn_submit_new_timesheet"]').click()

            const titlePage12 = await $('//*[@id="ToastId132"]/div[1]/div[2]/span')
            expect (titlePage12).toHaveText("")

            await browser.pause(5000)

        })

        it('NT_041 - User klik Reset pada New Timesheet', async () => {
            await browser.url('https://timetale.app.prosigmaka.com/app/timetale/timesheet-65dda8906215144bea139c32')
                
            await $('[data-widgetname-cy="AddButton"]').click()

            await $('[data-widgetname-cy="attendance"]').click()
            await browser.pause(5000)
            await $('.menu-virtual-list > div > div:nth-child(1) .menu-item-link').click()

            await $('[data-widgetname-cy="date_picker"]').click()
            await $('//*[@id="auto_a6kabk6nz3"]/div/div/div[2]/div/span/span/span/span/div/input').setValue('11 June, 2024')

            // working time
            await $('//*[@id="auto_9cawbt0huy"]/div/div/div[2]/div/span/span/div/input').setValue('08:00')
            await $('//*[@id="auto_cj22askszk"]/div/div/div[2]/div/span/span/div/input').setValue('17:00')

            // overtime 
            await $('//*[@id="auto_dcxicnecpv"]/div/div/div[2]/div/span/span/div/input').setValue('18:00')
            await $('//*[@id="auto_bdbu05fdfb"]/div/div/div[2]/div/span/span/div/input').setValue('20:00')

            // activity note
            await $('//*[@id="auto_onwv2kln89"]/div/div[2]/div/span/span/textarea').setValue('test')

            await $('[data-widgetname-cy="btn_reset"]').click()

            await browser.pause(5000)

        })
    
    })
    
})

