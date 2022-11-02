import StarRatings from 'react-star-ratings';

interface Props {
    rating: number;
}  

const StarRating = ({rating}: Props) => {
    return (
        <StarRatings
            rating={rating}
            numberOfStars={5}
            starEmptyColor="#DADADA"
            starRatedColor="#1CE65F"
            starDimension="18px"
            starSpacing="0"
        />
    );
}

export default StarRating;