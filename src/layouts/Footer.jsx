const Footer = () => {
  return (
    <>
      <footer className="-bottom-0 left-0 right-0 bg-slate-900">
        <div className="container py-10">
          <div className="flex items-center">
            <img className="h-[150px] w-[150px]" src="/img/m.png" alt="" />
            <h1 className="text-5xl font-bold text-white">Myflix</h1>
          </div>
        </div>
        <p className="py-5 text-center text-white">
          Copyright © 2022. All rights reserved.
        </p>
      </footer>
    </>
  );
};
export default Footer;
