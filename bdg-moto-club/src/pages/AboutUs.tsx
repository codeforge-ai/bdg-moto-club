import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import { Users, Award, Heart, Bike } from "lucide-react";
import Navigation from "@/components/Navigation";
import clubMembers from "@/assets/club-members.jpg";
import heroImage from "@/assets/hero-motorcycle.jpg";

const AboutUs = () => {
  const values = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Comunitate",
      description: "Construim relații autentice bazate pe pasiunea comună pentru motociclete"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excelență",
      description: "Ne străduim să oferim cele mai bune experiențe și servicii membrilor noștri"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Pasiune",
      description: "Trăim și respirăm motociclismul în toate formele sale"
    },
    {
      icon: <Bike className="w-8 h-8" />,
      title: "Siguranță",
      description: "Promovăm conduita defensivă și responsabilă pe toate drumurile"
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <Parallax
        blur={{ min: -5, max: 5 }}
        bgImage={heroImage}
        bgImageAlt="Despre Club Moto"
        strength={-150}
        className="h-[70vh] flex items-center justify-center relative"
      >
        <div className="parallax-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary">
              Despre Noi
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Povestea unei comunități unite de pasiunea pentru motociclete
            </p>
          </motion.div>
        </div>
      </Parallax>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Cine <span className="text-primary">Suntem</span>
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Club Moto a fost înființat în 2015 de un grup de pasionați care și-au dorit să 
                  exploreze frumusețile țării pe două roți. Ce a început ca o mică grupare de prieteni 
                  s-a transformat într-una dintre cele mai active comunități moto din regiune.
                </p>
                <p>
                  Astăzi, numărăm peste 150 de membri activi, de la începători până la motocicliști 
                  experimentați, toți uniți de aceeași pasiune pentru aventură și libertatea pe care 
                  o oferă motocicleta.
                </p>
                <p>
                  Organizăm excursii regulate, evenimente de socializare și susținem educația 
                  rutieră responsabilă în comunitatea motocicliștilor.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={clubMembers} 
                  alt="Membrii Club Moto"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-6 py-4 rounded-xl shadow-lg">
                <p className="text-2xl font-bold">150+</p>
                <p className="text-sm">Membri Activi</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Valorile <span className="text-primary">Noastre</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Principiile care ne ghidează în fiecare aventură
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="moto-card text-center group"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "150+", label: "Membri Activi" },
              { number: "50+", label: "Excursii Organizate" },
              { number: "8", label: "Ani de Experiență" },
              { number: "25K+", label: "Kilometri Parcurși" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;