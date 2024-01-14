import './rect.css'
import { deleteBlock } from '../App';
import { useState } from "react";
let Draggable = require('react-draggable');
let DraggableCore = Draggable.DraggableCore;


const Block = (props) => {
    const [blockValue, setBlockValue] = useState('');
    return (
        <Draggable class="Rect">
            <div class="Rect" id={props.blockID}>
                <div class="Rectheader">Click here to move</div>

                <div id="Options">
                    <div class="dropdown">
                        <button class="deletebtn" onclick={() => deleteSelf(props.blockID)}>Delete</button>
                        <input class="inputBox" type="text" placeholder="enter an equation" value={blockValue}
                            onChange={({ target }) => {
                                setBlockValue(target.value);
                                //onsole.log(target.value);
                            }} />
                    </div>
                </div>
            </div >
        </Draggable>

    );

}

function Submit() {
    let var1 = document.querySelector("#var1");
    let var2 = document.querySelector("#var2");
    alert(var1.value)
}

function deleteSelf(id) {
    console.log('q232131231');
    document.getElementById(id).remove();
    deleteBlock(id);
}

export default Block;