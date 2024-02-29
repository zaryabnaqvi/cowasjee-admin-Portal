import { useForm } from "react-hook-form";
import { HiOutlinePhotograph, HiUserCircle } from "react-icons/hi";

export default function Profile() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container mx-auto my-20">
      <div className="bg-white shadow my-5 sm:rounded-lg border-t border-gray-200">
        <div className="px-4 py-5  sm:px-6">
          <h2 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
        </div>
        <div className="border-t border-gray-200">
          <div className="px-4 py-5 sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First name</label>
                <input type="text" {...register("first_name", { required: true })} id="first_name" autoComplete="given-name" className="mt-1 focus:ring-amber-500 focus:border-amber-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                {errors.first_name && <span className="text-red-500">First name is required</span>}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
                <input type="text" {...register("last_name", { required: true })} id="last_name" autoComplete="family-name" className="mt-1 focus:ring-amber-500 focus:border-amber-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                {errors.last_name && <span className="text-red-500">Last name is required</span>}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Meter No</label>
                <input type="text" {...register("last_name", { required: true })} id="last_name" autoComplete="family-name" className="mt-1 focus:ring-amber-500 focus:border-amber-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                {errors.last_name && <span className="text-red-500">Meter No is required</span>}
              </div>
            
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                <input type="text" {...register("email", { required: true })} id="email" autoComplete="email" className="mt-1 focus:ring-amber-500 focus:border-amber-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                {errors.email && <span className="text-red-500">Email is required</span>}
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country</label>
                <select id="country" {...register("country", { required: true })} autoComplete="country-name" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm">
                  <option value="">Select country</option>
                  <option value="us">United States</option>
                  <option value="ca">Canada</option>
                  <option value="mx">Mexico</option>
                </select>
                {errors.country && <span className="text-red-500">Country is required</span>}
              </div>
              <div className="col-span-6">
                <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">Street address</label>
                <input type="text" {...register("street_address", { required: true })} id="street_address" autoComplete="street-address" className="mt-1 focus:ring-amber-500 focus:border-amber-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                {errors.street_address && <span className="text-red-500">Street address is required</span>}
              </div>
              <div className="col-span-6 sm:col-span-2">
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                <input type="text" {...register("city", { required: true })} id="city" autoComplete="address-level2" className="mt-1 focus:ring-amber-500 focus:border-amber-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                {errors.city && <span className="text-red-500">City is required</span>}
              </div>
              <div className="col-span-6 sm:col-span-2">
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
                <input type="text" {...register("state", { required: true })} id="state" autoComplete="address-level1" className="mt-1 focus:ring-amber-500 focus:border-amber-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                {errors.state && <span className="text-red-500">State is required</span>}
              </div>
              <div className="col-span-6 sm:col-span-2">
                <label htmlFor="postal_code" className="block text-sm font-medium text-gray-700">ZIP / Postal code</label>
                <input type="text" {...register("postal_code", { required: true })} id="postal_code" autoComplete="postal-code" className="mt-1 focus:ring-amber-500 focus:border-amber-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                {errors.postal_code && <span className="text-red-500">ZIP / Postal code is required</span>}
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500">
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
