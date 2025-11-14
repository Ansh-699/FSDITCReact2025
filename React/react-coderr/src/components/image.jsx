import { useState } from 'react';
import Profile from '../profile.jsx';
import '../App.css';
import '../profile.css';

export function Image(){
const [count, setCount] = useState(0);
const [imageSize, setImageSize] = useState({ width: 600, height: 200 });
const [red,setred]=useState(0);
const [blue,setblue]=useState(0);
const [green,setgreen]=useState(0);
const [imageangle,setImageangle]=useState(0);


function rotateImage(){
  setImageangle(imageangle+90);
}



function setcolor(){
  setred(Math.floor(Math.random()*256))
  setblue(Math.floor(Math.random()*256))
  setgreen(Math.floor(Math.random()*256))
  rotateImage();
};

const profiles = [
  { id: 1, name: "Ansh Tyagi", className: "IT-C", rollno: 52 },
  { id: 2, name: "Priya Singh", className: "IT-A", rollno: 12 },
  { id: 3, name: "Rahul Kumar", className: "IT-B", rollno: 8 },
  { id: 4, name: "Sneha Sharma", className: "IT-D", rollno: 19 },
];

const increment = () => setCount(count + 1);
const decrement = () => setCount(count - 1);

const increaseImageSize = () => {
  setImageSize({
    width: imageSize.width + 100,
    height: imageSize.height + 100,
  });
  rotateImage();
};

const decreaseImageSize = () => {
  setImageSize({
    width: Math.max(100, imageSize.width - 100),
    height: Math.max(50, imageSize.height - 50),
  });
  rotateImage();
};

return (
  <div
  style={{
      backgroundColor: `rgb(${red}, ${green}, ${blue})`,
      minHeight: "100vh",
      padding: "20px",
      border: "2px solid black",
      borderRadius: "10px",
    }}>
    <h1>Profile Page</h1>

    <div className="profile-list">
      {profiles.map((profile) => (
        <Profile
          key={profile.id}
          name={profile.name}
          className={profile.className}
          rollno={profile.rollno}
        />
      ))}
    </div>

    <div className="counter">
      <p>Count: {count}</p>

      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={rotateImage}>Rotate Image</button>

      <div>
        <img
          src="/asset/image.png"
          alt="img"
          width={imageSize.width}
          height={imageSize.height}
          style={{ transform: `rotate(${imageangle}deg)` }}
        />

        <div>
          <button onClick={increaseImageSize}>Increase Size</button>
          <button onClick={decreaseImageSize}>Decrease Size</button>
          <button onClick={setcolor}>change bg color</button>
        </div>
      </div>
    </div>
  </div>
);
}
