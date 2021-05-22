const { chromium } = require('playwright');


(async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 50 });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://web.gencat.cat/ca/inici');
    await page.click('text="Agenda cultural"');
    const [agendaCultural] = await Promise.all([
        context.waitForEvent('page')
      ]);
    await agendaCultural.goto(agendaCultural.url())
    await agendaCultural.click('#cerca-button');
  })();