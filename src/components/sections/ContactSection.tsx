import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare } from "lucide-react";
import { Section } from "../Section";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

export function ContactSection(): JSX.Element {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (form.current) {
      emailjs
        .sendForm("service_wsfw9tl", "template_oipbm6r", form.current, {
          publicKey: "hKC2B78q_tnwFYM-W",
        })
        .then(() => {
          form.current?.reset();
        })
        .catch((err) => {
          console.log("Error:", err);
        })
        .finally(() => {
          toast.success("Message Sent!");
          setLoading(false);
        });
    }
  };

  return (
    <Section
      title="Contact"
      id="contact"
      className="bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-xl mx-auto px-4">
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="relative"
        >
          {/* Decorative elements */}
          <div className="absolute -top-12 sm:-right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
          <div className="absolute -bottom-12 sm:-left-12 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />

          <div className="relative bg-white dark:bg-gray-900 p-8 md:p-10 rounded-3xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm">
            <div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <label className="flex items-center gap-2 text-sm font-medium mb-2">
                    <User size={16} className="text-blue-500" />
                    Full Name
                  </label>
                  <input
                    required
                    name="user_name"
                    type="text"
                    className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-2 border-transparent hover:border-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                    placeholder="Your Name"
                  />
                </div>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group relative mt-6"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-blue-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <Mail size={16} className="text-blue-500" />
                  Email
                </label>
                <input
                  required
                  name="user_email"
                  type="email"
                  className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-2 border-transparent hover:border-blue-500/20 focus:border-blue-500 dark:focus:border-blue-400 transition-colors"
                  placeholder="mail@example.com"
                />
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="group relative mt-6"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <MessageSquare size={16} className="text-purple-500" />
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  className="w-full p-3 rounded-xl bg-gray-50 dark:bg-gray-800 border-2 border-transparent hover:border-purple-500/20 focus:border-purple-500 dark:focus:border-purple-400 transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>
            </motion.div>

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-8 py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-medium inline-flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/25"
            >
              <Send
                size={20}
                className={loading ? "animate-spin" : "animate-pulse"}
              />
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}
