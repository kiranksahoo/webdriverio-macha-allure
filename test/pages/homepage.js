import Page from './page';

class Homepage extends Page {
  get audioBtn() {
    return $('[data-testid=state-icon] > path');
  }
  get playerBtn() {
    return $('body > div.MuiModal-root.MuiDrawer-root.MuiDrawer-modal.css-yqivbj-MuiModal-root-MuiDrawer-root > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16.MuiDrawer-paper.MuiDrawer-paperAnchorBottom.css-105yjo-MuiPaper-root-MuiDrawer-paper > div > div.draw-small.css-vjrmxc-upper-section > div > div.MuiBox-root.css-l6ct9h > div.MuiBox-root.css-13yz9fp > div.MuiBox-root.css-1tadesa > button.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButtonBase-root.css-vcl139-MuiButtonBase-root-MuiButton-root > span');
  }
  get forwardplayBtn() {
    return $('[data-testid=fullplayer-fast-forward] > svg');
  }

  get rewindBtn() {
    return $('[data-testid=fullplayer-rewind] > svg');
  }

  get TimerValue(){
    return $('body > div.MuiModal-root.MuiDrawer-root.MuiDrawer-modal.css-yqivbj-MuiModal-root-MuiDrawer-root > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16.MuiDrawer-paper.MuiDrawer-paperAnchorBottom.css-105yjo-MuiPaper-root-MuiDrawer-paper > div > div.draw-small.css-vjrmxc-upper-section > div > div.MuiBox-root.css-l6ct9h > div.MuiBox-root.css-by529t > span > span.MuiSlider-thumbColorPrimary.MuiSlider-thumbSizeMedium.MuiSlider-thumb.css-13tm8ev-MuiSlider-thumb > input[type=range]')
  }

  get playControl(){
    return $('[data-testid=fullplayer-play] > svg > path')
  }
  
  get playtimeCount(){
    return $('body > div.MuiModal-root.MuiDrawer-root.MuiDrawer-modal.css-yqivbj-MuiModal-root-MuiDrawer-root > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16.MuiDrawer-paper.MuiDrawer-paperAnchorBottom.css-105yjo-MuiPaper-root-MuiDrawer-paper > div > div.draw-small.css-vjrmxc-upper-section > div > div.MuiBox-root.css-l6ct9h > div.MuiBox-root.css-by529t > div > p:nth-child(1)')
  }

  get volumeControl(){
    return $('[data-testid=volume-icon]')
  }

  get langSelection(){
    return $('[data-testid=language-selector] > div > button')
  }

  get volSlider(){
    return $('body > div.MuiModal-root.MuiDrawer-root.MuiDrawer-modal.css-yqivbj-MuiModal-root-MuiDrawer-root > div.MuiPaper-root.MuiPaper-elevation.MuiPaper-elevation16.MuiDrawer-paper.MuiDrawer-paperAnchorBottom.css-105yjo-MuiPaper-root-MuiDrawer-paper > div > div.draw-small.css-vjrmxc-upper-section > div > div.MuiBox-root.css-l6ct9h > div.MuiBox-root.css-13yz9fp > div.MuiBox-root.css-g6aown > div > div > div')
  }
  

  open() {
    super.open('/language/chinese/zh-hans/podcast-episode/cultural-conflict-meet-someone-causing-you-trouble/l9pzenqfq');
  }
}

export default new Homepage();