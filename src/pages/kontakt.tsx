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
  FormMessage 
} from "../components/ui/form";
import { Input } from "../components/input";
import { Textarea } from "../components/textarea";
import { Checkbox } from "../components/checkbox";
import { Button } from "../components/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Namnet måste vara minst 2 tecken" }),
  email: z.string().email({ message: "Ogiltig e-postadress" }),
  phone: z.string().min(6, { message: "Ogiltigt telefonnummer" }),
  service: z.string().min(1, { message: "Välj en tjänst" }),
  message: z.string().min(10, { message: "Meddelandet måste vara minst 10 tecken" }),
  terms: z.boolean().refine(val => val === true, { message: "Du måste godkänna villkoren" })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

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
      terms: false
    }
  });

  // Funktion för att generera ett mailto-format
  const generateMailtoLink = (data: ContactFormValues): string => {
    const subject = encodeURIComponent(`Förfrågan: ${data.service}`);
    const body = encodeURIComponent(
      `Namn: ${data.name}\n` +
      `E-post: ${data.email}\n` +
      `Telefon: ${data.phone}\n` +
      `Tjänst: ${data.service}\n\n` +
      `Meddelande:\n${data.message}`
    );
    return `mailto:info@bhs.se?subject=${subject}&body=${body}`;
  };

  // Hanterar e-postavisering direkt utan backend
  const handleContactSubmit = (data: ContactFormValues) => {
    try {
      toast({
        title: "Tack för din förfrågan!",
        description: "Klicka på länken nedan för att öppna din e-postklient och skicka meddelandet."
      });
      
      // Öppna mailto-länk i en ny flik
      const mailtoLink = generateMailtoLink(data);
      window.open(mailtoLink, "_blank");
      
      form.reset();
      setIsSubmitting(false);
    } catch (error) {
      toast({
        title: "Något gick fel",
        description: "Kunde inte öppna e-postklienten. Kontrollera dina inställningar.",
        variant: "destructive"
      });
      setIsSubmitting(false);
    }
  };

  function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    handleContactSubmit(data);
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary bg-opacity-95 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Kontakta oss</h1>
            <p className="text-lg opacity-90">
              Har du frågor eller vill boka någon av våra tjänster? Kontakta oss så hjälper vi dig!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-700 mb-2">Kontakta oss</h2>
            <p className="text-neutral-500 max-w-2xl mx-auto">
              Har du frågor eller vill boka någon av våra tjänster? Kontakta oss så hjälper vi dig!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-semibold text-neutral-700 mb-6">Skicka förfrågan</h3>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>E-post</FormLabel>
                            <FormControl>
                              <Input placeholder="Din e-postadress" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefon</FormLabel>
                            <FormControl>
                              <Input placeholder="Ditt telefonnummer" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="service"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tjänst</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Välj tjänst" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="biluthyrning">Biluthyrning</SelectItem>
                                <SelectItem value="flytt">Flytthjälp</SelectItem>
                                <SelectItem value="transport">Transport och Bud</SelectItem>
                                <SelectItem value="annan">Annan tjänst</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
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
                    
                    <FormField
                      control={form.control}
                      name="terms"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 py-4">
                          <FormControl>
                            <Checkbox 
                              checked={field.value} 
                              onCheckedChange={field.onChange}
                              id="terms" 
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel htmlFor="terms">
                              Jag godkänner <a href="#" className="text-primary hover:underline">villkoren</a> och att mina uppgifter sparas enligt GDPR
                            </FormLabel>
                            <FormMessage />
                          </div>
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="bg-secondary hover:bg-red-700 w-full md:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Skickar..." : "Skicka förfrågan"}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h3 className="text-xl font-semibold text-neutral-700 mb-4">Kontaktuppgifter</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Adress</p>
                      <p className="text-neutral-600">Honnörsgatan 6</p>
                      <p className="text-neutral-600">170 69 Solna</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Telefon</p>
                      <p className="text-neutral-600">
                        <a href="tel:+46704562100" className="hover:text-primary">070-456 21 00</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">E-post</p>
                      <p className="text-neutral-600">
                        <a href="mailto:info@bhs.se" className="hover:text-primary">info@bhs.se</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="text-primary mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Öppettider</p>
                      <p className="text-neutral-600">Vardagar: 07:00-18:00</p>
                      <p className="text-neutral-600">Lördag: 09:00-15:00</p>
                      <p className="text-neutral-600">Söndag: Stängt</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-neutral-700 mb-8 text-center">Hitta till oss</h2>
          
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.7889342695702!2d18.06894691587071!3d59.33441318165847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f9d5bca429619%3A0x8e80fc99e8d6ddea!2sStockholm%2C%20Sweden!5e0!3m2!1sen!2sus!4v1629988397615!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="BHS location on map"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Kontakt;
