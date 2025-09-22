import { motion } from "framer-motion";
import { useState } from "react";
import { Check, Star, Users, Calendar, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useToast } from "@/hooks/use-toast";

const Registration = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    motorcycle: "",
    experience: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Cererea ta a fost trimisă!",
      description: "Îți vom răspunde în cel mult 24 de ore.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      motorcycle: "",
      experience: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const benefits = [
    "Excursii organizate lunar în locații spectaculoase",
    "Comunitate activă și prietenoasă de motocicliști",
    "Workshopuri de mentenanță și siguranță rutieră",
    "Reduceri la magazinele partenere de echipamente",
    "Evenimente sociale și întâlniri regulate",
    "Suport tehnic și consiliere pentru începători",
    "Acces la trasee private și evenimente exclusive",
    "Asigurare de grup pentru excursiile organizate"
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-background via-primary/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Alătură-te <span className="text-primary">Club Moto</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Începe-ți aventura pe două roți alături de cea mai activă comunitate de motocicliști
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="moto-card h-fit">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Beneficiile <span className="text-primary">Membrilor</span>
              </h2>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <p className="text-muted-foreground">{benefit}</p>
                  </motion.div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-muted">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">150+</div>
                  <div className="text-sm text-muted-foreground">Membri</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Excursii</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">8</div>
                  <div className="text-sm text-muted-foreground">Ani</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Registration Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="moto-card">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Formular de <span className="text-primary">Înscriere</span>
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Nume complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                    placeholder="Numele și prenumele"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                    placeholder="adresa@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Telefon *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                    placeholder="+40 7xx xxx xxx"
                  />
                </div>

                <div>
                  <label htmlFor="motorcycle" className="block text-sm font-medium text-foreground mb-2">
                    Motocicletă *
                  </label>
                  <input
                    type="text"
                    id="motorcycle"
                    name="motorcycle"
                    required
                    value={formData.motorcycle}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                    placeholder="Marca, model, anul (ex: Honda CBR 600RR 2020)"
                  />
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-foreground mb-2">
                    Experiență
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  >
                    <option value="">Selectează nivelul de experiență</option>
                    <option value="incepator">Începător (0-1 an)</option>
                    <option value="intermediar">Intermediar (1-5 ani)</option>
                    <option value="avansat">Avansat (5+ ani)</option>
                    <option value="expert">Expert (10+ ani)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Mesaj
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-muted rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground resize-none"
                    placeholder="Spune-ne de ce vrei să te alături clubului nostru..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full moto-button flex items-center justify-center group"
                >
                  Trimite cererea
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <p className="text-sm text-muted-foreground text-center">
                  Îți vom răspunde în cel mult 24 de ore cu următorii pași.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Gata să începi aventura?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Alătură-te comunității noastre și descoperă cele mai frumoase drumuri din țară!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-sm">
                <Users className="w-5 h-5" />
                <span>Comunitate activă</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Calendar className="w-5 h-5" />
                <span>Evenimente regulate</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Star className="w-5 h-5" />
                <span>Experiențe de neuitat</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Registration;