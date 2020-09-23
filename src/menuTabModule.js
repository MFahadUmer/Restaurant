import receipe from './receipe.jpg';

const menuTabModule = (() => {
  const menuTab = document.createElement('div');
  menuTab.setAttribute('class', 'tab-pane fade show');
  menuTab.setAttribute('id', 'pills-menu');
  menuTab.setAttribute('role', 'tabpanel');
  menuTab.setAttribute('tabpanel', 'pills-menu-tab');
  menuTab.innerHTML = `<div class="menu-main-section">
                <div class="menu-section">
                    <div class="menu-div">
                        <div class="menu-div-img-div">
                            <img class="menu-image" src=${receipe} alt="receipies">
                        </div>
                        <h3 class="receipe-name">Biryani</h3>
                    </div>
                    <div class="menu-div">
                        <div class="menu-div-img-div">
                            <img class="menu-image" src=${receipe} alt="receipies">
                        </div>
                        <h3 class="receipe-name">Biryani</h3>
                    </div>
                    <div class="menu-div">
                        <div class="menu-div-img-div">
                            <img class="menu-image" src=${receipe} alt="receipies">
                        </div>
                        <h3 class="receipe-name">Biryani</h3>
                    </div>
                    <div class="menu-div">
                        <div class="menu-div-img-div">
                            <img class="menu-image" src=${receipe} alt="receipies">
                        </div>
                        <h3 class="receipe-name">Biryani</h3>
                    </div>
                    <div class="menu-div">
                        <div class="menu-div-img-div">
                            <img class="menu-image" src=${receipe} alt="receipies">
                        </div>
                        <h3 class="receipe-name">Biryani</h3>
                    </div>
                    <div class="menu-div">
                        <div class="menu-div-img-div">
                            <img class="menu-image" src=${receipe} alt="receipies">
                        </div>
                        <h3 class="receipe-name">Biryani</h3>
                    </div>
                </div>
            </div>`;
  document.getElementById('pills-tabContent').appendChild(menuTab);
})();
export default menuTabModule;