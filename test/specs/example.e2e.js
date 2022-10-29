//const LoginPage = require('../pages/.page');
//const SecurePage = require('../pages/secure.page');
//var assert = require('assert');

import Homepage from '../pages/homepage';
//import { waitForTextChange } from '../utilities/helper';
//import resources from '../resources';
//import allureReporter from '@wdio/allure-reporter';

describe("E2E test suite", () => {

 

    it("Test 1 - Verify page open and title", async () => {
      //await browser.setWindowSize(800,800)
      //await browser.url("https://www.sbs.com.au/language/chinese/zh-hans/podcast-episode/cultural-conflict-meet-someone-causing-you-trouble/l9pzenqfq")
      Homepage.open();
      expect(browser).toHaveUrl("https://www.sbs.com.au/language/chinese/zh-hans/podcast-episode/cultural-conflict-meet-someone-causing-you-trouble/l9pzenqfq")
      expect(browser).toHaveTitle('【文化苦丁茶】人生的林子里，你有大概率会遇到“鸟人” | SBS Chinese')
      

    });

    it("Test 2 - Verify audio control", async () => {
      await Homepage.audioBtn.click()
      //verify audio player opens
      //await (browser.$("[data-testid=mini-player]")).waitForClickable
      const formLocator = Homepage.playerBtn;
      await Homepage.forwardplayBtn.click()
      //const timerval=Homepage.getTimerValue().gett
      expect(Homepage.getTimerValue).toHaveValue('2')
      await Homepage.rewindBtn.click()
      //const timerval2=$('body > div.MuiModal-root.MuiDrawer-root.MuiDrawer-modal.css-yqivbj-MuiModal-root-MuiDrawer-root > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16.MuiDrawer-paper.MuiDrawer-paperAnchorBottom.css-105yjo-MuiPaper-root-MuiDrawer-paper > div > div.draw-small.css-vjrmxc-upper-section > div > div.MuiBox-root.css-l6ct9h > div.MuiBox-root.css-by529t > span > span.MuiSlider-thumbColorPrimary.MuiSlider-thumbSizeMedium.MuiSlider-thumb.css-13tm8ev-MuiSlider-thumb > input[type=range]')
      expect(Homepage.getTimerValue).toHaveValue('1')
      //Verify play and pause button working
      expect(formLocator).toHaveText('PAUSE')
      await Homepage.playControl.click()
      expect(formLocator).toHaveText('PLAY')
      await Homepage.playControl.click()
      const timerval=Homepage.playtimeCount

      expect(timerval).not.toHaveText('00:00')   
      
      await Homepage.volumeControl.click()
      const volslider=Homepage.volSlider
      
      await expect(volslider).toBeDisplayed() 
      //utilities.takeScreenshot('audiocontrol');

    });

    it("Test 3 - Verify language selection", async () => {
      
      await Homepage.langSelection.click()
      const multilang=$('aria/Chinese (Traditional) - 中文 (繁體中文)')
      await expect(multilang).toBeDisplayed() 

      //utilities.takeScreenshot('language');

    });

     
    it("Test 4 - Verify api call", async () => {
      browser.call('https://www.sbs.com.au')
      browser.setupInterceptor();
      browser.expectRequest('GET', '/guide/ajax_radio_program_catchup_data/language/mandarin/location/NSW/sublocation/Sydney', 200); 
   });


  });


