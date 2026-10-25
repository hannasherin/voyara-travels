
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchPackages } from '../slice/packageSlice';
import { addBooking } from '../slice/bookingSlice';

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    packages,
    loading: packageLoading,
    error: packageError,
  } = useSelector((state) => state.packageInfo);

  const {
    loading: bookingLoading,
    error: bookingError,
  } = useSelector((state) => state.bookingInfo);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    travellers: '1',
    travelDate: '',
  });

  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!packages || packages.length === 0) {
      dispatch(fetchPackages());
    }
  }, [dispatch, packages]);

  const selectedPackage = packages?.find(
    (item) => String(item.id) === String(id)
  );

  const totalPrice =
    Number(selectedPackage?.price || 0) *
    Number(formData.travellers);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setMessage('');
  };

  const handleBooking = async (e) => {
    e.preventDefault();
    setMessage('');

    // Validate package
    if (!selectedPackage) {
      setMessage('Please select a valid package.');
      return;
    }

    // Validate name
    if (!formData.fullName.trim()) {
      setMessage('Please enter your full name.');
      return;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(formData.email.trim())) {
      setMessage('Please enter a valid email address.');
      return;
    }

    // Validate Indian mobile number
    if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
      setMessage('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    // Validate number of travellers
    const travellers = Number(formData.travellers);

    if (
      !Number.isInteger(travellers) ||
      travellers < 1 ||
      travellers > 20
    ) {
      setMessage('Travellers must be between 1 and 20.');
      return;
    }

    // Validate travel date
    if (!formData.travelDate) {
      setMessage('Please select a travel date.');
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const travelDate = new Date(
      `${formData.travelDate}T00:00:00`
    );

    if (
      Number.isNaN(travelDate.getTime()) ||
      travelDate < today
    ) {
      setMessage('Please select today or a future date.');
      return;
    }

    // Prepare booking data
    const bookingData = {
      packageId: String(selectedPackage.id),
      packageTitle: selectedPackage.title,
      destination: selectedPackage.destination,
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      travellers,
      travelDate: formData.travelDate,
      totalPrice:
        Number(selectedPackage.price) * travellers,
      status: 'Pending',
    };

    // Save through Redux thunk
    try {
      await dispatch(addBooking(bookingData)).unwrap();

      alert('Booking Successful!');
      navigate('/');
    } catch (error) {
      console.error('Booking failed:', error);

      setMessage(
        typeof error === 'string'
          ? error
          : 'Booking failed. Please try again.'
      );
    }
  };

  if (packageLoading && (!packages || packages.length === 0)) {
    return (
      <p className="py-10 text-center text-gray-600">
        Loading package...
      </p>
    );
  }

  if (packageError && (!packages || packages.length === 0)) {
    return (
      <p className="py-10 text-center text-red-600">
        {String(packageError)}
      </p>
    );
  }

  if (!selectedPackage) {
    return (
      <div className="py-16 text-center">
        <h2 className="text-2xl font-bold">
          Package not found
        </h2>

        <button
          onClick={() => navigate('/packages')}
          className="mt-5 rounded-lg bg-blue-500 px-5 py-3 text-white hover:bg-blue-600"
        >
          Browse Packages
        </button>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-12">
      <div className="mx-auto max-w-6xl">

        <h1 className="mb-2 text-3xl font-bold text-gray-900">
          Complete Your Booking
        </h1>

        <p className="mb-8 text-gray-500">
          Enter your details to book your trip.
        </p>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* Booking Form */}
          <div className="rounded-2xl bg-white p-6 shadow-md lg:col-span-2">
            <h2 className="mb-6 text-xl font-bold">
              Traveller Information
            </h2>

            <form onSubmit={handleBooking} className="space-y-5">

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  autoComplete="tel"
                  pattern="[6-9][0-9]{9}"
                  title="Enter a valid 10-digit Indian mobile number"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Number of Travellers
                  </label>

                  <input
                    type="number"
                    name="travellers"
                    value={formData.travellers}
                    onChange={handleChange}
                    min="1"
                    max="20"
                    step="1"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Travel Date
                  </label>

                  <input
                    type="date"
                    name="travelDate"
                    value={formData.travelDate}
                    onChange={handleChange}
                    min={new Date().toLocaleDateString('en-CA')}
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-blue-500"
                  />
                </div>

              </div>

              {(message || bookingError) && (
                <p role="alert" className="text-sm text-red-600">
                  {message || String(bookingError)}
                </p>
              )}

              <button
                type="submit"
                disabled={bookingLoading}
                className="w-full rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {bookingLoading
                  ? 'Submitting...'
                  : 'Confirm Booking'}
              </button>

            </form>
          </div>

          {/* Package Summary */}
          <aside className="h-fit overflow-hidden rounded-2xl bg-white shadow-md">

            <img
              src={
                selectedPackage.image?.startsWith('/') ||
                selectedPackage.image?.startsWith('http')
                  ? selectedPackage.image
                  : `/images/Package/${selectedPackage.image}`
              }
              alt={selectedPackage.title}
              className="h-52 w-full object-cover"
            />

            <div className="space-y-4 p-6">

              <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-600">
                {selectedPackage.category || 'Travel Package'}
              </span>

              <h2 className="pt-2 text-xl font-bold text-gray-900">
                {selectedPackage.title}
              </h2>

              <p className="text-sm text-gray-500">
                📍 {selectedPackage.destination}
              </p>

              <p className="text-sm text-gray-500">
                🗓️ {selectedPackage.duration}
              </p>

              <hr />

              <div className="flex justify-between text-sm text-gray-600">
                <span>Price per person</span>
                <span>
                  ₹{Number(selectedPackage.price).toLocaleString('en-IN')}
                </span>
              </div>

              <div className="flex justify-between text-sm text-gray-600">
                <span>Travellers</span>
                <span>{formData.travellers}</span>
              </div>

              <hr />

              <div className="flex items-center justify-between gap-3">
                <span className="font-semibold text-gray-800">
                  Total Price
                </span>

                <span className="text-2xl font-bold text-blue-600">
                  ₹{totalPrice.toLocaleString('en-IN')}
                </span>
              </div>

              <p className="text-xs text-gray-400">
                Booking status: Pending
              </p>

            </div>
          </aside>

        </div>
      </div>
    </section>
  );
};

export default Booking;
