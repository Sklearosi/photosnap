import { useEffect, useState } from "react"

const Features = () => {


    const [media, setMedia] = useState <string> ('mobile')

    const updateMedia = () => {
        if (window.innerWidth < 768 ) {
          setMedia('mobile');
         
        } else if(window.innerWidth >= 768 && window.innerWidth < 1080) {
          setMedia('tablet');
          
        } else if(window.innerWidth >= 1080 ){
            setMedia('desktop')
            
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
            <div>
            <div className="md:grid md:grid-cols-3 md:h-featuresBegining">
                <div style={{backgroundImage: `url(/assets/features/${media}/hero.jpg)`}} className=" h-heroHeight bg-cover bg-center md:order-2 md:h-auto lg:col-span-2"></div>
                <div className=" bg-black w-full h-blackDiv md:order-1 md:col-span-2 lg:col-span-1 md:h-auto ">
                <div className=" md:w-10/12 m-auto md:mt-20">
                    <h1 className="text-4xl font-bold leading-2 tracking-widest text-white uppercase pt-16 ml-6 md:text-6xl lg:text-3xl">FEATURES</h1>
                    <p className="text-base font-normal leading-5 text-white mt-9 ml-6 w-11/12">We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.</p>
                    </div>
                </div>
                </div>
            </div>
            <div className="mt-16 pb-20 md:grid md:grid-cols-2 lg:grid-cols-3">
                <div className=" w-10/12 m-auto text-center">
                <img className=" m-auto  " src="/assets/features/desktop/responsive.svg" alt="" />
                <p className="text-xl font-bold leading-6 mt-16">100% Responsive</p>
                <p className="text-base font-normal leading-5 mt-10">No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.</p>
                </div>
                <div className=" w-10/12 m-auto text-center mt-16">
                <img className=" m-auto -mt-6" src="/assets/features/desktop/no-limit.svg" alt="" />
                <p className="text-xl font-bold leading-6 mt-16">No Photo Upload Limit</p>
                <p className="text-base font-normal leading-5 mt-10">Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.</p>
                </div>
                <div className=" w-10/12 m-auto text-center mt-16 lg:-mt-0">
                <img className=" m-auto" src="/assets/features/desktop/embed.svg" alt="" />
                <p className="text-xl font-bold leading-6 mt-16">Available to Embed</p>
                <p className="text-base font-normal leading-5 mt-10">Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. </p>
                </div>
                <div className=" w-10/12 m-auto text-center mt-16">
                <img className=" m-auto" src="/assets/features/desktop/custom-domain.svg" alt="" />
                <p className="text-xl font-bold leading-6 mt-16">Custom Domain</p>
                <p className="text-base font-normal leading-5 mt-10">With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!</p>
                </div>
                <div className=" w-10/12 m-auto text-center mt-16">
                <img className=" m-auto" src="/assets/features/desktop/boost-exposure.svg" alt="" />
                <p className="text-xl font-bold leading-6 mt-16">Boost Your Exposure</p>
                <p className="text-base font-normal leading-5 mt-10">Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.</p>
                </div>
                <div className=" w-10/12 m-auto text-center mt-16">
                <img className=" m-auto" src="/assets/features/desktop/drag-drop.svg" alt="" />
                <p className="text-xl font-bold leading-6 mt-16">Drag & Drop Image</p>
                <p className="text-base font-normal leading-5 mt-10">Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.</p>
                </div>
            </div>
        </div>
    )
}


export default Features