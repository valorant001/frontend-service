const RunningAdsBox = () => {
    return(
            <div className="w-full max-w-md  p-3  bg-[#0B0B0B] rounded-2xl shadow-sm border border-white/10 space-y-5">
      
      {/* Header */}
      <div className="flex items-center gap-2">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
          className="w-5 h-5"
        />
        <span className="font-semibold text-gray-700">Protect & Gamble</span>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-tight">
        Presenting our amazing mind-boggling product with the...
      </p>

      {/* Thumbnail Block */}
      <div className="relative bg-gray-600 rounded-xl overflow-hidden">
        {/* Background image */}
        <img
          className="w-full h-48 object-cover"
          src="googleads.png"
          alt=""
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col justify-center px-5">
          <p className="text-white font-semibold text-xl leading-6">
            State of US early-stage startups
          </p>
        </div>
      </div>

      {/* Posted Date Badge */}
      <p className="bg-green-100 text-green-700 text-xs px-4 py-2 rounded-full w-fit mx-auto">
        Posted on 3:50 PM Today
      </p>

      {/* Divider */}
      <hr className="border-gray-200" />

      {/* Stats Section */}
      <div className="space-y-3">
        <div className="flex justify-between text-sm font-semibold">
          <span className="text-gray-600">Total Engagements</span>
          <span className="text-gray-900">224,051</span>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Comments</span>
          <span className="font-semibold">12,525</span>
        </div>

        <div className="flex justify-between text-sm">
          <span className="text-gray-500">Shares</span>
          <span className="font-semibold">100,240</span>
        </div>
      </div>
    </div>
    );
}
export default RunningAdsBox;