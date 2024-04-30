import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "../../hooks";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreatePublic } from "../../hooks/use-query";
import {  loginUrl } from "../../utils/urls";
import { setAuth } from "../../redux/slices/authSlice";

const FormScheme = z.object({
    username: z.string(),
    password: z.string(),
});
export type TUserResponse = {
    accessToken: string;
    refreshToken: string;
};

export default function LoginPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { handleSubmit, register, reset } = useForm<
        z.infer<typeof FormScheme>
    >({
        resolver: zodResolver(FormScheme),
    });

    const { mutate, isLoading } = useCreatePublic<
        TUserResponse,
        z.infer<typeof FormScheme>
    >(loginUrl);
    function onSumbit(values: z.infer<typeof FormScheme>) {
        mutate(values, {
            onSuccess: (response) => {
                reset();
                dispatch(setAuth(response.data));
                return navigate("/profile");
            },
            onError: (error) => {
                console.error(error.message);
            },
        });
    }

    return (
        <div className="LoginPage">
            <form onSubmit={handleSubmit(onSumbit)}>
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
                <button disabled={isLoading} type="submit">
                    Login
                </button>
            </form>
            <h1>
                go to <Link to="/sign-up">Sign Up</Link>
            </h1>
        </div>
    );
}
