import "./line.css";
import { Grid, GridSize } from "@material-ui/core";

interface LineProps {
  xs?: GridSize;
  sm?: GridSize;
  md?: GridSize;
  lg?: GridSize;
  xl?: GridSize;
  className?: string;
}

const Line = ({ xs, md, lg, xl, className }: LineProps) => {
  return (
    <Grid xs={xs} md={md} lg={lg} xl={xl} className={`line ${className}`} />
  );
};

export default Line;
