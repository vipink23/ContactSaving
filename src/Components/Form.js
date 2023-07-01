import React from "react";
import { useForm } from "react-hook-form";

function Form({ formSub }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const onSub = (data) => {
    data.id = Date.now();
    data.fav = false;
    formSub(data);
    // console.log(data);
    reset();
  };

  return (
    <div className="col-sm-4 shadow rounded g-5">
      <h1 className="text-center pt-3 text-secondary h2">Add Contact</h1>
      <form onSubmit={handleSubmit(onSub)}>
        <div className="form-group">
          <label className="col-form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            {...register("name", {
              required: "name is required",
            })}
          />
          {errors.name && (
            <small className="text-danger">{errors.name.message}</small>
          )}
        </div>
        <div className="form-group">
          <label className="col-form-label">Email:</label>
          <input
            type="text"
            className="form-control"
            {...register("email", {
              required: "email required",
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: "invalide email address",
              },
            })}
          />
          {errors.email && (
            <small className="text-danger">{errors.email.message}</small>
          )}
        </div>
        <div className="form-group">
          <label className="col-form-label">Phone:</label>
          <input
            type="text"
            className="form-control"
            {...register("phone", {
              required: "phone number is required",
              pattern: {
                value: /(7|8|9)\d{9}/,
                message: "invalid phone number",
              },
            })}
          />
          {errors.phone && (
            <small className="text-danger">{errors.phone.message}</small>
          )}
        </div>
        <input
          type="submit"
          className="btn btn-primary my-3"
          value="Add Contact"
        />
      </form>
    </div>
  );
}

export default Form;
