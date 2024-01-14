import './rect.css'
import { deleteBlock } from '../App';
let Draggable = require('react-draggable');
let DraggableCore = Draggable.DraggableCore;

const Block = (props) => {
    return (
        <Draggable class="Rect">
            <div class="Rect" id={props.blockID}>
                <div class="Rectheader">Click here to move</div>

                <div id="Options">
                    <div class="dropdown">
                        <button class="deletebtn" onclick={() => deleteSelf(props.blockID)}>Delete</button>

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