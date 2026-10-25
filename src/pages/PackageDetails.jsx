import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ArrowLeft,
  MapPin,
  Clock,
  Tag,
  CalendarDays,
  CheckCircle
} from "lucide-react";
import { fetchPackages } from "../slice/packageSlice";

const PackageDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { packages, loading, error } = useSelector(
    (state) => state.packageInfo
  );

  useEffect(() => {
    if (!packages || packages.length === 0) {
      dispatch(fetchPackages());
    }
  }, [dispatch, packages]);

  const selectedPackage = packages?.find(
    (item) => String(item.id) === id
  );

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="animate-pulse text-lg font-medium text-blue-500">
          Loading package details...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 text-center text-red-500">
        Failed to load package details.
      </div>
    );
  }

  if (!selectedPackage) {
    return (
      <div className="py-20 text-center">
        <h2 className="mb-4 text-2xl font-bold">
          Package not found
        </h2>
        <button
          onClick={() => navigate("/package")}
          className="rounded-lg bg-blue-500 px-6 py-3 text-white"
        >
          Back to Packages
        </button>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">

        {/* Back Button */}
        <button
          onClick={() => navigate("/package")}
          className="mb-6 inline-flex items-center gap-2 rounded-lg px-3 py-2
          font-medium text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
        >
          <ArrowLeft size={20} />
          Back to Packages
        </button>

        {/* Details Card */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-xl shadow-slate-200/60">

          {/* Image */}
          <div className="relative h-64 sm:h-80 lg:h-[430px]">
            <img
              src={`/images/Package/${selectedPackage.image}`}
              alt={selectedPackage.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            <span className="absolute left-5 top-5 rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
              {selectedPackage.category}
            </span>

            <div className="absolute bottom-6 left-5 right-5 text-white sm:bottom-8 sm:left-8">
              <div className="mb-2 flex items-center gap-2 text-sm font-medium">
                <MapPin size={18} />
                {selectedPackage.destination}
              </div>

              <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                {selectedPackage.title}
              </h1>
            </div>
          </div>

          {/* Package Information */}
          <div className="grid gap-8 p-5 sm:p-8 lg:grid-cols-[1fr_320px] lg:p-10">

            {/* Left Content */}
            <div>
              <h2 className="mb-4 text-2xl font-bold text-slate-800">
                About This Package
              </h2>

              <p className="leading-8 text-slate-600">
                {selectedPackage.description}
              </p>

              {/* Information Cards */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">

                <div className="rounded-2xl bg-blue-50 p-5">
                  <Clock className="mb-3 text-blue-500" size={26} />
                  <p className="text-sm text-slate-500">Duration</p>
                  <h3 className="mt-1 font-semibold text-slate-800">
                    {selectedPackage.duration}
                  </h3>
                </div>

                <div className="rounded-2xl bg-blue-50 p-5">
                  <MapPin className="mb-3 text-blue-500" size={26} />
                  <p className="text-sm text-slate-500">Destination</p>
                  <h3 className="mt-1 font-semibold text-slate-800">
                    {selectedPackage.destination}
                  </h3>
                </div>

                <div className="rounded-2xl bg-blue-50 p-5">
                  <Tag className="mb-3 text-blue-500" size={26} />
                  <p className="text-sm text-slate-500">Package Type</p>
                  <h3 className="mt-1 font-semibold text-slate-800">
                    {selectedPackage.category}
                  </h3>
                </div>

              </div>

              {/* Highlights */}
              <div className="mt-9">
                <h2 className="mb-4 text-xl font-bold text-slate-800">
                  Package Highlights
                </h2>

                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-600">
                    <CheckCircle size={20} className="shrink-0 text-green-500" />
                    Explore {selectedPackage.destination}
                  </div>

                  <div className="flex items-center gap-3 text-slate-600">
                    <CheckCircle size={20} className="shrink-0 text-green-500" />
                    {selectedPackage.duration} travel experience
                  </div>

                  <div className="flex items-center gap-3 text-slate-600">
                    <CheckCircle size={20} className="shrink-0 text-green-500" />
                    Memorable holiday experience
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Card */}
            <aside className="h-fit rounded-2xl border border-slate-100 p-6 shadow-lg">
              <p className="text-sm text-slate-500">
                Package Price
              </p>

              <h2 className="mt-2 text-3xl font-bold text-blue-600">
                ₹{Number(selectedPackage.price).toLocaleString("en-IN")}
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                Price per person
              </p>

              <hr className="my-6 border-slate-200" />

              <div className="mb-5 flex items-start gap-3 text-slate-600">
                <CalendarDays size={21} className="shrink-0 text-blue-500" />
                <div>
                  <p className="font-medium text-slate-800">
                    Travel Duration
                  </p>
                  <p className="mt-1 text-sm">
                    {selectedPackage.duration}
                  </p>
                </div>
              </div>

              <button
                onClick={() =>
                  navigate(`/booking/${selectedPackage.id}`)
                }
                className="w-full rounded-xl bg-blue-500 px-5 py-4 font-semibold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-600"
              >
                Book This Package
              </button>

              <p className="mt-4 text-center text-xs text-slate-500">
                Your next adventure starts here!
              </p>
            </aside>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageDetails;