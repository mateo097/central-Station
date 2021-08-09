import { useState, useEffect, Fragment } from "react";
import { Navbar, ProductCard } from "../../Components";
import { Grid } from "@material-ui/core";
import { useHistory } from "react-router";

import { db } from "../../firebase";

const HomePage = () => {
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

  useEffect(() => {
    getProducts();
  }, []);

  const history = useHistory();
  const routeChange = () => {
    let path = `/admin`;
    history.push(path);
  };

  return (
    <>
      <Navbar>
        <button onClick={routeChange}>asdasd</button>
      </Navbar>
     
        

      <Grid xs={6}>
        {products.map((product) => (
          <>
            <ProductCard
              key={product.id}
              xs={7}
              sm={5}
              md={3}
              pic={product.url}
              title={product.name}
              description={product.description}
              price={product.price}
              /*        discount={product.discount}*/
            />
            
          </>
        ))}
      </Grid>
      </>
  );
};

export default HomePage;
