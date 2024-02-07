// import TreeView from "../tree-view";
import LoadMoreData from "../load-more-data";
import Tabs from "./tabs";
import "./tabs.css"
import LightDarkMode from "../dark-light-mode";

function RandomComponent(){

    return <h1>This is some Random Content</h1>
    
}

export default function TabTest(){

    const tabs = [
        {
            label : 'Light/Dark Mode',
            content : <LightDarkMode/>
        },
        {
            label : 'Load More Data',
            content : <LoadMoreData />
 
            
        },
        {
            label : 'Random',
            content : <RandomComponent/>
        }
    ]

    function handleChange(currentTabIndex){
        console.log(currentTabIndex);
    }

    return <Tabs tabsContent={tabs} onChange={handleChange}/>
}