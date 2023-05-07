import Stack from 'react-bootstrap/Stack';
import { useState} from 'react';

import ToolTip from './tooltip';
function Home() {
  const [position,setPosition] = useState('right') //default  postion of react Tooltip right

    //set the position of the tooltip
    const _tooltipPosition =(ptn)=>{
      setPosition(ptn)
    }
  return (

    <>
      <div className="container">
        <div className="btn-group">
        <Stack direction="horizontal" gap={4}>
            <button type="button" class="btn btn-primary " onClick={(e)=>{_tooltipPosition('top')}}>Top</button>
            <button type="button" class="btn btn-primary" onClick={(e)=>{_tooltipPosition('right')}}>Right</button>
            <button type="button" class="btn btn-primary" onClick={(e)=>{_tooltipPosition('left')}}>Left</button>
            <button type="button" class="btn btn-primary" onClick={(e)=>{_tooltipPosition('bottom')}}>Bottom</button>
          </Stack>
        </div>
        <div className="container-tooltip">
          
          <ToolTip 
              position={position}
          />
        </div>
          </div>
         
          
    </>
  )
}

export default Home