import Link from "next/link";
import { Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container-shell flex min-h-[calc(100vh-12rem)] items-center justify-center py-20">
      <div className="glass max-w-2xl rounded-[2rem] p-8 text-center sm:p-12">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-cyan-100">
          <Search className="h-7 w-7" aria-hidden="true" />
        </div>
        <p className="mt-8 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-100">404</p>
        <h1 className="mt-4 text-4xl font-semibold text-white">This route left the simulation.</h1>
        <p className="mt-4 text-base leading-7 text-slate-400">
          The page you requested does not exist, but the project proof, skills, and resume are still
          one click away.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">
            <Home className="h-4 w-4" aria-hidden="true" /> Back Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
