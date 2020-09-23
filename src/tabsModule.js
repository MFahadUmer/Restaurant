const tabsModule = (() => {
  const tabsSection = document.createElement('div');
  tabsSection.setAttribute('class', 'tab-content');
  tabsSection.setAttribute('id', 'pills-tabContent');
  document.querySelector('.section').appendChild(tabsSection);
})();
export default tabsModule;