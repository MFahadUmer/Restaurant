import receipe from './receipe.jpg';
const tabsModule = (() => {
  const tabsSection = document.createElement('div');
  tabsSection.setAttribute('class', 'tab-content');
  tabsSection.setAttribute('id', 'pills-tabContent');
  tabsSection.innerHTML = `<div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
            <div class="intro">
                <div class="intro-section">
                    <h1>Have you tried Pakistani Food yet?</h1>
                    <h2>Welcome to Pakistani Food Restaurant in USA.</h2>
                </div>
            </div>
        </div>
        <div class="tab-pane fade" id="pills-menu" role="tabpanel" aria-labelledby="pills-menu-tab">
            <div class="menu-main-section">
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
            </div>
        </div>
        <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
            <div class="intro">
                <div>
                    <p class="contact-para">Mövenpick Hotels & Resorts is a modern, upscale hospitality company that is passionate about ‘making moments’, recognising that small gestures make a big difference to our guests, our owners and our people. We do ordinary things in an extraordinary way – a philosophy that has defined our brand’s success from the very start.

A global firm with Swiss roots and a restaurant and hospitality heritage that dates back to the 1940s, our approach to service has remained consistent; warm, intuitive, personal and uniquely ‘Mövenpick’. We also embrace innovation to meet ever-changing guest needs and continue to celebrate our rich culinary legacy, setting trends but never compromising on quality and authenticity. An international company with a growing footprint, we take a sustainable and responsible approach, caring for local communities and protecting the environment in the destinations where we operate.</p>
                </div>
            </div>
        </div>`;
  document.querySelector('.section').appendChild(tabsSection);
})();
export default tabsModule;