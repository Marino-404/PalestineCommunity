import { useAppContext } from "../store/AppContext";
function DivLine() {
  const { mode } = useAppContext();

  return (
    <div
      className={`mx-auto my-8 w-full xl:w-[70%] h-[1px] 
         ${
           mode ? "divisorDark" : "divisorLight"
         } xl:animate-fade-down animate-duration-[2000ms]`}
    ></div>
  );
}

export default DivLine;
