import gif from "./LoadingGif.gif";
import "./Loading.scss";
export const Loading = () => {
  return (
    <div className='C_loading'>
      <img src={gif} alt="Loading..." />
    </div>
  );
};
