
//Headers CSS Import
import '../cssFiles/headerTop.css';
import "../cssFiles/headerMiddle.css";
import "../cssFiles/headerEnd.css";
//Headers jsx Import
import Headertop from './HeaderTop';
import HeaderMiddle from './HeaderMiddle';
import HeaderEnd from './HeaderEnd';

const MainNave = () =>{
    return(

        <>
        
        <Headertop />
        <HeaderMiddle/>
        <HeaderEnd/>
        </>
        
    )
}

export default MainNave;