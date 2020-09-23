const conatctTabModule = (() => {
  const contactTab = document.createElement('div');
  contactTab.setAttribute('class', 'tab-pane fade show');
  contactTab.setAttribute('id', 'pills-contact');
  contactTab.setAttribute('role', 'tabpanel');
  contactTab.setAttribute('tabpanel', 'pills-contact-tab');
  contactTab.innerHTML = `<div class="intro">
                <div>
                    <p class="contact-para">Mövenpick Hotels & Resorts is a modern, upscale hospitality company that is passionate about ‘making moments’, recognising that small gestures make a big difference to our guests, our owners and our people. We do ordinary things in an extraordinary way – a philosophy that has defined our brand’s success from the very start.

A global firm with Swiss roots and a restaurant and hospitality heritage that dates back to the 1940s, our approach to service has remained consistent; warm, intuitive, personal and uniquely ‘Mövenpick’. We also embrace innovation to meet ever-changing guest needs and continue to celebrate our rich culinary legacy, setting trends but never compromising on quality and authenticity. An international company with a growing footprint, we take a sustainable and responsible approach, caring for local communities and protecting the environment in the destinations where we operate.</p>
                </div>
            </div>`;
  document.getElementById('pills-tabContent').appendChild(contactTab);
})();
export default conatctTabModule;