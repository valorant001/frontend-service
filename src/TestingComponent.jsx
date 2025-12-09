
const APP_ID = "2656339064721682"; // Replace with your App ID
const REDIRECT_URI = "https://webhook.site/e57a7259-575d-4185-9d2d-f260c251fcb9"; // Replace with your redirect URL

const SCOPES = [
  // "ads_management",
  // "ads_read",
  // "business_management",
  "pages_show_list",
  // "pages_read_engagement",
  // "instagram_basic",
  // "instagram_manage_insights",
  // "whatsapp_business_management",
  // "whatsapp_business_messaging"
].join(",");

const ConnectFacebook=()=> {

  const handleConnect = () => {
    const oauthURL = `https://www.facebook.com/v21.0/dialog/oauth?client_id=${APP_ID}&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}&scope=${SCOPES}&response_type=code&state=connect_fb`;

    window.location.href = oauthURL;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-xl p-8 max-w-md w-full text-center">
        
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Connect Your Facebook Account
        </h1>

        <p className="text-gray-600 mb-6">
          Connect to Facebook, Instagram, and WhatsApp to run your ads in one click.
        </p>

        <button
          onClick={handleConnect}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center justify-center gap-2"
        >
          <img
            src="https://www.svgrepo.com/show/452196/facebook-1.svg"
            alt="Facebook Logo"
            className="w-5 h-5"
          />
          Connect with Facebook
        </button>
      </div>
    </div>
  );
}
export default ConnectFacebook;
