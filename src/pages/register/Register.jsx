import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useForm, Controller } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm();
const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    setTimeout(() => {
        navigate("/login");
    }, 500);
    toast.success("Registration successful!");
    reset();
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-2">
            {/* Name Field */}
            <Typography variant="h6" color="blue-gray" className="">
              Your Name
            </Typography>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="John Doe"
                  size="lg"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  {...register("name", { required: true })}
                />
              )}
            />
            {errors?.name && (
              <Typography variant="small" color="red">
                {errors.name.message || "Name is required"}
              </Typography>
            )}

            {/* Email Field */}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="name@mail.com"
                  size="lg"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  {...register("email", { required: true })}
                />
              )}
            />
            {errors?.email && (
              <Typography variant="small" color="red">
                {errors.email.message || "Email is required"}
              </Typography>
            )}

            {/* Password Field */}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Input
                  {...field}
                  type="password"
                  placeholder="********"
                  size="lg"
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                  {...register("password", { required: true })}
                />
              )}
            />
            {errors?.password && (
              <Typography variant="small" color="red">
                {errors.password.message || "Password is required"}
              </Typography>
            )}
          </div>

          <Controller
            name="terms"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <Checkbox
                {...field}
                label={
                  <Typography
                    variant="small"
                    color="gray"
                    className="flex items-center font-normal"
                  >
                    I agree to the
                    <a
                      href="#"
                      className="font-medium transition-colors hover:text-gray-900"
                    >
                      &nbsp;Terms and Conditions
                    </a>
                  </Typography>
                }
                containerProps={{ className: "-ml-2.5" }}
              />
            )}
          />
          {errors?.terms && (
            <Typography variant="small" color="red">
              You must agree to the Terms and Conditions
            </Typography>
          )}

          <Button type="submit" className="mt-6" fullWidth>
            Register
          </Button>

          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to="/login" className="font-medium text-gray-900">
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Register;
