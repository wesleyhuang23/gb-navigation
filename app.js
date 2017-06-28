(function hover(){
    var navItems = document.getElementsByClassName('nav-items');
    console.log(navItems[0].children[0].innerText);
        navItems[0].children[0].onmouseenter = function(){
            var subNav = document.getElementsByClassName(navItems[0].children[0].innerText)[0];
            subNav.id = 'showSubNav';
                subNav.onmouseenter = function(){
                    subNav.id = 'showSubNav';
                }
                subNav.onmouseleave = function(){
                    subNav.id = '';
                }
        }
        navItems[0].children[0].onmouseleave = function(){
            var subNav = document.getElementById('showSubNav');
            if(subNav){
                subNav.id = '';
            }
        }
 
})();