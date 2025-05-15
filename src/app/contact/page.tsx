"use client"; // Required for form handling

import React, { useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, MessageSquare, Heart } from "lucide-react";
import Image from "next/image";
import emailjs from '@emailjs/browser';

// Define the form schema using Zod
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }).max(500, {
    message: "Message cannot be longer than 500 characters."
  }),
});

export default function ContactPage() {
  const { toast } = useToast();

  // Initialize the form using react-hook-form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Define the submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', values, 'YOUR_USER_ID')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toast({
          title: 'Message Sent! 🎉',
          description: "Thanks for reaching out! We'll get back to you soon.",
        });
        form.reset();
      }, (error) => {
        console.log('FAILED...', error);
        toast({
          title: 'Message Failed! 😞',
          description: "Sorry, there was an error sending your message.",
        });
      });
  }

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <h1 className="text-4xl md:text-5xl font-bold font-bubblegum-sans text-center mb-10 text-primary">Get In Touch!</h1>

      <div className="grid md:grid-cols-2 gap-12 items-start">
         <div className="space-y-6">
            <div className="flex items-center gap-3 text-primary">
                <MessageSquare className="w-8 h-8"/>
                <h2 className="text-3xl font-bubblegum-sans font-semibold">Send Me a Message</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
            Have a question or want a custom pen or bracelet? Send me a message! I’d love to hear from you.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed bg-accent/30 p-4 rounded-md border border-border">
            <Mail className="inline-block w-5 h-5 mr-2 align-text-bottom"/>
             My family helps me read and respond to messages, so we’ll get back to you soon!
            </p>
            <div className="mt-6 pt-6 border-t border-border">
                 <div className="flex items-center gap-3 text-primary">
                    <Heart className="w-8 h-8"/>
                    <h3 className="text-2xl font-bubblegum-sans font-semibold">Kind Words Welcome!</h3>
                 </div>
                <p className="text-lg text-muted-foreground mt-2">
                Every message makes my day! Thanks for supporting my small business. 😊
                </p>
            </div>
              {/* Placeholder for Social Media Links */}
            {/* <div className="mt-8">
                <h3 className="text-xl font-semibold mb-2">Follow Me:</h3>
                 <div className="flex gap-4">
                    <Button variant="outline" size="icon" asChild>
                        <a href="#" target="_blank" rel="noopener noreferrer"><svg>...</svg> Facebook</a>
                    </Button>
                     <Button variant="outline" size="icon" asChild>
                        <a href="#" target="_blank" rel="noopener noreferrer"><svg>...</svg> Instagram</a>
                    </Button>
                 </div>
            </div> */}
             <div className="mt-8 relative h-48 w-full opacity-80">
                <Image
                    src="/images/sunset.jpg"
                    alt="Colorful craft supplies"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    data-ai-hint="craft supplies beads colorful"
                 />
            </div>
         </div>

        <div className="bg-card p-6 md:p-8 rounded-lg shadow-lg">
           <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold text-card-foreground">Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Name" {...field} className="bg-background text-base py-3" />
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
                    <FormLabel className="text-lg font-semibold text-card-foreground">Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} className="bg-background text-base py-3" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-lg font-semibold text-card-foreground">Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell me what's on your mind..."
                        {...field}
                        className="min-h-[120px] bg-background text-base py-3"
                      />
                    </FormControl>
                     <FormDescription className="text-xs">
                        Max 500 characters.
                     </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full transition-transform hover:scale-105" disabled={form.formState.isSubmitting}>
                <Send className="mr-2 h-5 w-5" /> {form.formState.isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

