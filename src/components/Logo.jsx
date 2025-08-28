import heroImg from "/logo1.png";

function Logo() {
  return (
    <div className="flex justify-center items-center ">
      <img
        src={heroImg}
        alt="logo"
        className="xl:w-[260px] xl:h-[270px] h-[230px] z-10 items-center justify-center"
      />
    </div>
  );
}

export default Logo;
