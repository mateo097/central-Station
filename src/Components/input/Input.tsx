import "./Input.css";
import { Grid, GridSize } from "@material-ui/core";

interface InputProps {
  xs?: GridSize;
  sm?: GridSize;
  md?: GridSize;
  lg?: GridSize;
  xl?: GridSize;
  className?: string;
  placeholder?:string;
  onChange?: React.EventHandler<any>;
  name?: string;
  value?:any;
  icon?:string
}

const Input = ({ xs, md, lg, xl, className, onChange, name, value, icon, placeholder }: InputProps) => {
  return (
    <Grid container xs={xs} md={md} lg={lg} xl={xl} className={className}>
      <Grid xs={1}>
      <i className="material-icons">{icon}</i>
      </Grid>
      <Grid xs={11}>
      <input
        className="input"
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
      />
      </Grid>
    </Grid>
  );
};

export default Input;
