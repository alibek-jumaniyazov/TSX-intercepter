import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { persister, store } from "./redux/index.ts";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <QueryClientProvider client={client}>
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate persistor={persister}>
                    <App />
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </QueryClientProvider>
);
