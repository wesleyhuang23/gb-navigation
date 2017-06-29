(function hover(){
    var navItems = document.getElementsByClassName('nav-items');
    console.log(navItems[0].children.length);

    for(var i = 0; i < navItems[0].children.length; i++){
        console.log(navItems[0].children[i].children[0].className)
        var item = navItems[0].children[i].children[0].className;
        navItems[0].children[i].onmouseenter = function(){
            console.log(item);
            var subNav = document.getElementsByClassName(item)[0];
            subNav.id = 'showSubNav';
                subNav.onmouseenter = function(){
                    subNav.id = 'showSubNav';
                }
                subNav.onmouseleave = function(){
                    subNav.id = '';
                }
        }
        navItems[0].children[i].onmouseleave = function(){
            var subNav = document.getElementById('showSubNav');
            if(subNav){
                subNav.id = '';
            }
        }
        console.log(navItems);
    }
})();