import { FaStar } from "react-icons/fa";
import { RatingProps } from "../../../../types/rating";

function Rating({ rate }: RatingProps) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        const currentRating = index + 1; //from 0.1 to 1
        return (
          <div>
            <FaStar size={20} color={currentRating <= rate ? "gold" : "gray"} />
          </div>
        );
      })}
    </div>
  );
}

export default Rating;
