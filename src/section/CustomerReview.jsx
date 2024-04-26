import {reviews} from '../constants';
import ReviewCard from '../Component/ReviewCard';
const CustomerReview =()=>{

    return (
        <section className="max-container">
            <h3 className="font-palanquin text-center font-bold text-4xl  "> What our 
                <span className="text-coral-red"> Customer  </span>
             Says ? </h3>
             <p className=" m-auto max-w-lg  text-center mt-4 text-slate-gray info-text "> Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.</p>

        <div className="mt-24 flex flex-1 justify-evenly max-lg:flex-col gap-14">
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
        </div>
        </section>
    )
}

export default CustomerReview;
