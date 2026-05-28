export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side: Visual/Branding */}
        <div className="md:w-1/2 bg-primary p-12 text-white flex flex-col justify-center space-y-6">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl mb-4">
            🎓
          </div>
          <h1 className="text-5xl font-extrabold leading-tight">
            Empowering <br />
            <span className="text-blue-200">Learning</span> <br />
            Together.
          </h1>
          <p className="text-blue-100 text-lg leading-relaxed">
            A comprehensive educational management portal designed for the modern classroom. 
            Streamlining administration, tracking progress, and enhancing student outcomes.
          </p>
          <div className="pt-8 flex gap-4">
            <div className="flex items-center gap-2 text-sm text-blue-100">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              Teacher Portal
            </div>
            <div className="flex items-center gap-2 text-sm text-blue-100">
              <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
              Student Portal
            </div>
          </div>
        </div>

        {/* Right Side: Login Access */}
        <div className="md:w-1/2 p-12 flex flex-col justify-center space-y-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
            <p className="text-gray-500">Please sign in to access your dashboard</p>
          </div>

          <div className="space-y-4">
            <a 
              href="/login" 
              className="w-full block text-center py-4 px-6 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/30"
            >
              Sign In to Portal
            </a>
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-gray-200"></span></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-400 font-medium">Secure Access</span></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <p className="text-xs font-bold text-gray-400 uppercase mb-1">Students</p>
              <p className="text-sm font-medium text-gray-700">Access grades, schedules, and resources.</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <p className="text-xs font-bold text-gray-400 uppercase mb-1">Teachers</p>
              <p className="text-sm font-medium text-gray-700">Manage batches, payments, and attendance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}