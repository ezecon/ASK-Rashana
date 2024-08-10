import { Outlet } from "react-router-dom";
import { AdminNavbar } from "./AdminNavbar/AdminNavbar";

export default function Admin() {
  return (
    <div>
        <div className="flex-none  z-40 fixed left-0 right-0 top-0  overflow-y-auto">
      <AdminNavbar/>
      </div>
      <div className="mx-auto max-w-screen-xl mt-8 py-8">

        <Outlet/>
      </div>
      </div>
  )
}
