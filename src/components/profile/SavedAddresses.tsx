import React from "react";
import { MapPin, Edit } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SavedAddresses() {
  const router = useRouter();
  
  // Sample data - in a real app this would come from state/API
  const savedAddresses = [
    {
      id: 1,
      name: "Santosh Mudragada",
      address: "D.no - 1/170 Damireddypalli, Kadiam, Andhra Pradesh, India. 533126",
    },
    {
      id: 2,
      name: "Santosh Mudragada",
      address: "D.no - 1/170 Damireddypalli, Kadiam, Andhra Pradesh, India. 533126",
    },
    {
      id: 3,
      name: "Santosh Mudragada",
      address: "D.no - 1/170 Damireddypalli, Kadiam, Andhra Pradesh, India. 533126",
    },
  ];

  const handleAddAddressClick = () => {
    router.push("/address");
  };

  const handleEditAddress = () => {
    router.push(`/address`);
  };

  return (
    <div className="py-12">
      {savedAddresses.length > 0 ? (
        <div>
          <div className="flex justify-end items-center mb-6">
          <button
            onClick={handleAddAddressClick}
            className="px-6 py-2 bg-primary1 text-white hover:bg-primary2 transition-colors duration-200 cursor-pointer rounded"
          >
            + Add New Address
          </button>
            
          </div>
          
          <div className="overflow-x-auto pb-2">
            <div className="flex gap-4 lg:grid lg:grid-cols-3 lg:gap-6 min-w-max lg:min-w-0">
              {savedAddresses.map((address) => (
                <div
                  key={address.id}
                  className="bg-white p-4 rounded-lg border border-gray-200 flex-shrink-0 w-72 lg:w-full relative shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="mb-3">
                    <h3 className="font-semibold text-gray-800 font-lato pr-8">{address.name}</h3>
                  </div>
                  <div className="flex items-start mb-10">
                    <MapPin size={16} className="text-primary1 mr-2 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-600 leading-relaxed font-lato">
                      {address.address}
                    </p>
                  </div>
                  <button 
                    onClick={() => handleEditAddress()}
                    className="absolute bottom-3 right-3 text-primary1 hover:text-primary2 text-sm flex items-center gap-1 px-2 py-1 rounded transition-colors cursor-pointer"
                  >
                    <Edit size={12} />
                    <span className="font-lato text-xs">Edit</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center">
          <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No saved addresses
          </h3>
          <p className="text-gray-500 mb-6">
            Add your delivery addresses for faster checkout
          </p>
          <button
            onClick={handleAddAddressClick}
            className="px-6 py-2 bg-primary1 text-white hover:bg-primary2 transition-colors duration-200 cursor-pointer rounded"
          >
            Add Address
          </button>
        </div>
      )}
    </div>
  );
}