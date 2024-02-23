import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
  return (
    <div className="w-full flex justify-center gap-4 py-10">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to login.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg">
          <div className="mb-1 flex flex-col gap-6">
            <Input
              size="lg"
              placeholder="name@mail.com or @username"
              label="Your Email / Username"
            />

            <Input
              type="password"
              size="lg"
              placeholder="********"
              label="Your Password"
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
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
          <Button
            type="button"
            onClick={() => toast.success("Wow so easy!")}
            className="mt-6 flex justify-center"
            fullWidth
          >
            Login
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <Link to="/signup" className="font-medium text-gray-900">
              Sign Up
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}
