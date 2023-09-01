import React, { useState } from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
const Card = (props) => {
  const { title, image, description: desc } = props.course;
  const [like, setLike] = useState(false);
  function handleLike() {
    like ? toast.info("Course DisLiked") : toast.success("Course Liked");
    setLike(!like);
  }
  return (
    <div className="flex flex-col w-[300px] rounded-md bg-slate-600  py-2 px-3">
      {/* image */}
      <div className="relative rounded-sm overflow-hidden w-full ">
        <img src={image.url} alt={image.alt} className="object-cover" />
        {/* like button */}
        <button
          onClick={handleLike}
          className="absolute right-0 bottom-0 px-2 py-1 w-max h-max rounded-full "
        >
          {!like ? <FcLikePlaceholder size={25} /> : <FcLike size={25} />}
        </button>
      </div>
      {/* heading */}
      <h1 className="my-2 text-[1.1rem] text-white font-extrabold">{title}</h1>
      {/* para */}
      <p>{desc}</p>
    </div>
  );
};

export default Card;
