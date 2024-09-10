function openPage(pageName, elmnt, color) {

    let tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    let tablinks = document.getElementsByClassName("tablink");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "transparent";
    }
   let content = document.getElementById(pageName);
    content.style.cssText = 'display : block;' +
                            ' border-radius: 0 20px 20px 20px;' +
                            ' height: auto;' +
                            'box-shadow: 2px 2px 10px 2px rgba(39, 52, 58, 0.15);' +
                            ' background: #fff'
    if(pageName === 'ask'){
        content.style.cssText = 'display : block;' +
            ' border-radius: 20px 20px 20px 20px;' +
            ' height: auto;' +
            'box-shadow: 2px 2px 10px 2px rgba(39, 52, 58, 0.15);' +
            ' background: #fff'
    }
    elmnt.style.cssText = ' background: #fff;'


    // elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
