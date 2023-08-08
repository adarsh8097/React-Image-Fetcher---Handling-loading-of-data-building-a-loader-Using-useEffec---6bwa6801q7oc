import React from 'react';

export const PhotoFrame = ({url,title}) => {
    
   return( 
    <div className="photoframe">
        <img src={url} alt={title}></img>
        <div className="caption">{title}</div>
    </div>
   );
};
