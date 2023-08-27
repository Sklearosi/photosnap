import  { useState } from 'react';

const Pricing = () => {

    const [isChecked, setIsChecked] = useState <boolean> (false)
    const [price, setPrice] = useState({
        basic:  '$19.00',
        pro: '$39.00',
        business: '$99.00'
    })

    return (
        <div>
            <div>
                <div style={{backgroundImage: 'url(/assets/home/mobile/create-and-share.jpg)'}} className=" h-heroHeight bg-cover bg-center"></div>
                <div className=" bg-black w-full h-blackDiv ">
                    <h1 className="text-4xl font-bold leading-2 tracking-widest text-white uppercase pt-28 ml-6">PRICING</h1>
                    <p className="text-base font-normal leading-5 text-white mt-9 ml-6 w-11/12">Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.</p>
                </div>
            </div>
            <div className=' flex w-64 justify-between items-center m-auto mt-12'>
                <p>Monthly</p>
                <label htmlFor="pricing" className={`block rounded-3xl w-16 h-7 bg-lightGray relative`}>
                    <div className={`w-6 h-6 bg-black rounded-full absolute  transition-all duration-500 ${!isChecked ? " ml-1" : "ml-9"}`}></div>
                </label>
                <input type="checkbox" id="pricing" className="hidden" onChange={() => {
                   setIsChecked(!isChecked)
                   if(!isChecked){
                    setPrice({
                        basic:'$190.00',
                        pro: '$390.00',
                        business: '$990.00'
                    })
                } else {
                    setPrice({
                        basic:  '$19.00',
                        pro: '$39.00',
                        business: '$99.00'
                    })
                }
                }}/>
                <p>Yearly</p>
            </div>
            <div className='w-11/12 m-auto mt-12 grid gap-10'>
                <div className={` bg-lightGray  text-black text-center pb-14 pt-7`}>
                <div className=' w-10/12 m-auto'>
                    <p className='pt-10 text-2xl font-bold leading-6'>Basic</p>
                    <p className='mt-5 text-base font-normal leading-5'>Includes basic usage of our platform. Recommended for new and aspiring photographers.</p>
                    </div>
                    <p className='text-4xl font-bold leading-12 tracking-[4.166666507720947px] mt-8'>{price.basic}</p>
                    <p className='mt-2'>per month</p>
                    <button className='text-white bg-black w-60 h-10 text-center block m-auto mt-10'>PICK PLAN</button>
                </div>
                <div className={` bg-black text-white text-center pb-14 pt-7`}>
                <div className=' w-10/12 m-auto'>
                    <p className='pt-10 text-2xl font-bold leading-6'>Pro</p>
                    <p className='mt-5 text-base font-normal leading-5'>More advanced features available. Recommended for photography veterans and professionals.</p>
                    </div>
                    <p className='text-4xl font-bold leading-12 tracking-[4.166666507720947px] mt-8'>{price.pro}</p>
                    <p className='mt-2'>per month</p>
                    <button className='text-black bg-white w-60 h-10 text-center block m-auto mt-10'>PICK PLAN</button>
                </div>
                <div className={` bg-lightGray  text-black text-center pb-14 pt-7`}>
                    <div className=' w-10/12 m-auto'>
                    <p className='pt-10 text-2xl font-bold leading-6'>Business</p>
                    <p className='mt-5 text-base font-normal leading-5'>Additional features available such as more detailed metrics. Recommended for business owners.</p>
                    </div>
                    <p className='text-4xl font-bold leading-12 tracking-[4.166666507720947px] mt-8'>{price.business}</p>
                    <p className='mt-2'>per month</p>
                    <button className='text-white bg-black w-60 h-10 text-center block m-auto mt-10'>PICK PLAN</button>
                </div>
            </div>
            <div className=' w-11/12 m-auto mt-10 pb-14'>
                <p className='mb-4'>THE FEATURES</p>
                <div className='border-t-2 border-black pt-5'>
                <div className=' border-b border-black pb-5'>
                    <p className='pb-2 text-2xs font-bold leading-4 tracking-wide'>UNLIMITED STORY POSTING</p>
                    <div className=' flex justify-between items-center mt-2'>
                        <div><p>BASIC</p><img className=' mt-1' src="/assets/pricing/desktop/check.svg" alt="" /></div>
                        <div><p>BASIC</p><img className='mt-1' src="/assets/pricing/desktop/check.svg" alt="" /></div>
                        <div><p>BASIC</p><img className='mt-1' src="/assets/pricing/desktop/check.svg" alt="" /></div>
                    </div>
                </div>
                <div className=' mt-5 border-b border-black pb-5'>
                    <p className='pb-2 text-2xs font-bold leading-4 tracking-wide'>UNLIMITED PHOTO UPLOAD</p>
                    <div className=' flex justify-between items-center mt-2'>
                        <div><p>BASIC</p><img className=' mt-1' src="/assets/pricing/desktop/check.svg" alt="" /></div>
                        <div><p>BASIC</p><img className='mt-1' src="/assets/pricing/desktop/check.svg" alt="" /></div>
                        <div><p>BASIC</p><img className='mt-1' src="/assets/pricing/desktop/check.svg" alt="" /></div>
                    </div>
                </div>
                <div className=' mt-5 border-b border-black pb-5'>
                    <p className='pb-2 text-2xs font-bold leading-4 tracking-wide'>EMBEDDING CUSTOM CONTENT</p>
                    <div className=' flex justify-between items-center mt-2'>
                        <div><p>BASIC</p><img className=' mt-1 invisible' src="/assets/pricing/desktop/check.svg" alt="" /></div>
                        <div><p>BASIC</p><img className='mt-1' src="/assets/pricing/desktop/check.svg" alt="" /></div>
                        <div><p>BASIC</p><img className='mt-1' src="/assets/pricing/desktop/check.svg" alt="" /></div>
                    </div>
                </div>
                <div className=' mt-5 border-b border-black pb-5'>
                    <p className='pb-2 text-2xs font-bold leading-4 tracking-wide'>CUSTOMIZE METADATA</p>
                    <div className=' flex justify-between items-center mt-2'>
                        <div><p>BASIC</p><img className=' mt-1 invisible' src="/assets/pricing/desktop/check.svg" alt="" /></div>
                        <div><p>BASIC</p><img className='mt-1 ' src="/assets/pricing/desktop/check.svg" alt="" /></div>
                        <div><p>BASIC</p><img className='mt-1' src="/assets/pricing/desktop/check.svg" alt="" /></div>
                    </div>
                </div>
                <div className=' mt-5 border-b border-black pb-5'>
                    <p className='pb-2 text-2xs font-bold leading-4 tracking-wide'>ADVANCED METRICS</p>
                    <div className=' flex justify-between items-center mt-2'>
                        <div><p>BASIC</p><img className=' mt-1 invisible' src="/assets/pricing/desktop/check.svg" alt="" /></div>
                        <div><p>BASIC</p><img className='mt-1 invisible' src="/assets/pricing/desktop/check.svg" alt="" /></div>
                        <div><p>BASIC</p><img className='mt-1' src="/assets/pricing/desktop/check.svg" alt="" /></div>
                    </div>
                </div>
                <div className=' mt-5 border-b border-black pb-5'>
                    <p className='pb-2 text-2xs font-bold leading-4 tracking-wide'>PHOTO DOWNLOADS</p>
                    <div className=' flex justify-between items-center mt-2'>
                        <div><p>BASIC</p><img className=' mt-1 invisible' src="/assets/pricing/desktop/check.svg" alt="" /></div>
                        <div><p>BASIC</p><img className='mt-1 invisible' src="/assets/pricing/desktop/check.svg" alt="" /></div>
                        <div><p>BASIC</p><img className='mt-1' src="/assets/pricing/desktop/check.svg" alt="" /></div>
                    </div>
                </div>
                <div className=' mt-5 border-b border-black pb-5'>
                    <p className='pb-2 text-2xs font-bold leading-4 tracking-wide'>SEARCH ENGINE INDEXING</p>
                    <div className=' flex justify-between items-center mt-2'>
                        <div><p>BASIC</p><img className=' mt-1 invisible' src="/assets/pricing/desktop/check.svg" alt="" /></div>
                        <div><p>BASIC</p><img className='mt-1 invisible' src="/assets/pricing/desktop/check.svg" alt="" /></div>
                        <div><p>BASIC</p><img className='mt-1' src="/assets/pricing/desktop/check.svg" alt="" /></div>
                    </div>
                </div>
                <div className=' mt-5 border-b border-black pb-5'>
                    <p className='pb-2 text-2xs font-bold leading-4 tracking-wide'>CUSTOM ANALYTICS</p>
                    <div className=' flex justify-between items-center mt-2'>
                        <div><p>BASIC</p><img className=' mt-1 invisible' src="/assets/pricing/desktop/check.svg" alt="" /></div>
                        <div><p>BASIC</p><img className='mt-1 invisible' src="/assets/pricing/desktop/check.svg" alt="" /></div>
                        <div><p>BASIC</p><img className='mt-1' src="/assets/pricing/desktop/check.svg" alt="" /></div>
                    </div>
                </div>
                </div>
            </div>
            <div style={{backgroundImage: 'url(/assets/shared/mobile/bg-beta.jpg)'}}
            className=' bg-cover bg-center text-white h-72'>
                <p className='text-3xl font-bold leading-10 tracking-[3.3333332538604736px] uppercase w-10/12 ml-6 pt-14'>We’re in beta.
                Get your invite today!</p>
                <div className='flex w-44 ml-6 mt-7 justify-between items-center'><p>GET AN INVITE</p><svg xmlns="http://www.w3.org/2000/svg" width="43" height="14"><g fill="none" fillRule="evenodd" stroke="#FFFFFF"><path d="M0 7h41.864M35.428 1l6 6-6 6"/></g></svg></div>
            </div>
        </div>
    )
}

export default Pricing