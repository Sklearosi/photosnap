import { useEffect, useState } from "react"


const Home = () => {

    const [media, setMedia] = useState <string> ('mobile')
    const [stories, setStories] = useState <string> ('mobile')
    
    const updateMedia = () => {
        if (window.innerWidth < 768 ) {
          setMedia('mobile');
          setStories('mobile')
        } else if(window.innerWidth >= 768 && window.innerWidth < 1024) {
          setMedia('tablet');
          setStories('desktop')
        } else if(window.innerWidth >= 1024 ){
            setMedia('desktop')
            setStories('desktop')
        }
      };
    
      useEffect(() => {
        
        updateMedia();
    
        
        window.addEventListener('resize', updateMedia);
    
       
        return () => {
          window.removeEventListener('resize', updateMedia);
        };
      }, []); 


    return(
        <div>
            <div className="md:grid md:grid-cols-3 md:h-tabletHeight">
                <div style={{backgroundImage: `url(/assets/home/${media}/create-and-share.jpg)` }} className=" h-heroHeight bg-cover bg-center md:order-2 md:h-auto lg:col-span-2"></div>
                <div className=" bg-black w-full h-blackDiv  md:order-1 md:col-span-2 md:h-auto lg:col-span-1">
                    <div className=" md:w-11/12 m-auto md:mt-20">
                    <h1 className="text-4xl font-bold leading-2 tracking-widest text-white uppercase pt-16 ml-6 md:text-5xl lg:text-3xl">Create and share your photo stories.  </h1>
                    <p className="text-base font-normal leading-5 text-white mt-9 ml-6 w-11/12 lg:xs">Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
                    <div className="flex w-40 justify-between items-center mt-10 ml-6"><p className="text-xs font-bold leading-4 tracking-wide text-white">GET AN INVITE</p><svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="#FFFFFF"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
                    </div>
                    </div>
                </div>
            </div>
            <div className=" md:h-forHomeStories md:grid md:grid-cols-3">
                <div style={{backgroundImage: `url(/assets/home/${media}/beautiful-stories.jpg)`}} className=" bg-cover bg-center h-72 md:h-auto lg:col-span-2"></div>
                <div className="  w-full h-blackDiv md:col-span-2 lg:col-span-1">
                    <div className=" md:w-11/12 m-auto pt-20">
                    <h1 className="text-4xl font-bold leading-2 tracking-widest text-black uppercase pt-16 ml-6 md:text-6xl lg:text-3xl">Beautiful Stories every time</h1>
                    <p className="text-base font-normal leading-5 text-black mt-9 ml-6 w-11/12">We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</p>
                    <div className="flex w-40 justify-between items-center mt-10 ml-6"><p className="text-xs font-bold leading-4 tracking-wide text-black">VIEW THE STORIES</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="#000"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg></div>
                    </div>
                </div>
            </div>
            <div className="md:h-forHomeStories md:grid md:grid-cols-3">
                <div style={{backgroundImage: `url(/assets/home/${media}/designed-for-everyone.jpg)`}} className=" bg-cover bg-center h-72 md:h-full md:order-2 lg:col-span-2"></div>
                <div className="  w-full h-blackDiv md:col-span-2 lg:col-span-1">
                    <div className="md:w-11/12 m-auto pt-20">
                    <h1 className="text-4xl md:text-6xl font-bold leading-2 tracking-widest text-black uppercase pt-16 ml-6 lg:text-3xl">DESIGNED FOR EVERYONE</h1>
                    <p className="text-base font-normal leading-5 text-black mt-9 ml-6 w-11/12">Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. </p>
                    <div className="flex w-40 justify-between items-center mt-10 ml-6"><p className="text-xs font-bold leading-4 tracking-wide text-black">VIEW THE STORIES</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="#000"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
                    </div>
                    </div>
                </div>
            </div>
            <div className=" text-white md:grid grid-cols-2 lg:grid-cols-4">
                <div style={{backgroundImage: `url(/assets/stories/${stories}/mountains.jpg)`}} className="h-mobHeight bg-cover bg-center relative md:h-storiesHomeTablet">
                    <div className=" absolute bottom-7 w-10/12 right-0 left-0 m-auto">
                        <div className=" border-b border-white pb-3">
                        <p>The Mountains</p>
                        <p>by John Appleseed</p>
                        </div>
                        <div className=" flex justify-between items-center pt-3">
                            <p>READ STORY</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="#FFFFFF"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(/assets/stories/${stories}/cityscapes.jpg)`}} className="h-mobHeight bg-cover bg-center relative md:h-storiesHomeTablet">
                    <div className=" absolute bottom-7 w-10/12 right-0 left-0 m-auto">
                        <div className=" border-b border-white pb-3">
                        <p>Sunset Cityscapes</p>
                        <p>by Benjamin Cruz</p>
                        </div>
                        <div className=" flex justify-between items-center pt-3">
                            <p>READ STORY</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="#FFFFFF"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(/assets/stories/${stories}/18-days-voyage.jpg)`}} className="h-mobHeight bg-cover bg-center relative md:h-storiesHomeTablet">
                    <div className=" absolute bottom-7 w-10/12 right-0 left-0 m-auto">
                        <div className=" border-b border-white pb-3">
                        <p>18 Days Voyage</p>
                        <p>by Alexei Borodin</p>
                        </div>
                        <div className=" flex justify-between items-center pt-3">
                            <p>READ STORY</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="#FFFFFF"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(/assets/stories/${stories}/architecturals.jpg)`}} className="h-mobHeight bg-cover bg-center relative md:h-storiesHomeTablet">
                    <div className=" absolute bottom-7 w-10/12 right-0 left-0 m-auto">
                        <div className=" border-b border-white pb-3">
                        <p>Architecturals</p>
                        <p>by Samantha Brooke</p>
                        </div>
                        <div className=" flex justify-between items-center pt-3">
                            <p>READ STORY</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="#FFFFFF"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="m-auto mt-16 pb-20 w-9/12 grid gap-16 lg:grid-cols-3 lg:mt-20">
                <div className=" w-10/12 m-auto text-center grid gap-10">
                <img className=" m-auto" src="/assets/features/desktop/responsive.svg" alt="" />
                <p className="text-xl font-bold leading-6 ">100% Responsive</p>
                <p className="text-base font-normal leading-5 ">No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.</p>
                </div>
                <div className=" w-10/12 m-auto text-center grid gap-10 lg:mt-7">
                <img className=" m-auto" src="/assets/features/desktop/no-limit.svg" alt="" />
                <p className="text-xl font-bold leading-6 lg:mt-2">No Photo Upload Limit</p>
                <p className="text-base font-normal leading-5">Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.</p>
                </div>
                <div className=" w-10/12 m-auto text-center grid gap-10">
                <img className=" m-auto" src="/assets/features/desktop/embed.svg" alt="" />
                <p className="text-xl font-bold leading-6">Available to Embed</p>
                <p className="text-base font-normal leading-5">Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. </p>
                </div>
            </div>
        </div>
    )
}


export default Home