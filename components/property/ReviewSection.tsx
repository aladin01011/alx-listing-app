import { ReviewProps } from "@/interfaces";

const ReviewSection: React.FC<{ reviews: ReviewProps[] }> = ({ reviews }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Reviews</h2>
      {reviews.map((review, idx) => (
        <div key={idx} className="border-b pb-4 mb-4">
          <div className="flex items-center mb-2">
            <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full mr-3" />
            <div>
              <p className="font-bold">{review.name}</p>
              <p className="text-yellow-500 text-sm">{review.rating} ★</p>
            </div>
          </div>
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
