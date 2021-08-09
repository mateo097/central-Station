import { useState, useEffect } from "react";
import Navbar from "../../Components/navbar/Navbar";
import { Grid, GridSize, Button } from "@material-ui/core";
import { Title, ProductCard, ProductItem } from "../../Components";
import Form from "./form/Form";

import { db } from "../../firebase";

const AdminPage = () => {
  interface productObject {
    url: string;
    name: string;
    description: string;
    price: string;
    discount: number;
    id: string | number;
  }

  const [products, setProducts] = useState<productObject[]>([]);

  const getProducts = async () => {
    db.collection("products").onSnapshot((querySnapshot) => {
      const docs: productObject[] | any = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setProducts(docs);
    });
  };

  const addOrEditProduct = async (productObject: productObject) => {
    await db.collection("products").doc().set(productObject);
    console.log("new product guardadoooo");
  };

  const onDeleteProduct = async (id: any) => {
    if (window.confirm("u sure?")) {
      await db.collection("products").doc(id).delete();
      console.log("deleted!");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Grid container className="p-1 margin-top-lg">
      <Grid xs={6}>
        {products.map((product) => (
          <>
            <ProductItem
              key={product.id}
              xs={10}
              pic={product.url}
              title={product.name}
              description={product.description}
              price={product.price}
              /*        discount={product.discount}*/
            />
            <Grid xs={1}>
              {" "}
              <i
                className="material-icons"
                onClick={() => onDeleteProduct(product.id)}
              >
                close
              </i>{" "}
            </Grid>
          </>
        ))}
      </Grid>
      <Grid xs={6}>
        <Form xs={12} addOrEdit={addOrEditProduct} />
      </Grid>
    </Grid>
  );
};

export default AdminPage;
