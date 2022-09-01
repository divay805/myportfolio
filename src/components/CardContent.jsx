import React from "react";
function CardContent(props){
    const style={
        fontSize:`${props.size}`,
        fontFamily: "'Oswald', sans-serif",
        fontWeight:"300",
        color: "#000000",
        textAlign:`${props.align}`,
        margin:`${props.margin}`
    
    }
    return(
        <p style={style}>
           { props.text}
        </p>
    )
}
export default CardContent;