import Page from './page';
import * as locators from '../locators/objectlocators';

class Homepage extends Page {
  get audioTrackName() {
    return $(locators.audioTrackName);
  }
  get audioBtn() {
    return $(locators.audioBtn);
  }
  get playerBtn() {
    return $(locators.playerBtn);
  }
  get forwardplayBtn() {
    return $(locators.forwardplayBtn);
  }
  get audioPlayerCloseBtn(){
    return $(locators.audioPlayerCloseBtn)
  }

  get rewindBtn() {
    return $(locators.rewindBtn);
  }

  get TimerValue(){
    return $(locators.TimerValue)
  }

  get playControl(){
    return $(locators.playControl)
  }
  
  get playtimeCount(){
    return $(locators.playtimeCount)
  }

  get volumeControl(){
    return $(locators.volumeControl)
  }

  get langSelection(){
    return $(locators.langSelection)
    
  }
  get volSlider(){
    return $(locators.volSlider)
  }
  

  get volSliderInput(){
    return $(locators.volSliderInput)
  }
  

  get multiLangOption(){
    return $(locators.multiLangOption)
  }

  open() {
    super.open('/language/chinese/zh-hans/podcast-episode/cultural-conflict-meet-someone-causing-you-trouble/l9pzenqfq');
  }


}

export default new Homepage();