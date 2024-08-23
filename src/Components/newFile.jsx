import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts, DeleteProduct } from '../../Redux/productSlice';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box,Pagination } from '@mui/material';
import Button from '@mui/material/Button';
import SweetAlert from 'react-bootstrap-sweetalert';
import { Link } from "react-router-dom";

const ShowProduct = () => {
  const dispatch = useDispatch();
  const [deleteId, setDeleteId] = useState("");
  const [isDelete, setIsDelete] = useState(false);
  const [totalRecords, setPage] = useState();
  const { AllProduct,totalPages } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const handelchange = (item, pageno) => {
    setPage(pageno);
    dispatch(
        listProducts({
        page: pageno,
        perPage: 10,
      })
    );
  };

  const delete_func = () => {
    if (deleteId !== "") {
      dispatch(DeleteProduct({ id: deleteId })).then(() => {
        dispatch(listProducts());
      });
    }
    setDeleteId("");
    setIsDelete(false);
  };

  return (
    <>
     <Grid container spacing={3} style={{ marginTop: '80px' }}>
  {AllProduct?.map((product) => (
    <Grid item xs={12} sm={6} md={4} key={product._id}>
      <Card
        // sx={{
        //   maxWidth: 345,
        //   boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        //   transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        //   '&:hover': {
        //     transform: 'translateY(-5px)',
        //     boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
        //   },
        // }}
      >
        {console.log(`https://wtsacademy.dedicateddevelopers.us/uploads/product/${product?.image}`)}
        <CardMedia
          sx={{ height: 140 }}
          image={
            product?.image
              ? `https://wtsacademy.dedicateddevelopers.us/uploads/product/${product.image}`
              : '/path-to-fallback-image.jpg'
          }
          title={product.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to={`/Edit/${product?._id}`} style={{ textDecoration: 'none' }}>
            <Button
              size="small"
              sx={{
                color: '#1976d2',
                '&:hover': {
                  backgroundColor: '#1976d2',
                  color: '#fff',
                },
              }}
            >
              Edit
            </Button>
          </Link>
          <Button
            size="small"
            onClick={() => {
              setDeleteId(product?._id);
              setIsDelete(true);
            }}
            sx={{
              color: '#d32f2f',
              '&:hover': {
                backgroundColor: '#d32f2f',
                color: '#fff',
              },
            }}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  ))}
</Grid>

      {isDelete && (
        <SweetAlert
          onConfirm={delete_func}
          onCancel={() => setIsDelete(false)}
          title={"Are you sure?"}
          subtitle={"You will not be able to recover this product!"}
        />
      )}

<Box display="flex" justifyContent="center"  bgcolor={'brown'}>
        <Pagination
          count={totalPages}
          totalRecords={totalRecords}
          onChange={handelchange}
        />
      </Box>
    </>
  );
};

export default ShowProduct;
