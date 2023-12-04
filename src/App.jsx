//REACT ROUTER DOM
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//REACT QUERY
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, //5mins
    },
  },
});

//components
import {
  About,
  Cocktail,
  Error,
  HomeLayout,
  LandingPage,
  Newsletter,
  SinglePageError,
} from "./pages";

import { loader as landingLoader } from "./pages/LandingPage";
import { loader as singleCocktailLoader } from "./pages/Cocktail";
//loader  react-router

import { action as newsletterAction } from "./pages/Newsletter"; //formulario action

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />, //se ocorrer erro 404, renderizar essa página
    children: [
      {
        index: true,
        element: <LandingPage />,
        errorElement: <SinglePageError />, //caso haja algum erro, renderizar essa página
        loader: landingLoader(queryClient),
      },
      {
        path: "cocktail/:id",
        errorElement: <SinglePageError />,
        loader: singleCocktailLoader(queryClient),
        element: <Cocktail />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
        action: newsletterAction,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
