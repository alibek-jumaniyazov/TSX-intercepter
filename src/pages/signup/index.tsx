import { z } from "zod";
import { setAuth } from "../../redux/slices/authSlice";
import { useForm } from "react-hook-form";
import { baseURL, signupUrl } from "../../utils/urls";
import { useDispatch } from "../../hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { TUserResponse } from "../login";
import { useCreatePublic } from "../../hooks/use-query";
import { Link, useNavigate } from "react-router-dom"

const FormScheme = z.object({
    username: z.string(),
    password: z.string(),
    confirmPassword: z.string(),
});

export default function SignUp() {
        const { handleSubmit, register, reset } = useForm<
            z.infer<typeof FormScheme>
        >({
            resolver: zodResolver(FormScheme),
        });

            const { mutate, isLoading } = useCreatePublic<
                TUserResponse,
                z.infer<typeof FormScheme>
            >(baseURL + signupUrl);

            const dispatch = useDispatch()
            const navigate = useNavigate()

            function onSubmit(values: z.infer<typeof FormScheme>) {
                mutate(values , {
                    onSuccess: (response) => {
                        reset();
                        dispatch(setAuth(response.data));
                        return navigate('/profile')
                    },
                    onError: (error) => {
                        console.error(error.message);                        
                    }
                })
            }

    return (
        <div className="SignUp">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="username"
                    {...register("username")}
                />
                <input
                    type="password"
                    placeholder="password"
                    {...register("password")}
                />
                <input
                    type="password"
                    placeholder="password"
                    {...register("confirmPassword")}
                />
                <button disabled={isLoading} type="submit">sign up</button>
            </form>
            <h1>
                go to <Link to="/login">Login</Link>
            </h1>
        </div>
    );
}