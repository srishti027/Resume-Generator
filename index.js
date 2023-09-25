function addNewField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("hey");
    newNode.setAttribute('placeholder', "Enter here");
    let EducatOb = document.getElementById("Educat");
    let edufieldOb = document.getElementById("edufield");
    
    EducatOb.insertBefore(newNode, edufieldOb);
}
function addExField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("hey");
    newNode.setAttribute('placeholder', "Enter here");
    let AExOb = document.getElementById("AEx");
    let exFieldOb = document.getElementById("exField");
    
    AExOb.insertBefore(newNode, exFieldOb);

}
// function addLField() id LCField id LCx
function addLField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("hey");
    newNode.setAttribute('placeholder', "Enter here");
    let LCxOb = document.getElementById("LCx");
    let LCFieldOb = document.getElementById("LCField");
    
    LCxOb.insertBefore(newNode, LCFieldOb);

}