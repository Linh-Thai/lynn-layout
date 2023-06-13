import React from "react";
import { useDrag } from "react-dnd";

const imageStyle = {
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
};

const SideBarItem = ({ data }) => {
  const [{ opacity }, drag] = useDrag({
    item: data,
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.4 : 1
    })
  });
  
  return (
    <div className={`sideBarItem ${data.component.image}`} ref={drag} style={{ ...imageStyle, opacity}}>
      {data.component.type}
    </div>
  );
};
export default SideBarItem;
