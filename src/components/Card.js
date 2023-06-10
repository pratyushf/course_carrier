import React from 'react';
import { FcLike ,FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';

export default function Card({ course , likedCourses, setLikedCourses}) {

  function clickHandler(){
    if(likedCourses.includes(course.id)){
      setLikedCourses((e) => e.filter((cid) => (cid !== course.id)));
      toast.warning("Like Removed")
    }
    else{
      if(likedCourses.length === 0){
        setLikedCourses([course.id])
      }
      else{
        setLikedCourses((e)=>[...e,course.id])
      }
      toast.success("Liked Successfully")
    }
  }
  return (
    <div>

{/* ======================= */}
      <style>
        {`
          .card-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            width: 300px;
            height: 300px;
            border: 1px solid #ccc;
            border-radius: 10px;
            padding: 1rem;
            margin: 1rem;
            position: relative;
            background-color: #2b3945;
            color: #fff;
          }
          .card-container img {
            width: 100%;
            height: 60%;
            object-fit: contain;
          }
          .card-container button {
            background-color: #f0f0f0;
            border: none;
            border-radius: 50%;
            padding: 0.5rem;
            position: absolute;
            top: 0;
            right: 0;
            margin: 1rem;
            cursor: pointer;
          }
          .card-container button:hover {
            background-color: #dcdcdc;
          }
          .card-container p {
            margin: 0.5rem;
            font-size: 1rem;
          }
          .card-container p:first-child {
            font-weight: bold;
            font-size: 1.2rem;
          }
        `}
      </style>
{/* ======================= */}

      <div className="card-container">
        <img src={course.image.url} alt='/' />
        <div>
          <button onClick={clickHandler} >
            {likedCourses.includes(course.id)?(<FcLike fontSize="1.75rem" />):(<FcLikePlaceholder fontSize="1.75rem"  />)}
          </button>
        </div>
        <div>
          <p>{course.title}</p>
          <p>
            {
            course.description.length>100?course.description.substr(0,100)+"...":course.description
            }
            </p>
        </div>
      </div>
    </div>
  );
}
