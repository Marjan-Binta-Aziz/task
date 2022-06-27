import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faQuestionCircle, faAngleRight, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";


const Page1 = () => {
    const [pics, setPics] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [shareModal, setShareModal] = useState(false);

    useEffect(()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data => {
            setPics(data) 
            console.log(data);
        })
    },[])
    return (
        <div className="">
        <div className="container mx-auto p-5 text-5xl text-left font-extrabold">
            <h1>
            <span>Summer Art Camp!</span> 5days of Artists and Painting Monet,Van
            Gogh, Matisse, & More
            </h1>
            <p className="text-sm text-gray-400 py-1">
            Multi-day Crouse{" "}
            <FontAwesomeIcon className="inline-block w-5 tooltip tooltip-open" data-tip="hello" icon={faQuestionCircle}/>
            </p>
        </div>
        { 
        pics.map(pic => 
        <div key={pic._id} className="container mx-auto grid grid-cols-2 px-10 justify-center items-center w-fit">
            <div className="text-left">
            <h1>{pic.description}</h1>
            <div className="avatar py-3 pt-6">
                <div className="w-7 rounded-full">
                <img src={pic.teacherImg} alt=""/>
                </div>
                <h2 className="font-bold text-blue-600 ml-2">{pic.teacherName}</h2>
            </div>
            <div className="flex items-center gap-2">
            <div className="rating rating-xs">
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400"  />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked/>
            </div>
            <h2 className="text-sm">467 total reviews for this teacher</h2>
            </div>
            <div className="flex items-center gap-2 mb-5">
            <div className="rating rating-xs">
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400"  />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked/>
            </div>
            <h2 className="text-sm">5  reviews for this class</h2>
            </div>
            <h1 className="my-3">Completed by 21 learners</h1>
            <label onClick={() => setShowModal(true)} type="button" htmlFor="my-modal-4" className="btn rounded-full btn-secondary mr-4 text-white capitalize">See Class Schedule <FontAwesomeIcon className="ml-2" icon={faAngleRight}/> </label>
            <button className="rounded-full bg-transparent mr-4 text-secondary capitalize"><FontAwesomeIcon className="mx-2" icon={faHeart}/>Save </button>
            <label onClick={() => setShareModal(true)} type="button" htmlFor="modal-2" className="cursor-pointer rounded-full bg-transparent mr-4 text-secondary capitalize"><FontAwesomeIcon className="mx-2" icon={faShare}/>Share </label>
            </div>
            <div className="grid grid-cols-2 p-16 gap-3">
            <div className="w-full rounded ">
                <img className="h-full" 
                src={pic.img1}
                alt=""
                />
            </div>
            <div>
            <div className="w-full rounded m-1">
                <img className="h-full"
                src={pic.img2}
                alt=""
                />
            </div>
            <div className="w-full rounded">
                <img className="h-full" 
                src={pic.img3}
                alt=""
                />
            </div>
            </div>
            </div>
        </div>
        )
        }
        {
            showModal ? (
                <>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
            <label className="modal-box relative" htmlFor="my-modal-4">
                <h3 className="text-lg font-bold">Hello Students!</h3>
                <p className="py-4">Class Schedule will be coming soon!</p>
                <button onClick={() => setShowModal(false)} className='btn rounded-full btn-secondary text-white'>Okay</button>
            </label>
            </label>
                </>
            ) : null
        }
        {
            shareModal ? (
            <>
            <input type="checkbox" id="modal-2" className="modal-toggle" />
            <label htmlFor="modal-2" className="modal cursor-pointer">
            <label className="modal-box relative" htmlFor="modal-2">
                <h3 className="text-lg font-bold mb-3">Share</h3>
                <a className='mx-5' target='_blank' href="https://github.com/Marjan-Binta-Aziz" rel="noreferrer"><FontAwesomeIcon icon={faGithub}/> GitHub</a>
                <a className='mx-5' target='_blank' href="https://www.facebook.com/share" rel="noreferrer"><FontAwesomeIcon icon={faFacebook}/> Facebook</a>
                <a className='mx-5' target='_blank' href="https://www.linkedin.com/feed/?shareActive=true" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin}/> LinkedIn</a>
                <br />
                <button onClick={() => setShareModal(false)} className='btn btn-sm rounded-full btn-secondary mt-4 text-white'>Cancel</button>
            </label>
            </label>
            </>
            ) : null
        }

        </div>
    );
};

export default Page1;
