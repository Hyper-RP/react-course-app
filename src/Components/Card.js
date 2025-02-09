import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { toast } from "react-toastify";
function Card({ eachCourse, like, setLike }) {

  
  const isLiked = like.includes(eachCourse.title);

  function clickHandler(title) {
    if (isLiked) {
      toast.warning("Unliked Successfully");
      setLike((like) => like.filter((item) => item !== title));
    } else {
      toast.success("Liked Successfully");
      setLike((like)=>[...like, title]);
    }
  }

  return (
    <>
      <div className=" relative w-[20rem] mx-auto my-[1rem] text-[1.1rem] bg-[#00000081] font-[400] text-white flex flex-col items-center border-solid border-[2px] border-[black] ">
        <img
          src={eachCourse.image.url}
          alt={eachCourse.alt}
          style={{ height: "200px", width: "350px" }}
        ></img>
        <button
          onClick={() => clickHandler(eachCourse.title)}
          className=" bg-[#ffffff] p-[0.5rem] rounded-full absolute top-[10rem] right-[0.1rem]"
        >
          {isLiked ? (
            <FcLike fontSize="2.5rem" />
          ) : (
            <FcLikePlaceholder fontSize="2.5rem" />
          )}
        </button>
        <div className="text-[1.3rem] mt-[0.7rem] font-[600]">
          {eachCourse.title}
        </div>
        <div className="p-[0.5rem]">{eachCourse.description}</div>
      </div>
    </>
  );
}

export default Card;
