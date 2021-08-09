import { useState } from "react";
import "./Form.css";
import { Grid, GridSize, Button } from "@material-ui/core";
import { Input } from "../../../Components";
import { isPropertySignature } from "typescript";

interface FormProps {
  xs?: GridSize;
  sm?: GridSize;
  md?: GridSize;
  lg?: GridSize;
  xl?: GridSize;
  className?: string;
  addOrEdit?: any;
}

const Form = ({ xs, sm, md, lg, xl, className, addOrEdit }: FormProps) => {
  const initialStateValues = {
    url: "",
    name: "",
    description: "",
    price: "",
    discount: "",
  };

  const [values, setValues] = useState(initialStateValues);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addOrEdit(values);
    setValues({ ...initialStateValues }); //45:17
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Grid xs={xs} sm={sm} md={md} lg={lg} xl={xl} className={className}>
      <form className={`form ${className}`} onSubmit={handleSubmit}>
        <Input
          xs={6}
          icon="insert_link"
          placeholder="URL de la imagen"
          onChange={handleInputChange}
          name="url"
          value={values.url}
        />
        <Input
          xs={6}
          icon="local_mall"
          placeholder="Nombre del producto"
          onChange={handleInputChange}
          name="name"
          value={values.name}
        />
        <Input
          xs={6}
          icon="format_align_left"
          placeholder="Descripción del producto"
          onChange={handleInputChange}
          name="description"
          value={values.description}
        />
        <Input
          xs={6}
          icon="attach_money"
          placeholder="Precio"
          onChange={handleInputChange}
          name="price"
          value={values.price}
        />
        <Input
          xs={6}
          icon="local_activity"
          placeholder="Descuento"
          onChange={handleInputChange}
          name="discount"
          value={values.discount}
        />
        <Button type="submit">Guardar</Button>
      </form>
    </Grid>
  );
};

export default Form;
