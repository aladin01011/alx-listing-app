import { PropertyProps } from "@/interfaces";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">{property.name}</h1>
      <div className="text-gray-500 mb-4">
        {property.rating} ★ – {property.address.city}, {property.address.country}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {property.images?.map((src, index) => (
          <img key={index} src={src} className="w-full h-64 object-cover rounded" alt={`Image ${index + 1}`} />
        ))}
      </div>

      {/* Tabs - simplified (can be expanded with state) */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Description</h2>
        <p>{property.description}</p>
      </div>

      {/* Amenities */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">What this place offers</h2>
        <ul className="flex flex-wrap gap-2">
          {property.category.map((amenity, index) => (
            <li key={index} className="bg-gray-100 px-3 py-1 rounded text-sm">{amenity}</li>
          ))}
        </ul>
      </div>

      {/* Booking + Review */}
      <div className="mt-8 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2">
          <ReviewSection reviews={property.reviews} />
        </div>
        <div className="lg:w-1/2">
          <BookingSection price={property.price} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
