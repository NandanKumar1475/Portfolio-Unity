import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialLinks } from "@/components/SocialLinks";
import { Card } from "@/components/ui/card";
import { contactEmail } from "@/data/socials";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Nandan Kumar for Unity XR Developer, AR/VR Simulation Engineer, and immersive application roles.",
};

export default function ContactPage() {
  return (
    <div className="py-20">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s talk about Unity XR roles."
            description="Best fit: Unity XR Developer, AR/VR Simulation Engineer, simulation developer, or immersive application engineer roles."
          />
          <Card>
            <h2 className="text-xl font-semibold text-white">Direct links</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Email is the fastest path for recruiter outreach. You can also review project code and
              connect professionally through the links below.
            </p>
            <a className="mt-5 block text-sm font-semibold text-cyan-100 hover:text-cyan-50" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>
            <SocialLinks className="mt-6" />
          </Card>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
