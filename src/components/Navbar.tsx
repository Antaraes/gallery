"use client";
import Image from "next/image";
import { FC } from "react";
import icon from "../../../public/next.svg";
import useAuth from "@/hooks/useAuth";
import { Button, ButtonBase } from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";
interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const { user, googleSignIn, logOut } = useAuth();
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  const handleSignOut = async () => {
    try {
      await logOut();
      router.push("/auth/signup");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="navbar bg-background dark:bg-darkbackground ">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user.photoURL ? (
                  <Image src={user.photoURL} alt="profile" width={40} height={40} />
                ) : (
                  <span>Profile</span>
                )}
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">{user.displayName}</a>
              </li>
              <li>
                <Link href={`user/${user.uid}`} className=" justify-between">
                  Profile
                </Link>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a onClick={handleSignOut}>Logout</a>
              </li>
            </ul>
          </div>
        ) : (
          <ButtonBase onClick={handleSignIn}>Sign In</ButtonBase>
        )}
      </div>
    </div>
  );
};

export default Navbar;
