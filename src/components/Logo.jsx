import heroImg from "/src/images/Logo.png";

function Logo() {
  return (
    <div className="flex justify-center items-center ">
      <img
        src={heroImg}
        alt="logo"
        className="xl:w-[230px] xl:h-[220px] h-[180px] z-10 items-center justify-center"
      />
    </div>
  );
}

export default Logo;
