import { redirect } from "react-router-dom";
import { ClipLoader } from "react-spinners";

const ErrorPage = () => {
  setInterval(function () {
    redirect("/");
  }, 1000);

  return (
    <div className="h-[100vh] w-[100vw] bg-white items-center justify-center flex flex-col">
      <h1 className="text-xl">Something goes wrong</h1>
      <div className="items-center justify-center flex w-full">
        <i>
          Redireting to home <ClipLoader size={20} />
        </i>
      </div>
    </div>
  );
};

export default ErrorPage;
