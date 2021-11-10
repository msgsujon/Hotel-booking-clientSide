import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './BookingForm.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://aqueous-headland-34251.herokuapp.com/users', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="BookingForm mt-5">
            <h1 className="mb-4  fw-bold">Please booking</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
                <input type="email" {...register("email")} placeholder="Email" />
                <input {...register("hotel", { required: true, maxLength: 20 })} placeholder="Hotel Name" />
                <input type="date" {...register("date")} placeholder="date" />
                <input type="number" {...register("number")} placeholder="How many rooms?" />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddService;