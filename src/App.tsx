import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Suspense } from "react";
import { RequareAuth } from "./components";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/">
                    {routes.public.map((item) => (
                        <Route
                            key={item.id}
                            path={item.path}
                            element={
                                <Suspense fallback={item.fallback}>
                                    {item.element}
                                </Suspense>
                            }
                        />
                    ))}
                    <Route element={<RequareAuth/>}>
                    {routes.private.map((item) => (
                        <Route
                            key={item.id}
                            path={item.path}
                            element={
                                <Suspense fallback={item.fallback}>
                                    {item.element}
                                </Suspense>
                            }
                        />
                    ))}
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
