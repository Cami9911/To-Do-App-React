import React from 'react'
import './ListItems.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function ListItems(props){
    let items = props.items;
    let listItems;
    if(items){
    listItems = items.map(item =>
        {
            return <div className="list" key={item.key}>
                <p>{item.text}
                    <span>
                        <FontAwesomeIcon className="faicons" icon='trash'
                        onClick={() => props.deleteItem(item.key)}/>
                    </span>
                </p>
            </div>
        })
    }
    else{
        listItems="Updating component";
    }
    return <div>{listItems}</div>
}

export default ListItems;
