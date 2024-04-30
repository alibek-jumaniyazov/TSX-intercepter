import { useGet } from "../../hooks/use-query";
import { useDispatch } from "../../hooks";
import { clearAuth } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import { baseUrlPost, prostUrl } from "../../utils/urls";

export type TPostResponse = {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
};
export default function ProfilePage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { data, isLoading, error } = useGet<TPostResponse[]>(
        baseUrlPost + prostUrl
    );
    console.log(data);

    return (
        <div className="ProfilePage">
            <h1>
                go to{" "}
                <button onClick={() => (dispatch(clearAuth()), navigate("/"))}>
                    logout
                </button>
            </h1>
        </div>
    );
}
