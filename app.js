(function hover(){
    var navItems = document.getElementsByClassName('nav-items')[0].children;
    console.log(navItems);

    for(var i = 0; i < navItems.length; i++){
        navItems[i].onmouseenter = function(e){
            console.log(e);
            e.target.children[0].style.display = 'block';
        }
        navItems[i].onmouseleave = function(e){
            console.log(e);
            e.target.children[0].style.display = 'none';
        }
    }
    console.log(navItems);
})();