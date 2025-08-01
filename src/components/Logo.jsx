import heroImg from "/src/images/Logo.png";

function Logo() {
  return (
    <div className="flex justify-center items-center ">
      <img
        src={heroImg}
        alt="logo"
        className="xl:w-[250px] xl:h-[250px] h-[200px] z-10 items-center justify-center"
      />
    </div>
  );
}

export default Logo;
