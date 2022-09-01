import React from "react"
import Heading from "./Heading"
import Cardpg3 from "./Cardpg3"
import {la,lb,lc} from "../page-3"
function createcard(card){
    return(
        <Cardpg3
CardContent={card.content}
CardHeading={card.heading}
 />
    )

}

function Page3(props){
return(
    <div className="page3">
<Heading

marginbottom="50px"
text="Educaton/Advantages"
margintop="150px"
/>
<div className="pg3body">


<div className="pg3la">
{/* <Cardpg3
CardContent="Bachlor of degree desgin"
CardHeading="RMNIT University"
 />
<Cardpg3
CardContent="Bachlor of degree desgin"
CardHeading="RMNIT University"
 /> */}
{la.map(createcard)}
</div>  
<div className="pg3lb">
{lb.map(createcard)}
</div>  
<div className="pg3lc">

{lc.map(createcard)}
</div>  




</div>








    </div>
)
}
export default Page3;