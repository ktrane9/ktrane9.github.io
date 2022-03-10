var givenID = 4;
var lastID = shift(givenID);
var sound = new Audio();
sound.src = "OOT_PauseMenu_Select.wav";

var check_array = [];
initial(check_array);

function change() {

    alert("The button was changed.");
    document.getElementById('item4').innerHTML = "Change";
}

function initial(check_array) {
    //Creates first four items*
    for(i = 0; i < 4; i++) {
        var j = i+1;
        //var check = document.getElementById("box" + j.toString());
        var check_prop = {index:i, id:("box" + j.toString()), value:false};
        check_array[i] = check_prop;
    }
    
}

function search(id) {

    var item = document.getElementById(id);
    for(i = 0; i < check_array.length; i++) {
        if(check_array[i].id === item.id) {
            //return check_array[i].value;
            return i;
        }
    }
}

function set(i) {

    var j = i + 1;

    if(check_array[i].value == false) {
        var check_prop = {index:i, id:("box" + j.toString()), value:true};
        check_array[i] = check_prop;
    }
    
    else {
        var check_prop = {index:i, id:("box" + j.toString()), value:false};
        check_array[i] = check_prop;
    }

}

function user_add() {

    var input = prompt("Please Add an Item to the Checklist");
    if(input != null)
        return input;
}

function shift(x) {
    /*Increments the given variable every 
    time it is called, then returns it.*/
    x++;
    return x;
}

function play_sound(id) {
    var i = search(id);

    if(check_array[i].value == false) {
        sound.play();
        set(i);
    }
    else
        set(i);
}

function add_item() {

    //Creating List Element and Prompting User
    var id = lastID;
    var element = document.createElement("li");
    element.id = "item" + id.toString();
    var text = user_add();

    //Creating Checkbox
    var input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    input.id = "box" + id.toString();
    input.onclick = function() {play_sound(input.id)};
    

    //Creating Date Box
    var date = document.createElement("input");
    date.setAttribute("type", "date");
    
    element.appendChild(input);
    element.appendChild(document.createTextNode(" " + text + " "));
    element.appendChild(date);
    element.appendChild(document.createTextNode(" "));

    //Creating and Adding Button
    var button = document.createElement("button");
    button.id = id.toString();
    button.appendChild(document.createTextNode("Delete"));
    button.onclick = function() {delete_item(id)};
    element.appendChild(button);

    //Creating Break Element
    var br = document.createElement("br");
    br.id = "break" + id.toString();

    //Adding Li Element to the Ul, adding <br> to the Ul Element
    document.querySelector('ul').appendChild(element);
    document.querySelector('ul').appendChild(br);
    //document.querySelector("#" + element.id.toString()).appendChild(button);
    var check_prop = {index:(id-1), id:("box" + id.toString()), value:false};
    check_array[id-1] = check_prop;

    lastID = shift(id);
}

function delete_item(id) {

    var item = document.getElementById("item" + id.toString());
    var br = document.getElementById("break" + id.toString());
    item.remove();
    br.remove();
}

/*function check(id) {
    id = id.charAt(3);
    var item = document.getElementById("item" + id.toString());
    var element = document.createElement("s");

    var text = item.textContent;
    element.appendChild(document.createTextNode(text));
    item.textContent = "";

    var button = document.getElementById(id.toString());
    item.insertBefore(element, button);
}*/
