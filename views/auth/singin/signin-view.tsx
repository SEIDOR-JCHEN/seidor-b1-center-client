"use client";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import SignInForm from "./components/signin-form";
import Image from "next/image";
import Link from "next/link";

const SignInView = () => {
  return (
    <>
      {/* <div className="bg-red-100">asd</div> */}
      <section className="bg-gray-100 h-full w-full flex items-center flex-wrap">
        <div className="w-8/12 h-full">Image</div>
        <div className="w-4/12 h-full flex p-10 items-center">
          <div className="w-full">
            <SignInForm></SignInForm>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignInView;
