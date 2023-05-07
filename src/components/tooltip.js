import { useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip  from 'react-bootstrap/Tooltip';


function ToolTip(props) {
    
    //return the tooltip function 
    const _tooltipContent = props => (
        <Tooltip id="button-tooltip" {...props}>
          Thanks For Hovering, I'm a simple ToolTip
        </Tooltip>
      );

  return (
    
    <OverlayTrigger
        placement={props.position}
        overlay={_tooltipContent}
    >
        <Button variant="primary" >Hover over me</Button>
    </OverlayTrigger>

    
  )
}

export default ToolTip