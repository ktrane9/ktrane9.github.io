var givenID = 4;
var lastID = shift(givenID);

function change() {
    alert("The button was changed.");
    document.getElementById('item4').innerHTML = "Change";
}

function initial() {
    /*Creates first four items*/
}

function user_add() {
    var input = prompt("Please Add and Item to the Checklist");
    if(input != null)
        return input;
}

function shift(x) {
    /*Changes item names when removed or added*/
    x++;
    return x;
}

function add_item() {
    var id = lastID;
    var element = document.createElement("li");
    element.id = "item" + id.toString();
    var input = user_add();
    element.appendChild(document.createTextNode(input + " "));

    var button = document.createElement("button");
    button.id = id.toString();
    button.appendChild(document.createTextNode("-"));

    var input = document.createElement("input");
    input.id = "box" + id.toString();
    input.type = "checkbox";

    document.querySelector('ul').appendChild(element);
    document.querySelector("#" + element.id.toString()).appendChild(button);
    button.onclick = function() {delete_item(id)};

    lastID = shift(id);
}

function delete_item(id) {
    //document.getElementById("item"+ id.toString()).innerHTML = "";
    var item = document.getElementById("item" + id.toString());
    item.remove();
    //document.getElementById("item1").innerHTML = id.toString();

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
