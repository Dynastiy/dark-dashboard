//Side Bar Toggle
function toggleBtn(){
    var sideArea = document.getElementById('aside')
    var sideBar = document.getElementById('main');
    // var contentbox =  document.getElementById('content-box')
    if (sideArea.style.width !== '45px'){
        sideArea.style.width = '45px';
        sideBar.style.marginLeft = '45px';
        // contentbox.style.marginLeft = '45px';
    }
    else{
        sideArea.style.width = '300px';
        sideBar.style.marginLeft = '300px';
        // contentbox.style.marginLeft = '300px';
    }
    sideArea.classList.toggle("collapsed")
}

//DropDown Toggle
