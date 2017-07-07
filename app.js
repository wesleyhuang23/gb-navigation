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

//logic for creating new nav
function addItem(){
    var inputItem = document.createElement('input');
    inputItem.className = 'subNavItem'
    inputItem.placeholder = 'Sub Nav Item'
    var linkInput = document.createElement('input');
    linkInput.className = 'link'
    linkInput.placeholder = 'page path'
    var button = document.createElement('button');
    button.innerText = 'Remove Item';
    button.onclick = function(){
        var form = document.getElementsByClassName('form')[0];
        form.removeChild(form.children[form.children.length - 1])
        form.removeChild(form.children[form.children.length - 1])
        form.removeChild(form.children[form.children.length - 1])
    }
    var form = document.getElementsByClassName('form')[0]
    form.appendChild(inputItem);
    form.appendChild(linkInput);
    form.appendChild(button);
}

function addNav(e){
    console.log(e.target.parentNode.children);
    var children = e.target.parentNode.children;
    var navName = document.getElementById('navName').value;
    console.log(navName);
    let subNav = [];
    let links = [];
    for(var i = 0; i < children.length; i++){
        if(children[i].className === 'subNavItem'){
            subNav.push(children[i]);
        } else if(children[i].className === 'link'){
            links.push(children[i])
        }
    }
    console.log(subNav)
    createNav(navName, subNav, links);
}

function createNav(name, items, links){
    console.log(name, items);
    var outList = document.createElement('li'); //outerlist
    outList.innerText = name;
    var container = document.createElement('div'); //div holding the sub items
    container.className = name;
    var innerList = document.createElement('ul'); //ul holding the subitems
    for(var i = 0; i < items.length; i++){
        var aTag = document.createElement('a');
        aTag.href = links[i].value;
        var subItem = document.createElement('li'); //items themselves
        subItem.innerHTML = items[i].value;
        aTag.appendChild(subItem);
        innerList.appendChild(aTag);
    }
    console.log(innerList);
    container.appendChild(innerList);
    outList.appendChild(container);
    var navItems = document.getElementsByClassName('nav-items')[0];
    navItems.appendChild(outList);
    hover(); //gives the new nav the hover effect
}