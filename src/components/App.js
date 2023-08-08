import React from 'react'
import '../styles/App.css';
import { Loader } from './Loader';
import { PhotoFrame } from './PhotoFrame';
const App = () => {

    const [number, setNumber] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [photoData, setPhotoData] = useState(null);
  
    const handleInputChange = (event) => {
      setNumber(event.target.value);
    };
    
    const fetchData = () => {
        setIsLoading(true);
        fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
          .then((response) => response.json())
          .then((data) => {
            setPhotoData(data);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching data:', error);
            setIsLoading(false);
          });
      };
    

    return(
        <div className= "photofram">
      <input
        type="number"
        value={number}
        onChange={handleInputChange}
        placeholder="Enter a number between 1-5000"
      />
      <button onClick={fetchData}>Fetch Data</button>
      {isLoading ? <Loader /> : null}
      {photoData && !isLoading ? (
        <PhotoFrame url={photoData.url} title={photoData.title} />
      ) : null}
    </div>
    )
  
}


export default App;
