const homeTabModule = (() => {
  const homeTab = document.createElement('div');
  homeTab.setAttribute('class', 'tab-pane fade show active');
  homeTab.setAttribute('id', 'pills-home');
  homeTab.setAttribute('role', 'tabpanel');
  homeTab.setAttribute('tabpanel', 'pills-home-tab');
  homeTab.innerHTML = `<div class="intro">
                <div class="intro-section">
                    <h1>Have you tried Pakistani Food yet?</h1>
                    <h2>Welcome to Pakistani Food Restaurant in USA.</h2>
                </div>
            </div>`;
  document.getElementById('pills-tabContent').appendChild(homeTab);
})();
export default homeTabModule;