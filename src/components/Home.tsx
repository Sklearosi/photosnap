

const Home = () => {
    return(
        <div>
            <div>
                <div style={{backgroundImage: 'url(/assets/home/mobile/create-and-share.jpg)'}} className=" h-heroHeight bg-cover bg-center"></div>
                <div className=" bg-black w-full h-blackDiv ">
                    <h1 className="text-4xl font-bold leading-2 tracking-widest text-white uppercase pt-16 ml-6">Create and share your photo stories.  </h1>
                    <p className="text-base font-normal leading-5 text-white mt-9 ml-6 w-11/12">Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
                    <div className="flex w-40 justify-between items-center mt-10 ml-6"><p className="text-xs font-bold leading-4 tracking-wide text-white">GET AN INVITE</p><svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="#FFFFFF"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg></div>
                </div>
            </div>
            <div>
                <div style={{backgroundImage: 'url(/assets/home/mobile/beautiful-stories.jpg)'}} className=" bg-cover bg-center h-72"></div>
                <div className="  w-full h-blackDiv ">
                    <h1 className="text-4xl font-bold leading-2 tracking-widest text-black uppercase pt-16 ml-6">Beautiful Stories every time</h1>
                    <p className="text-base font-normal leading-5 text-black mt-9 ml-6 w-11/12">We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</p>
                    <div className="flex w-40 justify-between items-center mt-10 ml-6"><p className="text-xs font-bold leading-4 tracking-wide text-black">VIEW THE STORIES</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="#000"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg></div>
                </div>
            </div>
            <div>
                <div style={{backgroundImage: 'url(/assets/home/mobile/designed-for-everyone.jpg)'}} className=" bg-cover bg-center h-72"></div>
                <div className="  w-full h-blackDiv ">
                    <h1 className="text-4xl font-bold leading-2 tracking-widest text-black uppercase pt-16 ml-6">DESIGNED FOR EVERYONE</h1>
                    <p className="text-base font-normal leading-5 text-black mt-9 ml-6 w-11/12">Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. </p>
                    <div className="flex w-40 justify-between items-center mt-10 ml-6"><p className="text-xs font-bold leading-4 tracking-wide text-black">VIEW THE STORIES</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="#000"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg></div>
                </div>
            </div>
        </div>
    )
}


export default Home