import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "../lib/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form";
import { Input } from "../components/input";
import { Textarea } from "../components/textarea";
import { Checkbox } from "../components/checkbox";
import { Button } from "../components/button";
import { Loader, Phone, Mail, MapPin, Clock } from "lucide-react";

// Zod-schema för validering
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Namnet måste vara minst 2 tecken" }),
  email: z.string().email({ message: "Ogiltig e-postadress" }),
  phone: z.string().min(6, { message: "Ogiltigt telefonnummer" }),
  service: z.string().min(1, { message: "Välj en tjänst" }),
  message: z
    .string()
    .min(10, { message: "Meddelandet måste vara minst 10 tecken" }),
  terms: z
    .boolean()
    .refine((v) => v === true, { message: "Du måste godkänna villkoren" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;
const FORM_ENDPOINT = "https://formspree.io/f/xzzroleb";

const Kontakt = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      terms: false,
    },
  });

  const onSubmit = form.handleSubmit(async (data) => {
    setIsSubmitting(true);

    // Overlay med spinner och dimma
    toast({ title: "Skickar din förfrågan..." });

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          service: data.service,
          message: data.message,
          _subject: `Förfrågan: ${data.service}`,
          _replyto: data.email,
          _captcha: false,
        }),
      });
      const result = await response.json();

      if (response.ok && result.ok) {
        toast({
          title: "Tack för din förfrågan!",
          description: "Ditt meddelande har skickats.",
          variant: "success",
        });
        form.reset();
        setTimeout(() => (window.location.href = "/"), 3000);
      } else {
        throw new Error(result.error || "Fel vid formulärskick");
      }
    } catch {
      toast({
        title: "Något gick fel",
        description: "Kunde inte skicka ditt meddelande.",
        variant: "destructive",
      });
    }
  });

  return (
    <>
      {/* Overlay vid skickning */}
      {isSubmitting && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex flex-col items-center justify-center z-50">
          <Loader className="animate-spin h-16 w-16 text-white" />
          <p className="mt-4 text-white text-lg">Skickar din förfrågan...</p>
        </div>
      )}

      {/* Banner */}
      <section className="bg-gray-200 bg-opacity-95 text-neutral-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Kontakta oss</h1>
          <p className="text-lg opacity-90">
            Har du frågor eller vill boka någon av våra tjänster? Kontakta oss
            så hjälper vi dig!
          </p>
        </div>
      </section>

      {/* Formulär & info */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulär */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-neutral-700 mb-6">
              Skicka förfrågan
            </h2>
            <Form {...form}>
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Namn */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Namn</FormLabel>
                        <FormControl>
                          <Input placeholder="Ditt namn" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* E-post */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-post</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="din@epost.se"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Telefon */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefon</FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            placeholder="070-123 45 67"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Tjänst */}
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tjänst</FormLabel>
                        <FormControl>
                          <select
                            value={field.value}
                            onChange={(e) => field.onChange(e.target.value)}
                            className="w-full border border-gray-300 bg-white text-neutral-900 rounded-md p-2"
                          >
                            <option value="">Välj en tjänst</option>
                            <option value="biluthyrning">Biluthyrning</option>
                            <option value="flytt">Flytt</option>
                            <option value="transport">Transport</option>
                            <option value="ovrigt">Övrigt</option>
                          </select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Meddelande */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Meddelande</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Beskriv ditt ärende"
                          className="resize-none min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Villkor */}
                <FormField
                  control={form.control}
                  name="terms"
                  render={({ field }) => (
                    <FormItem className="flex items-start space-x-3 py-4">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          id="terms"
                        />
                      </FormControl>
                      <div>
                        <FormLabel htmlFor="terms">
                          Jag godkänner{" "}
                          <a href="#" className="text-primary hover:underline">
                            villkoren
                          </a>{" "}
                          och att mina uppgifter sparas enligt GDPR
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                {/* Skicka-knapp */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="mr-2 h-5 w-5 animate-spin" />
                      Skickar...
                    </>
                  ) : (
                    "Skicka förfrågan"
                  )}
                </Button>
              </form>
            </Form>
          </div>

          {/* Kontaktuppgifter */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-xl font-semibold text-neutral-700 mb-4">
              Kontaktuppgifter
            </h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-primary mr-3 mt-1" />
                <div>
                  <p className="font-medium">Adress</p>
                  <p>Honnörsgatan 6, 170 69 Solna</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-primary mr-3 mt-1" />
                <div>
                  <p className="font-medium">Telefon</p>
                  <p>
                    <a href="tel:+46739845068" className="hover:text-primary">
                      073-984 50 68
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="text-primary mr-3 mt-1" />
                <div>
                  <p className="font-medium">E-post</p>
                  <p>
                    <a href="mailto:info@bhs.se" className="hover:text-primary">
                      info@bhs.se
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="text-primary mr-3 mt-1" />
                <div>
                  <p className="font-medium">Öppettider</p>
                  <p>Vardagar: 07:00–18:00</p>
                  <p>Lördag: 09:00–15:00</p>
                  <p>Söndag: Stängt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Karta */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-neutral-700 mb-8">
            Hitta till oss
          </h2>
          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8124.421819494206!2d17.98824315742485!3d59.3690056601716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9f124af6a4a7%3A0x3027dd1be4d6acfe!2sHonn%C3%B6rsgatan%206%2C%20170%2069%20Solna!5e0!3m2!1ssv!2sse!4v1716740749317!5m2!1ssv!2sse"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="BHS Hyrbilar & Service"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Kontakt;
