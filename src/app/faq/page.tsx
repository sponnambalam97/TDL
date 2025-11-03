"use client";
import * as Accordion from "@radix-ui/react-accordion";

const faqs = [
  {
    q: "What courses do you offer?",
    a: "We cover KS1–A Levels, plus 11+ preparation across core and advanced subjects.",
  },
  {
    q: "How do online classes work?",
    a: "Small live sessions, recorded content, assignments, and progress tracking in your portal.",
  },
  {
    q: "Do I need an assessment first?",
    a: "An initial assessment is recommended to tailor the learning plan but not mandatory.",
  },
  {
    q: "How many children per class?",
    a: "Typically 4–8 learners per group with personalised support from expert tutors.",
  },
  {
    q: "What if we miss a lesson?",
    a: "You can access recordings and materials, and we can help reschedule when possible.",
  },
];

export default function FAQPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold">Frequently Asked Questions</h1>
      <Accordion.Root type="single" collapsible className="rounded-2xl border border-zinc-200 bg-white/90 backdrop-blur">
        {faqs.map((item, idx) => (
          <Accordion.Item key={idx} value={`item-${idx}`}>
            <Accordion.Header>
              <Accordion.Trigger className="flex w-full items-center justify-between px-6 py-4 text-left text-lg font-medium hover:bg-zinc-50 border-b border-zinc-100">
                {item.q}
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="px-6 pb-6 text-zinc-700">
              {item.a}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </main>
  );
}


