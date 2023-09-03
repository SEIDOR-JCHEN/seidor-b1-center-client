import SignInView from "@/views/auth/singin/signin-view";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seidor B1 Center - Signin",
};

export default function SigninPage() {
  return <SignInView />;
}
