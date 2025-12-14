import React, { use, useEffect } from 'react';
import { RefreshCw } from 'lucide-react';
import apiCallPageDetails from '../Network/GetPageDetails';
import { useDispatch, useSelector } from 'react-redux';
import { setPageDetails } from '../Redux/PageDetails';
const MetaPageGuide = () => {
  const token = useSelector((state) => state.accessToken.accessCode);
  const dispatch = useDispatch();
  // const refresher = useSelector((state) => state.pageDetails.refresh);
  const steps = [
    {
      id: 1,
      title: "Log into Facebook",
      details: "Go to facebook.com and sign in with your email/phone and password."
    },
    {
      id: 2,
      title: "Access Pages Section",
      details: "Click the menu icon (☰) in the top right corner, then scroll down and select 'Pages' from the menu."
    },
    {
      id: 3,
      title: "Click 'Create New Page'",
      details: "Look for the 'Create New Page' button and click it to begin the setup process."
    },
    {
      id: 4,
      title: "Enter Page Name",
      details: "Choose a clear and memorable name for your business or brand. You can change this later if needed."
    },
    {
      id: 5,
      title: "Select Category",
      details: "Click on the category dropdown menu and select up to 3 categories that best describe your page (e.g., Business, Brand, Community)."
    },
    {
      id: 6,
      title: "Add Description",
      details: "Write a brief description (up to 255 characters) that explains what your page is about. Include relevant keywords."
    },
    {
      id: 7,
      title: "Upload Profile Picture",
      details: "Click 'Upload Profile Picture' and choose an image from your device. Use your logo or a recognizable image (minimum 170x170 pixels)."
    },
    {
      id: 8,
      title: "Add Cover Photo",
      details: "Click 'Add Cover Photo' and select an eye-catching image (recommended 820x312 pixels)."
    },
    {
      id: 9,
      title: "Complete Page Setup",
      details: "Add your contact information (website, email, phone), set your location if applicable, and add business hours if relevant."
    },
    {
      id: 10,
      title: "Click 'Create Page'",
      details: "Review all the information you've entered, then click the 'Create Page' button to publish your page."
    }
  ];

  const callPages = async () => {
    var responses = await apiCallPageDetails(token);
    if (responses && responses.data) {
      const pagesData = responses.data.data || [];
      dispatch(setPageDetails({ pages: pagesData, refresh: true }));
    } else {
      console.log("No page data found");
    }
  }

  useEffect(() => {
    if (token) {
      callPages();
    }
    else {
      console.log("No token found");
    }
  }, [token]);

  return (
    <div className="min-h-screen bg-black text-gray-300 py-12 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-bold text-white mb-6">
            Create a Meta Page
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed mb-4">
            The following steps will guide you through the process of creating a Facebook Page for your business, brand, or community.
          </p>
          <div className="flex justify-between items-center mt-4">
            <a
              href="https://www.facebook.com/pages/creation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-400 hover:text-blue-300 hover:underline text-lg"
            >
              → Visit Facebook Page Creation
            </a>
            <button
              type="button"
              onClick={callPages}
              className="p-3 flex items-center cursor-pointer rounded-2xl bg-white hover:bg-blue-600 hover:text-white text-black font-medium whitespace-nowrap transition-all duration-300"
            >
              <RefreshCw />
              <span className="ml-2">I've Created the Page</span>
            </button>

          </div>
        </div>

        {/* Steps List */}
        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.id} className="flex gap-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 shrink-0"></div>
              <p className="text-lg leading-relaxed">
                <span className="text-blue-400 hover:underline cursor-pointer font-medium">
                  {step.title}
                </span>
                : {step.details}
              </p>
            </div>
          ))}
        </div>

        {/* Further Reading Section */}
        <div className="mt-16">
          <h2 className="text-4xl font-bold text-white mb-8">
            Further reading
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lg leading-relaxed">
                <span className="text-blue-400 hover:underline cursor-pointer font-medium">
                  Facebook Business Help Center
                </span>
                : Official documentation and support for managing Facebook Pages.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lg leading-relaxed">
                <span className="text-blue-400 hover:underline cursor-pointer font-medium">
                  Page optimization tips
                </span>
                : Best practices for optimizing your Facebook Page for engagement and reach.
              </p>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-lg leading-relaxed">
                <span className="text-blue-400 hover:underline cursor-pointer font-medium">
                  Meta Business Suite
                </span>
                : Learn how to manage your Facebook Page and Instagram account in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetaPageGuide;