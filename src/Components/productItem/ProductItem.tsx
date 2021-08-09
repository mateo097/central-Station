import { Grid, GridSize } from "@material-ui/core";
import "./productItem.css";
import { Line } from "..";

interface ProductItemProps {
  xs?: GridSize;
  sm?: GridSize;
  md?: GridSize;
  lg?: GridSize;
  xl?: GridSize;
  className?: string;
  title?: string;
  value?: any;
  icon?: string;
  description?: string;
  pic?: string;
  price?:string
}



const ProductItem = ({
  xs,
  md,
  lg,
  xl,
  className,
  description,
  title,
  value,
  icon,
  pic,
  price
}: ProductItemProps) => {
  return (
    <Grid
      container
      xs={xs}
      md={md}
      lg={lg}
      xl={xl}
      className={`product-item-container border-normal shadow-normal margin-1 ${className}`}
    >
      <Grid item xs={1}>
        <img src={pic} className="product-item-image" />
      </Grid>
      <Grid item xs={8} direction="column">
        <h5>{title}</h5>
        <p>{description}</p>
      </Grid>
      <Grid item xs={1}>
        <h5>{price}</h5>
      </Grid>
      
      
    </Grid>
  );
};

export default ProductItem;
