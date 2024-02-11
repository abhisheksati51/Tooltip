import { useState } from "react"

function Tooltip({text,children})
{
    const [isVisible , setVisible] = useState(false);
    return<>
     <div className="tooltip-container"
     onMouseEnter={()=>setVisible(true)}
     onMouseLeave={()=>setVisible(false)}>
        {children}
        {isVisible &&  <div className="tooltip-Element">{text}</div>}
      
     </div>
    </>
}

export default Tooltip;