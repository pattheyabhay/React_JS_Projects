import { useState } from "react";
import MenuList from "./menu-list";
import {FaMinus, FaPlus} from "react-icons/fa"
import "./style.css"

export default function MenuItem({item}){

    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({})

    function handleToggleChildren(getCurrentLabel){
        setDisplayCurrentChildren({
            ...displayCurrentChildren,  //making a shallow copy of the array of children
            [getCurrentLabel] : !displayCurrentChildren[getCurrentLabel], //out of that copy only getCurrentLabel is being updated
        });
    }
    console.log(displayCurrentChildren);

    return <li>
        
        <div className="menu-item">
            <p>{item.label}</p>
            {
                item && item.children && item.children.length > 0
                ? <span onClick={()=> handleToggleChildren(item.label)}>
                    {
                        displayCurrentChildren[item.label]? <FaMinus color="#fff" size={'20px'}/> : <FaPlus color="#fff" size={'20px'}/>

                    }
                </span>
                : null
            }
        </div>
        {
            item && item.children && item.children.length > 0 && displayCurrentChildren[item.label]
            ? <MenuList list={item.children}/>  //calling MenuList recurrsively to check if there are any other children
            :null
        }
    </li>
}