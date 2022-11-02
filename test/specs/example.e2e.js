import Homepage from '../pages/homepage';
import * as Constants from '../constants/frameworkconstants';
import allureReporter from '@wdio/allure-reporter'
const superTest = require('supertest');


const reqresUrl = 'https://www.sbs.com.au';
const reqres = superTest(reqresUrl);

describe("E2E test suite", () => {

    it("Test 1 - Verify page open and title", async () => {
      allureReporter.addStep('Verify page open and title')
      Homepage.open();
      expect(browser).toHaveUrl(Constants.urlval)
      expect(browser).toHaveTitle(Constants.urltitle)

    });

    it("Test 2 - Verify the titile of Audio track", async () => {
      allureReporter.addStep('Verify the titile of Audio track')
      const audioTitle = Homepage.audioTrackName;
      expect(audioTitle).toHaveText(Constants.audioTitle)

    });

    it("Test 3 - Verify the Audio player is launched on clicking audio play btn", async () => {
      allureReporter.addStep('Verify the Audio player is launched on clicking audio play btn')
      await Homepage.audioBtn.click()
      //Verify that audio player close button is displayed at the bottom of page
      expect(Homepage.audioPlayerCloseBtn).toBePresent()

    });

    
    it("Test 4 - Verify the Audio player Play Pause functions", async () => {
      allureReporter.addStep('Verify the Audio player Play Pause functions')
      //verifyt that audio player has PAUSE button enabled first
      const formLocator = Homepage.playerBtn;
      expect(formLocator).toHaveText('PAUSE')
      await Homepage.playControl.click()
       //verifyt that audio player has PLAY button enabled after clicking pause
      expect(formLocator).toHaveText('PLAY')

    });
    
    it("Test 5 - Verify audio control for Forward and Rewind", async () => {
      allureReporter.addStep('Verify audio control for Forward and Rewind')
      await browser.pause(3000)
      await Homepage.rewindBtn.click()
      const timerval=Homepage.playtimeCount
      console.log('Timer value is:',await timerval.getText())
      await Homepage.forwardplayBtn.click()
      await browser.pause(3000)
      console.log('Timer value is after forward :',await timerval.getText())
      expect(timerval.getText()).toHaveValue('00:30')
      await Homepage.rewindBtn.click()
      await browser.pause(3000)
      console.log('Timer value is after rewind :',await timerval.getText())
      expect(timerval).not.toHaveText('00:15')   

    });
    it("Test 6 - Verify the Audio player Mute Unmute functions", async () => {
      allureReporter.addStep('Verify the Audio player Mute Unmute functions')
      await Homepage.volumeControl.click()
      const volslider=Homepage.volSlider
      expect(volslider).toBeDisplayed() 
      const volinput = await Homepage.volSliderInput
      await volinput.click()
      //send shift + home keys to mute the volume 
      browser.keys(['Shift','Home'])
      await browser.pause(3000)
      const muteEnabled=await browser.$('#path-1')
      //Verify Mute button is enabled
      expect(muteEnabled).toBeDisplayed()
      

    });



    it("Test 7 - Verify language selection", async () => {
      allureReporter.addStep('Verify language selection')
      await browser.$('span=Stories in English').click
      await Homepage.langSelection.click()
      const multilang=Homepage.multiLangOption
      await expect(multilang).toBeDisplayed() 

    });

     
    it("Test 8 - Verify api call and mp3 files in response", async () => {
      allureReporter.addStep('Verify api call and mp3 files in response')
      const response = await reqres
            .get(Constants.apiendpoint)
            .then(response => {
                return response;
            });
      console.log('Status Code is: ' + response.status);
      expect(response.status).toEqual(200)
      expect(response).toHaveText('https://media.sbs.com.au/ondemand/audio/Wednesday_ONDemand_SBS_RADIO1_07_00.mp3?mtime=1667341214')
      expect(response).toHaveText('https://media.sbs.com.au/ondemand/audio/Tuesday_ONDemand_SBS_RADIO1_07_00.mp3?mtime=1667254910')
      expect(response).toHaveText('https://media.sbs.com.au/ondemand/audio/Monday_ONDemand_SBS_RADIO1_07_00.mp3?mtime=1667168412')
      expect(response).toHaveText('https://media.sbs.com.au/ondemand/audio/Sunday_ONDemand_SBS_RADIO1_07_00.mp3?mtime=1667082305')
      expect(response).toHaveText('https://media.sbs.com.au/ondemand/audio/Saturday_ONDemand_SBS_RADIO1_07_00.mp3?mtime=1666995649')
      expect(response).toHaveText('https://media.sbs.com.au/ondemand/audio/Thursday_ONDemand_SBS_RADIO1_07_00.mp3?mtime=1666823326')
      expect(response).toHaveText('https://media.sbs.com.au/ondemand/audio/Wednesday_ONDemand_SBS_RADIO1_07_00.mp3?mtime=1667341214')

   });


  });


