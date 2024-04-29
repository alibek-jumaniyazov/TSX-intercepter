
import { useSelector as useReducSelector } from "react-redux";
import { RootState } from "../../types/redux";


export function useSelector<T>(callbackFn: (state: RootState) => T) {
    return useReducSelector(callbackFn);
}