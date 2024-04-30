import axios from "axios";
import { baseURL } from "../../utils/urls/index";
import { useSelector } from "../use-selector";
import { useInterceptors } from "../use-interceptors";

export function useAxios() {
    const { accessToken } = useSelector((state) => state.auth);

    const axiosPublic = axios.create({
        headers: {
            "Content-Type": "application/json",
        },
    });

    const axiosPrivate = axios.create({
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
        },
    });

    useInterceptors(axiosPublic, axiosPrivate);

    return { axiosPublic, axiosPrivate };
}
