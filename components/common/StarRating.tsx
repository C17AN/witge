import StarRatings from 'react-star-ratings';

interface Props {
    rating: number;
}  

const StarRating = (props: Props) => {
    return (
        <StarRatings
            rating={props.rating}
            numberOfStars={5}
            starEmptyColor="#DADADA"
            starRatedColor="#1CE65F"
            starDimension="18px"
            starSpacing="0"
        />
    );
}

export default StarRating;