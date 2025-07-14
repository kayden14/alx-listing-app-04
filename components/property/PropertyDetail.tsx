// components/property/PropertyDetail.tsx

interface PropertyDetailProps {
  property: {
    id: number;
    title: string;
    location: string;
    price: number;
    description: string;
    image: string;
    [key: string]: any; // To support any extra dynamic fields
  };
}

import ReviewSection from "./ReviewSection";

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-64 object-cover rounded mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{property.title}</h1>
      <p className="text-gray-500 mb-2">{property.location}</p>
      <p className="text-green-600 font-bold text-lg mb-4">
        GH₵{property.price}
      </p>
      <p className="text-gray-700">{property.description}</p>
      <ReviewSection propertyId={property.id} />
    </div>
  );
}
