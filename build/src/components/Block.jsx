import './rect.css'

const Block = (idString, headerString) => {
    return (
        <div className="Rect" id={idString} onMouseDown={() => dragElement(document.getElementById(idString), headerString)}>
            <div className="Rectheader" id={headerString}>Click here to move</div>
            <p>Moveable</p>
            <div id="Options">
                <div class="dropdown">
                    <button class="dropbtn">i</button>
                    <div class="dropdown-content">
                        <label for="var1">Variable1: </label>
                        <input type="text" id="var1" name="var1" /><br></br>
                        <label for="var2">Variable2: </label>
                        <input type="text" id="var2" name="var2" /><br></br>
                        <button onclick="Submit()">Submit</button>
                    </div>
                </div>
            </div>
        </div >

    );

}

function dragElement(elmnt, hd) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(hd)) {
        /* if present, the header is where you move the DIV from:*/
        document.getElementById(hd).onmousedown = dragMouseDown;

    } else {
        /* otherwise, move the DIV from anywhere inside the DIV:*/
        elmnt.onmousedown = dragMouseDown;
    }





    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();

        // get the mouse cursor position at startup:
        /*
        var original = document.getElementById("Duplicate");
        var clone = original.cloneNode(true); // "deep" clone
        clone.id = "Duplicate" + ++i;
        // or clone.id = ""; if the divs don't need an ID
        original.parentNode.appendChild(clone);
        */

        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        /* stop moving when mouse button is released:*/
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function Submit() {
    let var1 = document.querySelector("#var1");
    let var2 = document.querySelector("#var2");
    alert(var1.value)
}

export default Block;