import { useRouter } from "next/router";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id);

  if (!property) return <p className="text-center mt-10">Property not found</p>;

  return (
    <div className="container mx-auto p-4 flex flex-col lg:flex-row gap-8">
      <div className="flex-1">
        <PropertyDetail property={property} />
      </div>
    </div>
  );
}
