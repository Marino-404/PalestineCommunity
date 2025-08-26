import { useAppContext } from "../store/AppContext";

function DivLine() {
  const { mode } = useAppContext();

  return (
    <div
      className={`mx-auto w-[90%] xl:w-[40%] h-[1px] my-6
         ${mode ? "divisorDark" : "divisorLight"} z-10`}
    ></div>
  );
}

export default DivLine;
