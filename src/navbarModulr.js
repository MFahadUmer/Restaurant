import logo from './logo.jpg';
const navbarModule = (() => {
  const navbar = document.createElement('nav');
  navbar.setAttribute('class', 'navbar');
  navbar.innerHTML = ` <div class="logo">
           <a class="logoLink" href="index.html"><img class="logo-img" src=${logo}></a>
       </div>
       <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
           <li class="navbar-item">
               <a class="navbar-link nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-profile" aria-selected="false">Home</a>
           </li>
           <li class="navbar-item">
               <a class="navbar-link nav-link" id="pills-menu-tab" data-toggle="pill" href="#pills-menu" role="tab" aria-controls="pills-profile" aria-selected="false">Menu</a>
           </li>
           <li class="navbar-item">
               <a class="navbar-link nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-profile" aria-selected="false">Contact</a>
           </li>
       </ul>`;
  document.querySelector('.section').appendChild(navbar);

})();
export default navbarModule;