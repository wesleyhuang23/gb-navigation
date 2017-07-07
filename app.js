function hover(){
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
}
hover();

function addItem(){
    var inputItem = document.createElement('input');
    inputItem.className = 'subNavItem'
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
    console.log(e.target.parentNode.children);
    var children = e.target.parentNode.children;
    var navName = document.getElementById('navName').value;
    console.log(navName);
    let subNav = [];
    for(var i = 0; i < children.length; i++){
        if(children[i].className === 'subNavItem'){
            subNav.push(children[i]);
        }
    }
    console.log(subNav)
    createNav(navName, subNav);
}

function createNav(name, items){
    console.log(name, items);
    var outList = document.createElement('li');
    outList.innerText = name;
    var container = document.createElement('div');
    container.className = name;
    var innerList = document.createElement('ul');
    for(var i = 0; i < items.length; i++){
        var subItem = document.createElement('li');
        subItem.innerHTML = items[i].value;
        innerList.appendChild(subItem);
    }
    console.log(innerList);
    container.appendChild(innerList);
    outList.appendChild(container);
    var navItems = document.getElementsByClassName('nav-items')[0];
    navItems.appendChild(outList);
    hover();
}