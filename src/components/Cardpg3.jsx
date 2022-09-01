import React from "react";
import CardHeading from "./CardHeading";
import CardContent from "./CardContent";
function Cardpg3(props){
const style={
    // height:"30vh",
    // width:"25vw"


}

return(
    <div style={style}>
<CardContent
text={props.CardContent}
align="Left"
size="22px"
margin="2px"

 />
<CardHeading
align="Left"
text={props.CardHeading}
size="14px"
 />
    </div>
)


}
export default Cardpg3;