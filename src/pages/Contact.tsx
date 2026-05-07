import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Send, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

const RECIPIENT_EMAIL = 'Justart1406@gmail.com';

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validateForm(data: { name: string; email: string; message: string }): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Name is required.';
  if (!data.email.trim()) errors.email = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) errors.email = 'Please enter a valid email address.';
  if (!data.message.trim()) errors.message = 'Message is required.';
  return errors;
}

function buildEmailContent(data: { name: string; email: string; projectType: string; budget: string; message: string }) {
  const subject = `New Inquiry from ${data.name.trim()}${data.projectType ? ` — ${data.projectType}` : ''}`;
  const body = [
    `Name: ${data.name.trim()}`,
    `Email: ${data.email.trim()}`,
    data.projectType ? `Project Type: ${data.projectType}` : '',
    data.budget ? `Budget Range: ${data.budget}` : '',
    '',
    'Message:',
    data.message.trim(),
  ].filter(Boolean).join('\n');
  return { subject, body };
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
      if (fieldErrors[name as keyof FormErrors]) {
        setFieldErrors(prev => ({ ...prev, [name]: undefined }));
      }
    },
    [fieldErrors],
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    const { subject, body } = buildEmailContent(formData);
    const mailtoUrl = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Use a hidden link click — most reliable cross-browser/device method
    const link = document.createElement('a');
    link.href = mailtoUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setSubmitted(true);
    setFormData({ name: '', email: '', projectType: '', budget: '', message: '' });
    setFieldErrors({});
  };

  const handleSendAnother = () => {
    setSubmitted(false);
  };

  return (
    <div className="bg-[var(--color-void)] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-[1440px] mx-auto px-[5vw]">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left Column */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <p className="font-mono text-[10px] text-[var(--color-gold)] tracking-[0.15em] mb-6">CONTACT</p>
                <h1 className="font-display italic text-5xl md:text-6xl text-[var(--color-ivory)] leading-tight mb-8">
                  Let&apos;s Create<br />Something<br />Extraordinary
                </h1>
                <div className="space-y-4 mb-10">
                  <p className="font-body text-[var(--color-chalk)]">
                    <span className="text-[var(--color-silver)]">Email:</span>{' '}
                    <a href="mailto:Justart1406@gmail.com" className="hover:text-[var(--color-gold)] transition-colors">
                      Justart1406@gmail.com
                    </a>
                  </p>
                  <p className="font-body text-[var(--color-chalk)]">
                    <span className="text-[var(--color-silver)]">Location:</span> Based in Lagos, Nigeria. Available worldwide.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 bg-[var(--color-graphite)] px-4 py-2 border border-[var(--color-steel)]">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-gold)] animate-pulse" />
                  <p className="font-mono text-[10px] text-[var(--color-chalk)]">Typically responds within 24 hours</p>
                </div>

                {/* Lagos Map */}
                <div className="mt-12 hidden lg:block overflow-hidden border border-[var(--color-steel)] opacity-60 hover:opacity-100 transition-opacity duration-500">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.63648042153!2d3.1191424844149247!3d6.548028243280463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1778150691529!5m2!1sen!2sng"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lagos, Nigeria"
                  />
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={0.2}>
                {submitted ? (
                  <div className="bg-[var(--color-graphite)] p-12 border border-[var(--color-steel)] text-center">
                    <div className="w-16 h-16 rounded-full bg-[var(--color-gold)] flex items-center justify-center mx-auto mb-6">
                      <Check size={28} className="text-[var(--color-void)]" />
                    </div>
                    <h3 className="font-display italic text-3xl text-[var(--color-ivory)] mb-4">
                      Email Client Opened
                    </h3>
                    <p className="font-body text-[var(--color-chalk)] mb-4">
                      Your message has been prepared. Hit send in your email app to deliver it.
                    </p>
                    <p className="font-mono text-[10px] text-[var(--color-silver)] tracking-[0.15em] mb-8">
                      DIDN&apos;T OPEN?{' '}
                      <a
                        href={`https://mail.google.com/mail/?view=cm&to=${encodeURIComponent(RECIPIENT_EMAIL)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[var(--color-gold)] hover:text-[var(--color-ivory)] transition-colors"
                      >
                        OPEN IN GMAIL
                      </a>
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                      <Link
                        to="/home"
                        className="font-nav text-sm text-[var(--color-gold)] tracking-[0.2em] hover:text-[var(--color-ivory)] transition-colors"
                      >
                        RETURN HOME
                      </Link>
                      <button
                        type="button"
                        onClick={handleSendAnother}
                        className="font-nav text-sm text-[var(--color-silver)] tracking-[0.2em] hover:text-[var(--color-ivory)] transition-colors"
                      >
                        SEND ANOTHER
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                    <div>
                      <label htmlFor="contact-name" className="font-mono text-[10px] text-[var(--color-silver)] tracking-[0.15em] mb-2 block">
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-[var(--color-graphite)] border border-[var(--color-steel)] px-4 py-3 font-body text-[var(--color-chalk)] placeholder:text-[var(--color-ash)] focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                        placeholder="Your name"
                        aria-invalid={!!fieldErrors.name}
                        aria-describedby={fieldErrors.name ? 'name-error' : undefined}
                      />
                      {fieldErrors.name && (
                        <p id="name-error" className="font-mono text-[10px] text-[var(--color-film-red)] mt-1">{fieldErrors.name}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="font-mono text-[10px] text-[var(--color-silver)] tracking-[0.15em] mb-2 block">
                        EMAIL *
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-[var(--color-graphite)] border border-[var(--color-steel)] px-4 py-3 font-body text-[var(--color-chalk)] placeholder:text-[var(--color-ash)] focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                        placeholder="your@email.com"
                        aria-invalid={!!fieldErrors.email}
                        aria-describedby={fieldErrors.email ? 'email-error' : undefined}
                      />
                      {fieldErrors.email && (
                        <p id="email-error" className="font-mono text-[10px] text-[var(--color-film-red)] mt-1">{fieldErrors.email}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact-project-type" className="font-mono text-[10px] text-[var(--color-silver)] tracking-[0.15em] mb-2 block">
                          PROJECT TYPE
                        </label>
                        <select
                          id="contact-project-type"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full bg-[var(--color-graphite)] border border-[var(--color-steel)] px-4 py-3 font-body text-[var(--color-chalk)] focus:border-[var(--color-gold)] focus:outline-none transition-colors appearance-none [&>option]:bg-[var(--color-graphite)] [&>option]:text-[var(--color-chalk)]"
                        >
                          <option value="">Select type</option>
                          <option value="Film Art Direction">Film Art Direction</option>
                          <option value="Production Design / Set Build">Production Design / Set Build</option>
                          <option value="Broadcast Studio Design">Broadcast Studio Design</option>
                          <option value="Art Commission / Painting">Art Commission / Painting</option>
                          <option value="Event / Premiere Design">Event / Premiere Design</option>
                          <option value="Workshop / Masterclass">Workshop / Masterclass</option>
                          <option value="Speaking / Industry Talk">Speaking / Industry Talk</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="contact-budget" className="font-mono text-[10px] text-[var(--color-silver)] tracking-[0.15em] mb-2 block">
                          BUDGET RANGE
                        </label>
                        <select
                          id="contact-budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full bg-[var(--color-graphite)] border border-[var(--color-steel)] px-4 py-3 font-body text-[var(--color-chalk)] focus:border-[var(--color-gold)] focus:outline-none transition-colors appearance-none [&>option]:bg-[var(--color-graphite)] [&>option]:text-[var(--color-chalk)]"
                        >
                          <option value="">Select range</option>
                          <option value="Under ₦5,000,000">Under ₦5,000,000</option>
                          <option value="₦5,000,000 – ₦15,000,000">₦5,000,000 – ₦15,000,000</option>
                          <option value="₦15,000,000 – ₦30,000,000">₦15,000,000 – ₦30,000,000</option>
                          <option value="₦30,000,000 – ₦50,000,000">₦30,000,000 – ₦50,000,000</option>
                          <option value="Over ₦50,000,000">Over ₦50,000,000</option>
                          <option value="To be discussed">To be discussed</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="font-mono text-[10px] text-[var(--color-silver)] tracking-[0.15em] mb-2 block">
                        MESSAGE *
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-[var(--color-graphite)] border border-[var(--color-steel)] px-4 py-3 font-body text-[var(--color-chalk)] placeholder:text-[var(--color-ash)] focus:border-[var(--color-gold)] focus:outline-none transition-colors resize-none"
                        placeholder="Tell me about your project..."
                        aria-invalid={!!fieldErrors.message}
                        aria-describedby={fieldErrors.message ? 'message-error' : undefined}
                      />
                      {fieldErrors.message && (
                        <p id="message-error" className="font-mono text-[10px] text-[var(--color-film-red)] mt-1">{fieldErrors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      className="w-full md:w-auto font-nav text-sm tracking-[0.2em] px-10 py-4 bg-[var(--color-gold)] text-[var(--color-void)] hover:bg-[var(--color-amber)] transition-all duration-300 flex items-center justify-center gap-3"
                      data-cursor-hover
                    >
                      <Send size={16} />
                      SEND MESSAGE
                    </button>
                  </form>
                )}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

