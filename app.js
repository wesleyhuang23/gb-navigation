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
})();

function addItem(){
    var inputItem = document.createElement('input');
    var button = document.createElement('button');
    button.innerText = 'Remove Item';
    button.onclick = function(){
        var form = document.getElementsByClassName('form')[0];
        form.removeChild(form.children[form.children.length - 1])
        form.removeChild(form.children[form.children.length - 1])
    }
    var form = document.getElementsByClassName('form')[0]
    form.appendChild(inputItem);
    form.appendChild(button);
}

function addNav(e){
    console.log(e);
}