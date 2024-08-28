import {Outlet} from "react-router-dom";

export default function Home() {
  return <div className="w-screen h-screen">
    <header className="h-16 w-full bg-violet-50">Đây là Header</header>
    <div className="flex">
      {/*  */}

      <div className="w-16 h-full"></div>
      <Outlet />
    </div>
  </div>;
}
