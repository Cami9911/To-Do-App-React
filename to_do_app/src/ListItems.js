import React from 'react'
import './ListItems.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move'



function ListItems(props){
    let items = props.items;
    let listItems;
    if(items){
    listItems = items.map(item =>
        {
            return <div className="list" key={item.key}>
                <p>
                    <input type="text"
                    id={item.key}
                    value={item.text}
                    // onChange={
                    //     (e) =>{
                    //         props.editItem(e.target.value, item.key)
                    //     }
                    // }
            

                    />
                    <input type="checkbox"
                    //    onChange={
                    //     (e) =>{
                    //         props.checkItem(e.target.value, item.key)
                    //     }
                    //}
                    />
                    <span>
                        <FontAwesomeIcon className="faicons" icon='trash'
                        onClick={() => props.deleteItem(item.key)}/>
                    </span>
                    <span>
                        <FontAwesomeIcon className="faiconsCheck" icon='check'
                        style={{
                            textDecoration:"line-through"
                        }}
                        onClick={(e) => props.checkItem(e.target.value, item.key)}/>
                    </span> 
                    <span>
                        <FontAwesomeIcon className="faiconsEdit" icon='edit'
                        onClick={(e) => props.editItem(e.target.value,item.key)}/>
                    </span>
                </p>
            </div>
        })
    }
    else{
        listItems="Updating component";
    }
    return(
        <div>
            <FlipMove duration={500} easing="ease-in-out">
                {listItems}
            </FlipMove>
        </div>
    ) 
}

export default ListItems;
