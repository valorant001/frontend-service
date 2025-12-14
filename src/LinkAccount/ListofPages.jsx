import { useSelector } from "react-redux";
import MetaPageGuide from "./MetaPageGuide";
import { MdOutlineInsertLink } from "react-icons/md";

const ListofPages = () =>{
     const pageDetails = useSelector((state) => state.pageDetails.pages);
     const pages = pageDetails || [];
     return pages.length===0 ?(<MetaPageGuide></MetaPageGuide>):(
      <div className="">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">Your Pages</h1>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-8 sm:mb-12 md:mb-16">Manage all your connected pages</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {pages.map((page, index) => (
                <div
                  key={index}
                  className="group relative p-6 sm:p-8 md:p-10 border border-gray-900 rounded-2xl sm:rounded-3xl hover:border-gray-800 transition-all cursor-pointer"
                >
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-linear-to-br  rounded-xl sm:rounded-2xl mb-4 sm:mb-6 md:mb-8 group-hover:scale-110 transition-transform`}>
                    <img src={page.picture.data.url} alt={page.name}className="rounded"></img>
                  </div>
                 <div className="flex justify-between">
                   <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-1 sm:mb-2">{page.name}</h3>
                   <a href={page.website} target="Blank" className="text-lg sm:text-xl md:text-2xl font-medium mb-1 sm:mb-2"><MdOutlineInsertLink /></a>
                 </div>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg">{page.followers} followers</p>
                  <div className="absolute top-6 sm:top-8 md:top-10 right-6 sm:right-8 md:right-10 w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
              ))}
            </div>
          </div>
    )
}
export default ListofPages;