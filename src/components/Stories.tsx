import { useEffect, useState } from "react"

const Stories = () => {


   
    const [stories, setStories] = useState <string> (`mobile`)
    
    const updateMedia = () => {
        if (window.innerWidth < 768 ) {
         
          setStories(`mobile`)
        } else if(window.innerWidth >= 768 && window.innerWidth < 1280) {
         
          setStories(`desktop`)
        } else if(window.innerWidth >= 1280 ){
            
            setStories(`desktop`)
        }
      };
    
      useEffect(() => {
        
        updateMedia();
    
        
        window.addEventListener(`resize`, updateMedia);
    
       
        return () => {
          window.removeEventListener(`resize`, updateMedia);
        };
      }, []); 

    return(
        <div>
            <div className=" relative">
                <div style={{backgroundImage: `url(/assets/stories/${stories}/moon-of-appalacia.jpg)`}} className=" h-heroHeight bg-cover bg-center md:h-tabletHeight"></div>
                <div className=" bg-black w-full h-full pb-10 md:absolute md:z-10 md:top-0 md:bg-transparent md:pb-0 md:w-80 md:mt-24">
                    <p className="text-xs font-bold leading-4 tracking-wide text-white ml-6 pt-10">LAST MONTH’S FEATURED STORY</p>
                    <h1 className="text-4xl font-bold leading-2 tracking-widest text-white uppercase pt-8 ml-6">HAZY FULL MOON OF APPALACHIA  </h1>
                    <p className=" text-white ml-6 mt-5">March 2nd 2020
                    by John Appleseed</p>
                    <p className="text-base font-normal leading-5 text-white mt-5 ml-6 w-11/12">The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
                    <div className="flex w-40 justify-between items-center mt-5 ml-6"><p className="text-xs font-bold leading-4 tracking-wide text-white">READ THE STORY</p><svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="#FFFFFF"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg></div>
                </div>
            </div>
            <div className=" text-white md:grid md:grid-cols-2">
                <div style={{backgroundImage: `url(/assets/stories/${stories}/mountains.jpg)`}} className="h-mobHeight bg-cover bg-center relative">
                    <div className=" absolute bottom-7 w-10/12 right-0 left-0 m-auto">
                        <div className=" border-b border-white pb-3">
                        <p className="text-[13px] font-normal leading-[17px] pb-1">April 16th 2020</p>
                        <p>The Mountains</p>
                        <p>by John Appleseed</p>
                        </div>
                        <div className=" flex justify-between items-center pt-3">
                            <p>READ STORY</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="#FFFFFF"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(/assets/stories/${stories}/cityscapes.jpg)`}} className="h-mobHeight bg-cover bg-center relative">
                    <div className=" absolute bottom-7 w-10/12 right-0 left-0 m-auto">
                        <div className=" border-b border-white pb-3">
                        <p className="text-[13px] font-normal leading-[17px] pb-1">April 14th 2020</p>
                        <p>Sunset Cityscapes</p>
                        <p>by Benjamin Cruz</p>
                        </div>
                        <div className=" flex justify-between items-center pt-3">
                            <p>READ STORY</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="#FFFFFF"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(/assets/stories/${stories}/18-days-voyage.jpg)`}} className="h-mobHeight bg-cover bg-center relative">
                    <div className=" absolute bottom-7 w-10/12 right-0 left-0 m-auto">
                        <div className=" border-b border-white pb-3">
                        <p className="text-[13px] font-normal leading-[17px] pb-1">April 11th 2020</p>
                        <p>18 Days Voyage</p>
                        <p>by Alexei Borodin</p>
                        </div>
                        <div className=" flex justify-between items-center pt-3">
                            <p>READ STORY</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="#FFFFFF"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(/assets/stories/${stories}/architecturals.jpg)`}} className="h-mobHeight bg-cover bg-center relative">
                    <div className=" absolute bottom-7 w-10/12 right-0 left-0 m-auto">
                        <div className=" border-b border-white pb-3">
                        <p className="text-[13px] font-normal leading-[17px] pb-1">April 9th 2020</p>
                        <p>Architecturals</p>
                        <p>by Samantha Brooke</p>
                        </div>
                        <div className=" flex justify-between items-center pt-3">
                            <p>READ STORY</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="#FFFFFF"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(/assets/stories/${stories}/world-tour.jpg)`}} className="h-mobHeight bg-cover bg-center relative">
                    <div className=" absolute bottom-7 w-10/12 right-0 left-0 m-auto">
                        <div className=" border-b border-white pb-3">
                        <p className="text-[13px] font-normal leading-[17px] pb-1">April 7th 2020</p>
                        <p>World Tour 2019</p>
                        <p>by Timothy Wagner</p>
                        </div>
                        <div className=" flex justify-between items-center pt-3">
                            <p>READ STORY</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="#FFFFFF"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(/assets/stories/${stories}/unforeseen-corners.jpg)`}} className="h-mobHeight bg-cover bg-center relative">
                    <div className=" absolute bottom-7 w-10/12 right-0 left-0 m-auto">
                        <div className=" border-b border-white pb-3">
                        <p className="text-[13px] font-normal leading-[17px] pb-1">April 3rd 2020</p>
                        <p>Unforeseen Corners</p>
                        <p>by William Malcolm</p>
                        </div>
                        <div className=" flex justify-between items-center pt-3">
                            <p>READ STORY</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="#FFFFFF"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(/assets/stories/${stories}/king-on-africa.jpg)`}} className="h-mobHeight bg-cover bg-center relative">
                    <div className=" absolute bottom-7 w-10/12 right-0 left-0 m-auto">
                        <div className=" border-b border-white pb-3">
                        <p className="text-[13px] font-normal leading-[17px] pb-1">March 29th 2020</p>
                        <p>King on Africa: Part II</p>
                        <p>by Tim Hillenburg</p>
                        </div>
                        <div className=" flex justify-between items-center pt-3">
                            <p>READ STORY</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="#FFFFFF"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(/assets/stories/${stories}/trip-to-nowhere.jpg)`}} className="h-mobHeight bg-cover bg-center relative">
                    <div className=" absolute bottom-7 w-10/12 right-0 left-0 m-auto">
                        <div className=" border-b border-white pb-3">
                        <p className="text-[13px] font-normal leading-[17px] pb-1">March 21st 2020</p>
                        <p>The Trip to Nowhere</p>
                        <p>by Felicia Rourke</p>
                        </div>
                        <div className=" flex justify-between items-center pt-3">
                            <p>READ STORY</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="#FFFFFF"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(/assets/stories/${stories}/rage-of-the-sea.jpg)`}} className="h-mobHeight bg-cover bg-center relative">
                    <div className=" absolute bottom-7 w-10/12 right-0 left-0 m-auto">
                        <div className=" border-b border-white pb-3">
                        <p className="text-[13px] font-normal leading-[17px] pb-1">March 19th 2020</p>
                        <p>Rage of The Sea</p>
                        <p>by Mohammed Abdul</p>
                        </div>
                        <div className=" flex justify-between items-center pt-3">
                            <p>READ STORY</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="#FFFFFF"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(/assets/stories/${stories}/running-free.jpg)`}} className="h-mobHeight bg-cover bg-center relative">
                    <div className=" absolute bottom-7 w-10/12 right-0 left-0 m-auto">
                        <div className=" border-b border-white pb-3">
                        <p className="text-[13px] font-normal leading-[17px] pb-1">March 16th 2020</p>
                        <p>Running Free</p>
                        <p>by Michelle</p>
                        </div>
                        <div className=" flex justify-between items-center pt-3">
                            <p>READ STORY</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="#FFFFFF"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(/assets/stories/${stories}/behind-the-waves.jpg)`}} className="h-mobHeight bg-cover bg-center relative">
                    <div className=" absolute bottom-7 w-10/12 right-0 left-0 m-auto">
                        <div className=" border-b border-white pb-3">
                        <p className="text-[13px] font-normal leading-[17px] pb-1">March 11th 2020</p>
                        <p>Behind the Waves</p>
                        <p>by Lamarr Wilson</p>
                        </div>
                        <div className=" flex justify-between items-center pt-3">
                            <p>READ STORY</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="#FFFFFF"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(/assets/stories/${stories}/calm-waters.jpg)`}} className="h-mobHeight bg-cover bg-center relative">
                    <div className=" absolute bottom-7 w-10/12 right-0 left-0 m-auto">
                        <div className=" border-b border-white pb-3">
                        <p className="text-[13px] font-normal leading-[17px] pb-1">March 9th 2020</p>
                        <p>Calm Waters</p>
                        <p>by Samantha Brooke</p>
                        </div>
                        <div className=" flex justify-between items-center pt-3">
                            <p>READ STORY</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="#FFFFFF"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(/assets/stories/${stories}/milky-way.jpg)`}} className="h-mobHeight bg-cover bg-center relative">
                    <div className=" absolute bottom-7 w-10/12 right-0 left-0 m-auto">
                        <div className=" border-b border-white pb-3">
                        <p className="text-[13px] font-normal leading-[17px] pb-1">March 5th 2020</p>
                        <p>The Milky Way</p>
                        <p>by Benjamin Cruz</p>
                        </div>
                        <div className=" flex justify-between items-center pt-3">
                            <p>READ STORY</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="#FFFFFF"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(/assets/stories/${stories}/dark-forest.jpg)`}} className="h-mobHeight bg-cover bg-center relative">
                    <div className=" absolute bottom-7 w-10/12 right-0 left-0 m-auto">
                        <div className=" border-b border-white pb-3">
                        <p className="text-[13px] font-normal leading-[17px] pb-1">March 4th 2020</p>
                        <p>Night at The Dark Forest</p>
                        <p>by  Mohammed Abdul</p>
                        </div>
                        <div className=" flex justify-between items-center pt-3">
                            <p>READ STORY</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="#FFFFFF"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(/assets/stories/${stories}/somwarpet.jpg)`}} className="h-mobHeight bg-cover bg-center relative">
                    <div className=" absolute bottom-7 w-10/12 right-0 left-0 m-auto">
                        <div className=" border-b border-white pb-3">
                        <p className="text-[13px] font-normal leading-[17px] pb-1">March 1st 2020</p>
                        <p>Somwarpet’s Beauty</p>
                        <p>by Michelle</p>
                        </div>
                        <div className=" flex justify-between items-center pt-3">
                            <p>READ STORY</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="#FFFFFF"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(/assets/stories/${stories}/land-of-dreams.jpg)`}} className="h-mobHeight bg-cover bg-center relative">
                    <div className=" absolute bottom-7 w-10/12 right-0 left-0 m-auto">
                        <div className=" border-b border-white pb-3">
                        <p className="text-[13px] font-normal leading-[17px] pb-1">February 25th 2020</p>
                        <p>Land of Dreams</p>
                        <p>by William Malcolm</p>
                        </div>
                        <div className=" flex justify-between items-center pt-3">
                            <p>READ STORY</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="#FFFFFF"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Stories