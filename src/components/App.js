import React, { useState } from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';
const App = () => {

  const[imageId, setImageId] = useState('');
  const[isLoading, setisLoding] = useState(false);
  const[imageInfo,setImageInfo] = useState({});
 
  let handleChange =(ev)=>{
    //console.log(ev.target.value);
    const {value} =ev.target;
    const fetchImage = async(id)=>{

      try{
        setisLoding(true);
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        const data = await res.json();
         // console.log(data);
          setisLoding(false);
          setImageInfo(data);
         console.log(data);

      }
      catch(err){
        setisLoding(false);
        console.log(err);

      }
    }
    setImageId(value);
    fetchImage(value);
    
  }
    

    return(
       <div>
        <label htmlFor='imageId'>Id number</label>
        <input type="number" onChange={handleChange} value={imageId} />
       {
         isLoading ? <Loader /> : imageId && < PhotoFrame url={imageInfo.url} title={imageInfo.title}/>
       }
       </div>
    )
  
}


export default App;
