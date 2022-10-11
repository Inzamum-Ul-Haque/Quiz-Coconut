import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./layouts/Main";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Blog from "./components/Blog/Blog";
import Error from "./components/Error/Error";
import Quiz from "./components/Quiz/Quiz";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
        },
        {
          path: "/statistics",
          element: <Statistics />,
          loader: async () => {
            return fetch("https://openapi.programming-hero.com/api/quiz");
          },
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/quiz/:quizId",
          loader: async ({ params }) => {
            return fetch(
              `https://openapi.programming-hero.com/api/quiz/${params.quizId}`
            );
          },
          element: <Quiz />,
        },
      ],
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
