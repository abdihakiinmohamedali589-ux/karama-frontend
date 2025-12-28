import { MapPin, Phone, Mail, User, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useState, useEffect } from 'react';
import { submitContactForm, type ContactFormData } from '../lib/api';
import CountUpNumber from './CountUpNumber';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Auto-dismiss success message after 5 seconds
  useEffect(() => {
    if (submitStatus.type === 'success') {
      const timer = setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [submitStatus.type]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const result = await submitContactForm(formData);

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully. We will get back to you soon.',
        });
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Failed to send message. Please try again later.',
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-amber-500">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your vision to life? Contact us today
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start bg-slate-800 p-6 rounded-lg border border-slate-700">
                  <MapPin className="w-6 h-6 text-amber-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Location</h4>
                    <p className="text-gray-300">Mogadisho, Somalia</p>
                  </div>
                </div>

                <div className="flex items-start bg-slate-800 p-6 rounded-lg border border-slate-700">
                  <Phone className="w-6 h-6 text-amber-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a href="tel:0618831035" className="text-gray-300 hover:text-amber-500 transition-colors">
                      061 883 1035
                    </a>
                  </div>
                </div>

                <div className="flex items-start bg-slate-800 p-6 rounded-lg border border-slate-700">
                  <Mail className="w-6 h-6 text-amber-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:karaama.production1@gmail.com"
                      className="text-gray-300 hover:text-amber-500 transition-colors"
                    >
                      karaama.production1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start bg-slate-800 p-6 rounded-lg border border-slate-700">
                  <User className="w-6 h-6 text-amber-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">CEO / Founder</h4>
                    <p className="text-gray-300">Abdisalan Karaama</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-500/10 to-blue-500/10 p-8 rounded-lg border border-amber-500/20">
              <h3 className="text-2xl font-bold mb-4">Company Details</h3>
              <div className="space-y-3 text-gray-300">
                <p>
                  <span className="text-amber-500 font-semibold">Established:</span>{' '}
                  <CountUpNumber end={2018} />
                </p>
                <p>
                  <span className="text-amber-500 font-semibold">Employees:</span>{' '}
                  <CountUpNumber end={12} />
                </p>
                <p><span className="text-amber-500 font-semibold">Structure:</span> Registered Corporation</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 p-8 rounded-lg border border-slate-700">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-amber-500 transition-colors"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:border-amber-500 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg flex items-start gap-3 ${
                    submitStatus.type === 'success'
                      ? 'bg-green-500/10 border border-green-500/20'
                      : 'bg-red-500/10 border border-red-500/20'
                  }`}
                >
                  {submitStatus.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                  )}
                  <p
                    className={`text-sm ${
                      submitStatus.type === 'success' ? 'text-green-400' : 'text-red-400'
                    }`}
                  >
                    {submitStatus.message}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-amber-500/50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 disabled:transform-none flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-slate-800 p-8 rounded-lg border border-slate-700 inline-block">
            <p className="text-2xl font-bold mb-2">Thank You</p>
            <p className="text-gray-300">
              Thank you for choosing Karaama Production. We look forward to supporting
              <br />
              your events and brand with creativity and professionalism.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
