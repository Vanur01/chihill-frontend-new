import React, { Suspense } from "react";
import { AddressConent } from "./AddressContent";
import ProtectedRoute from "@/components/RouteProtect";
import { Loader } from "lucide-react";

const AddressPage = () => {
  return (
    <ProtectedRoute>
      <div>
        <Suspense
          fallback={
            <div>
              <Loader className="animate-spin mx-auto" size={40} />
            </div>
          }
        >
          <AddressConent />
        </Suspense>
      </div>
    </ProtectedRoute>
  );
};

export default AddressPage;
