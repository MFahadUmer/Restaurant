import Bg from './bg.jpg';
const backgroundModule = (() => {
    let bgImage = document.createElement('img');
  bgImage.setAttribute('id','bgImage');
  bgImage.setAttribute('class','bg');
  bgImage.setAttribute('src',Bg);
    document.querySelector('.section').appendChild(bgImage);
})();
export default backgroundModule;