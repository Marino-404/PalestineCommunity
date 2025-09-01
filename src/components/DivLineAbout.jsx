import { useAppContext } from "../store/AppContext";
function DivLine() {
  const { mode } = useAppContext();

  return (
    <div
      className={` mx-auto my-6 w-[90%] xl:w-[40%] h-[1px] 
         ${mode ? "divisorDark" : "divisorLight"} z-10`}
    ></div>
  );
}

export default DivLine;
