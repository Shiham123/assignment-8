import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const PerCard = (props) => {
  const { id, image, title, category, bgColor, fontColor, bgCategory } =
    props.donation;

  const cardBgColor = {
    backgroundColor: bgColor,
  };

  const textColor = {
    color: fontColor,
  };

  const categoryBg = {
    backgroundColor: bgCategory,
    color: fontColor,
  };

  return (
    <Link to={`/card/${id}`}>
      <Card className="mt-6 w-10/12 cursor-pointer" style={cardBgColor}>
        <CardHeader className="relative h-50 mt-4">
          <img src={image} alt="card-image" className="object-cover" />
        </CardHeader>

        <CardBody>
          <p
            className="inline-block p-2 rounded-lg text-[14px] font-medium capitalize"
            style={categoryBg}
          >
            {category}
          </p>
          <Typography variant="h5" className="mb-2" style={textColor}>
            {title}
          </Typography>
        </CardBody>
      </Card>
    </Link>
  );
};

export default PerCard;
