export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-5">

      <div className="grid md:grid-cols-2 bg-white rounded-3xl shadow-xl overflow-hidden max-w-5xl w-full">

        {/* Image Side */}
        <div
          className="hidden md:flex bg-cover bg-center items-center justify-center text-white p-10"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5')"
          }}
        >
          <div className="bg-black/50 p-8 rounded-2xl">
            <h1 className="text-4xl font-bold mb-4">
              🏗️ BuildLink
            </h1>

            <p className="text-lg">
              Connect with trusted suppliers and find construction materials faster.
            </p>
          </div>
        </div>


        {/* Login Form */}
        <div className="p-8 md:p-12">

          <h2 className="text-3xl font-bold text-blue-700 mb-2">
            Welcome Back
          </h2>

          <p className="text-gray-600 mb-8">
            Login to continue using BuildLink
          </p>


          {/* Account Type */}
          <div className="flex gap-3 mb-6">

            <button className="flex-1 bg-blue-700 text-white py-3 rounded-xl">
              Customer
            </button>

            <button className="flex-1 bg-orange-500 text-white py-3 rounded-xl">
              Supplier
            </button>

          </div>


          <input
            type="email"
            placeholder="Email address"
            className="w-full p-4 mb-4 rounded-xl border focus:outline-blue-600"
          />


          <input
            type="password"
            placeholder="Password"
            className="w-full p-4 mb-4 rounded-xl border focus:outline-blue-600"
          />


          <div className="flex justify-between text-sm mb-6">
            <label>
              <input type="checkbox" /> Remember me
            </label>

            <a className="text-blue-600">
              Forgot password?
            </a>
          </div>


          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-bold text-lg">
            Login
          </button>


          <p className="text-center mt-6 text-gray-600">
            Don't have an account?
            <span className="text-blue-700 font-bold ml-2">
              Create Account
            </span>
          </p>

        </div>

      </div>

    </main>
  );
}
