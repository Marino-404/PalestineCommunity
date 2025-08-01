import { useAppContext } from "../AppContext";

function BackGroundPage() {
  const { mode } = useAppContext();

  return (
    <div
      className={`fixed inset-0 -z-10 h-screen w-full ${
        mode ? "bg-black " : "bg-white "
      }`}
    ></div>
  );
}

export default BackGroundPage;
