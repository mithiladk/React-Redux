import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editProduct, updateProduct } from '../../Redux/productSlice';
import { useForm } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { editData } = useSelector((state) => state.cart);
    const { register, handleSubmit, setValue, formState } = useForm();
    const { errors } = formState;
    const dispatch = useDispatch();
    const [imagePreview, setImagePreview] = useState("");

    useEffect(() => {
        dispatch(editProduct(id));
    }, [id, dispatch]);

    useEffect(() => {
        if (editData) {
            setValue("title", editData.title);
            setValue("description", editData.description);
            if (editData.image) {
                setImagePreview(`https://wtsacademy.dedicateddevelopers.us/uploads/product/${editData.image}`);
            }
        }
    }, [editData, setValue]);

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        if (data.image.length > 0) {
            formData.append("image", data.image[0]);
        }
        formData.append("id", id);

        dispatch(updateProduct(formData)).then(() => {
            navigate("/showproduct");
        });
    };

    const handleImageChange = (e) => {
        if (e.target.files.length > 0) {
            const file = e.target.files[0];
            setImagePreview(URL.createObjectURL(file));
        }
    }

    return (
        <div style={{
            padding: 20,
            marginTop: '90px',
            background: 'url(/images/edit1.jpg) no-repeat center center fixed',
            backgroundSize: 'cover',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'end'
        }}>
            <h1 style={{
                color: '#D81B60',
                fontSize: '24px',
                fontFamily: '"Poppins", sans-serif',
                marginBottom: '20px'
            }}>Edit Product</h1>
            <form onSubmit={handleSubmit(onSubmit)} style={{
                maxWidth: '500px',
                width: '100%',
                backgroundColor: '#FFF',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
            }}>
                <TextField
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    {...register('title', { required: 'Title is required' })}
                    error={!!errors.title}
                    helperText={errors.title ? errors.title.message : ''}
                    InputLabelProps={{ style: { fontSize: '16px', color: '#D81B60', fontFamily: '"Poppins", sans-serif' } }}
                    InputProps={{ style: { fontSize: '14px', color: '#555', fontFamily: '"Poppins", sans-serif' } }}
                />
                <TextField
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    {...register('description', { required: 'Description is required' })}
                    error={!!errors.description}
                    helperText={errors.description ? errors.description.message : ''}
                    InputLabelProps={{ style: { fontSize: '16px', color: '#D81B60', fontFamily: '"Poppins", sans-serif' } }}
                    InputProps={{ style: { fontSize: '14px', color: '#555', fontFamily: '"Poppins", sans-serif' } }}
                />
                
                {imagePreview && (
                    <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
                        <img
                            src={imagePreview}
                            alt="Current Preview"
                            width="130"
                            height="130"
                            style={{
                                borderRadius: '50%',
                                border: '3px solid #fff',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                transition: 'transform 0.3s ease-in-out',
                                transform: 'scale(1.05)'
                            }}
                        />
                    </div>
                )}

                <TextField
                    fullWidth
                    type="file"
                    variant="outlined"
                    accept="image/*"
                    {...register("image")}
                    error={!!errors.image}
                    helperText={errors.image?.message}
                    onChange={handleImageChange}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            "& fieldset": {
                                borderColor: "black",
                            },
                            "&:hover fieldset": {
                                borderColor: "black",
                            },
                            "&.Mui-focused fieldset": {
                                borderColor: "black",
                            },
                            backgroundColor: "transparent",
                        },
                        marginTop: '8px'
                    }}
                />
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <Button
                        type="submit"
                        variant="contained"
                        style={{
                            padding: '10px 20px',
                            fontSize: '16px',
                            color: '#fff',
                            backgroundColor: '#D81B60',
                            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                            fontFamily: '"Poppins", sans-serif',
                        }}
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default EditProduct;