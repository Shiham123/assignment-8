import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const ShowDonation = (props) => {
  const { donation } = props;
  const { id, title, image, category, amount, bgColor, bgCategory, fontColor } =
    donation;

  const fontBg = {
    color: fontColor,
  };

  const bgBtn = {
    backgroundColor: fontColor,
  };

  const categoryBg = {
    backgroundColor: bgCategory,
  };

  const colorBg = {
    backgroundColor: bgColor,
  };

  return (
    <div className="my-8 mx-4">
      <Card className="w-full max-w-[48rem] flex-row" style={colorBg}>
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={image}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography
            variant="h6"
            className="mb-4 uppercase inline-block px-4 py-2 rounded-lg"
            style={categoryBg}
          >
            <span style={fontBg} className="text-[15px] font-normal">
              {category}
            </span>
          </Typography>
          <Typography
            variant="h4"
            className="mb-2 text-[#0B0B0B] text-[24px] font-semibold"
          >
            {title}
          </Typography>
          <Typography className="mb-8">
            <span style={fontBg} className="text-[16px] font-semibold">
              ${amount}
            </span>
          </Typography>
          <a href="#" className="inline-block">
            <Link to={`/card/${id}`}>
              <Button
                variant="text"
                className="flex items-center gap-2"
                style={bgBtn}
              >
                <span className="text-white text-[18px] font-semibold">
                  View Details
                </span>
              </Button>
            </Link>
          </a>
        </CardBody>
      </Card>
    </div>
  );
};

export default ShowDonation;
