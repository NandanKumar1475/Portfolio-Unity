"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { LoadingSpinner } from "@/components/LoadingSpinner";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setError("Please complete all fields.");
      setState("error");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address.");
      setState("error");
      return;
    }

    setError("");
    setState("loading");
    window.setTimeout(() => {
      setState("success");
      event.currentTarget.reset();
    }, 700);
  }

  return (
    <form onSubmit={handleSubmit} className="glass rounded-2xl p-6" noValidate>
      <div className="grid gap-5">
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" autoComplete="name" placeholder="Your name" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" autoComplete="email" placeholder="you@company.com" />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Tell me about the Unity XR role, project, or simulation team."
          />
        </div>
      </div>
      {state === "error" ? <p className="mt-4 text-sm text-red-300">{error}</p> : null}
      {state === "success" ? (
        <p className="mt-4 rounded-xl border border-cyan-300/20 bg-cyan-300/10 px-4 py-3 text-sm text-cyan-100">
          Message ready. For production, connect this form to Resend, EmailJS, or a Vercel server action.
        </p>
      ) : null}
      <Button className="mt-6 w-full sm:w-auto" type="submit" disabled={state === "loading"}>
        {state === "loading" ? <LoadingSpinner /> : <Send className="h-4 w-4" aria-hidden="true" />}
        Send Message
      </Button>
    </form>
  );
}
