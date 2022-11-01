import ReactStars from "react-rating-stars-component";

const StarRating = (props) => {
    return (
        <ReactStars
            count={5}
            value={props.rating}
            size={18}
            activeColor="#1CE65F"
            color="#DADADA"
            isHalf={true}
            edit={false}
        />
    );
}

export default StarRating;