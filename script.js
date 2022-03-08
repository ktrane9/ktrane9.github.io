var givenID = 4;
var lastID = shift(givenID);

function change() {

    alert("The button was changed.");
    document.getElementById('item4').innerHTML = "Change";
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
    element.appendChild(button);

    //Creating Break Element
    var br = document.createElement("br");
    br.id = "break" + id.toString();

    //Adding Li Element to the Ul, adding <br> to the Ul Element
    document.querySelector('ul').appendChild(element);
    document.querySelector('ul').appendChild(br);
    //document.querySelector("#" + element.id.toString()).appendChild(button);
    button.onclick = function() {delete_item(id)};

    lastID = shift(id);
}

function delete_item(id) {

    var item = document.getElementById("item" + id.toString());
    var br = document.getElementById("break" + id.toString());
    item.remove();
    br.remove();
}

/*function initial() {
    //Creates first four items*
}*/

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
