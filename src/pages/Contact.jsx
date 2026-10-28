import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useHomeContent } from "../hooks/useHomeContent";
import { usePagesContent } from "../hooks/usePagesContent";
import PageHero from "../components/pages/PageHero";
import Section from "../components/ui/Section";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import Icon from "../components/ui/Icon";
import Input from "../components/ui/Input";
import Skeleton from "../components/ui/Skeleton";

/** Contact details and a validated local demo enquiry form. */
export default function Contact() {
  const { data: pages, isLoading, isError } = usePagesContent();
  const { data: home, isLoading: homeLoading } = useHomeContent();
  const [searchParams] = useSearchParams();
  const page = pages?.contact;
  const contact = home?.footer;
  const requestedPet = searchParams.get("pet");
  const requestedTopic = searchParams.get("topic");
  const topic = page?.topics.includes(requestedTopic) ? requestedTopic : "";
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero content={page} isLoading={isLoading} isError={isError} />
      {page ? (
        <Section bg="gray">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-3xl bg-white p-6 sm:p-9">
              <SectionHeading title={page.formTitle} />
              {submitted ? (
                <p role="status" className="mt-6 rounded-2xl bg-brand-light p-5 text-sm leading-7 text-brand">{page.successMessage}</p>
              ) : (
                <form
                  className="mt-6 space-y-5"
                  onSubmit={(event) => {
                    event.preventDefault();
                    setSubmitted(true);
                  }}
                >
                  <Input id="contact-name" name="name" label={page.nameLabel} placeholder={page.namePlaceholder} required autoComplete="name" />
                  <Input id="contact-email" name="email" label={page.emailLabel} type="email" placeholder={page.emailPlaceholder} required autoComplete="email" />
                  <div>
                    <label htmlFor="contact-topic" className="mb-2 block text-sm font-medium text-brand">{page.topicLabel}</label>
                    <select id="contact-topic" name="topic" defaultValue={topic} required className="min-h-12 w-full rounded-xl border border-brand/20 bg-white px-4 text-sm text-brand focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30">
                      <option value="" disabled>{page.topicPlaceholder}</option>
                      {page.topics.map((item) => <option key={item} value={item}>{item}</option>)}
                    </select>
                  </div>
                  {requestedPet ? <p className="text-sm text-brand/70">Adoption enquiry for: <span className="font-medium text-brand">{requestedPet}</span></p> : null}
                  <div>
                    <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-brand">{page.messageLabel}</label>
                    <textarea id="contact-message" name="message" rows="5" required placeholder={page.messagePlaceholder} className="w-full rounded-xl border border-brand/20 bg-white px-4 py-3 text-sm text-brand placeholder:text-brand/45 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30" />
                  </div>
                  <Button type="submit">{page.submitAction}</Button>
                  <p className="text-xs leading-5 text-brand/60">{page.formNotice}</p>
                </form>
              )}
            </div>
            <div className="space-y-5">
              {homeLoading ? <Skeleton className="h-56" /> : contact ? (
                <div className="rounded-3xl bg-white p-6 sm:p-8">
                  <SectionHeading title={contact.contactTitle} />
                  <ul className="mt-6 space-y-5 text-sm text-brand/75">
                    <li className="flex gap-3"><Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-accent" /><span>{contact.address}</span></li>
                    <li className="flex gap-3"><Icon name="phone" className="h-5 w-5 shrink-0 text-accent" /><a href={`tel:${contact.phone.replaceAll(" ", "")}`} className="hover:text-brand">{contact.phone}</a></li>
                    <li className="flex gap-3"><Icon name="mail" className="h-5 w-5 shrink-0 text-accent" /><a href={`mailto:${contact.email}`} className="hover:text-brand">{contact.email}</a></li>
                  </ul>
                </div>
              ) : null}
              {contact ? (
                <div className="rounded-3xl border border-brand/10 bg-white p-6 text-brand sm:p-8">
                  <Icon name="heart" className="h-6 w-6 text-accent" />
                  <h2 className="mt-4 font-display text-2xl font-medium">{page.emergencyTitle}</h2>
                  <p className="mt-3 text-sm leading-7 text-brand/75">{page.emergencyDescription}</p>
                  <Button asLink to={`tel:${contact.emergencyPhone.replaceAll(" ", "")}`} variant="primary" className="mt-5" icon="phone" iconPosition="left">{contact.emergencyPhone}</Button>
                </div>
              ) : null}
            </div>
          </div>
        </Section>
      ) : null}
    </>
  );
}
