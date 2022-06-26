import { faQuestionCircle, faAngleRight, faHeart, faShare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";


const Page1 = () => {
    const [pics, setPics] = useState([]);
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
        <div key={pic._id} className="container mx-auto grid grid-cols-2 p-10 justify-center items-center">
            <div className="text-left">
            <h1>{pic.description}</h1>
            <div class="avatar py-3">
                <div class="w-7 rounded-full">
                <img src="https://api.lorem.space/image/face?hash=92310" alt=""/>
                </div>
                <h2 className="font-bold text-blue-600 ml-2">Kimberly R Moseler</h2>
            </div>
            <div className="flex items-center gap-2">
            <div class="rating rating-xs">
                <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400"  />
                <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" checked/>
            </div>
            <h2 className="text-sm">467 total reviews for this teacher</h2>
            </div>
            <div className="flex items-center gap-2">
            <div class="rating rating-xs">
                <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400"  />
                <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" checked/>
            </div>
            <h2 className="text-sm">5  reviews for this class</h2>
            </div>
            <h1>Completed by 21 learners</h1>
            <button class="btn rounded-full btn-secondary my-4 text-white capitalize">See Class Schedule <FontAwesomeIcon className="ml-2" icon={faAngleRight}/> </button>
            <button class="rounded-full bg-transparent my-4 text-secondary capitalize"><FontAwesomeIcon className="mx-2" icon={faHeart}/>Save </button>
            <button class="rounded-full bg-transparent my-4 text-secondary capitalize"><FontAwesomeIcon className="mx-2" icon={faShare}/>Share </button>
            </div>
            <div className="grid grid-cols-2 p-5 gap-3">
            <div className="rounded ">
                <img className="w-full h-full" 
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
                <img className="w-full" 
                src={pic.img3}
                alt=""
                />
            </div>
            </div>
            </div>
        </div>
        )
        }
        </div>
    );
};

export default Page1;
