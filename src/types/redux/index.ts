import { store } from "../../redux";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AuthState = {
    roles?: number[];
    accessToken?: string | null;
    refreshToken?: string | null;
};

export type LangState = {
    currentLang: string;
};
