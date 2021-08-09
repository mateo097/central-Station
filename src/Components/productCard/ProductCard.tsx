import "./ProductCard.css";
import { Grid, CardMedia, GridSize } from "@material-ui/core";
import Line from "../line/Line";

interface ProductCardInterface {
  title?: string;
  description?: string;
  price?: string;
  facility?: number;
  pic?: string;
  discount?: number;
  freeShip?: boolean;
  className?: string;
  xs?: GridSize;
  sm?: GridSize;
  md?: GridSize;
  lg?: GridSize;
  xl?: GridSize;
}

const ProductCard = ({
  title,
  description,
  price,
  facility,
  xs,
  sm,
  md,
  lg,
  xl,
  pic,
  className,
  discount,
}: ProductCardInterface) => {
  return (
    <Grid
      xs={xs}
      sm={sm}
      md={md} 
      lg={lg}
      xl={xl} 
      container
      className={`product-card-container margin-1 ${className} `}
    >
      <Grid item xs={12} className="product-card-image-container">
        <img src={pic} className="product-card-image" />
      </Grid>
      <Line className="b-gray" xs={12} />
      <Grid container className="p-2 product-card-info-container">
        <Grid item xs={8}  className="product-card-title">
          <p>{title}</p>
        </Grid>
        <Grid item xs={4}  className="product-card-discount">
          <p>{`${discount}%off`}</p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductCard;
