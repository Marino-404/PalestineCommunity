import { useAppContext } from "../store/AppContext";
function DivLine() {
  const { mode } = useAppContext();

  return (
    <div
      className={`absolute mx-auto xl:my-20 my-20 w-[90%] xl:w-[40%] h-[1px] 
         ${mode ? "divisorDark" : "divisorLight"} z-10`}
    ></div>
  );
}

export default DivLine;
