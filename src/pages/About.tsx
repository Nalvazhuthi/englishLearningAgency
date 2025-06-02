import { useState } from "react"

const About = () => {
    const reviews = [
        "As a recent graduate of this English language school, I can confidently say that it has exceeded my expectations. The teachers are not only knowledgeable and passionate about teaching but also go above and beyond to ensure that each student receives personalized attention.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius modi reiciendis facere nobis illo aperiam cumque ipsum ullam explicabo vitae!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius modi reiciendis facere nobis illo aperiam cumque ipsum ullam explicabo vitae!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius modi reiciendis facere nobis illo aperiam cumque ipsum ullam explicabo vitae!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius modi reiciendis facere nobis illo aperiam cumque ipsum ullam explicabo vitae!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius modi reiciendis facere nobis illo aperiam cumque ipsum ullam explicabo vitae!",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius modi reiciendis facere nobis illo aperiam cumque ipsum ullam explicabo vitae!",
    ]
    const [viewAllReviews, setViewAllReviews] = useState(false)
    return (

        <div className='about-container page-container'>
            <div className="header">They talk About Us</div>
            <div className="reviews-wrapper">
                <div className="about-us-wrapper">
                    <div className={`reviews-meesgae-wrapper ${viewAllReviews ? "review-overflow" : ""}`} >
                        {reviews.map((review, index) => (
                            <div className="review">{review}</div>
                        ))}
                    </div>
                    <div className="btn-wrapper">
                        <div className="button-primary" onClick={() => setViewAllReviews(!viewAllReviews)}>View all Reviews</div>
                    </div>
                </div>
                <div className="total-reviews">
                    <div className="total">
                        <div className="count">200K+</div>
                        <div className="reviews">Reviews</div>
                    </div>

                    <div className="message">The English language school has received overwhelmingly <div className="highlight"> positive reviews</div> from its students. Many have praised the school's experienced and knowledgeable teachers, who are able to cater to the <div className="highlight"> individual needs of each student.</div></div>
                </div>
            </div>
        </div>
    )
}

export default About


