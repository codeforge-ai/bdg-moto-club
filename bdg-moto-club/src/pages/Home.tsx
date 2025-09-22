import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import { ArrowRight, MapPin, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-motorcycle.jpg";
import Navigation from "@/components/Navigation";

const Home = () => {
  return (
    <>
      <Navigation />
      
      {/* Hero Section with Parallax */}
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={heroImage}
        bgImageAlt="Club Moto Hero"
        strength={-200}
        className="hero-section"
      >
        <div className="parallax-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <h1 className="hero-title mb-6">
              Club Moto
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-xl md:text-2xl mb-8 text-white/90 font-medium max-w-2xl mx-auto"
            >
              Alătură-te comunității pasionaților de motociclete. Aventură, prietenie și drumuri de neuitat.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/inscriere" className="moto-button group">
                Înscrie-te acum
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform inline" />
              </Link>
              <Link
                to="/despre-noi"
                className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-foreground rounded-lg font-semibold transition-all duration-300"
              >
                Află mai multe
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </Parallax>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              De ce să te alături <span className="text-primary">Club Moto?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descoperă aventurile pe două roți alături de o comunitate pasionată
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="moto-card text-center group"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Excursii Organizate</h3>
              <p className="text-muted-foreground">
                Explorează cele mai frumoase trasee din țară și din Europa într-un cadru sigur și organizat
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="moto-card text-center group"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Comunitate Activă</h3>
              <p className="text-muted-foreground">
                Întâlnește oameni cu aceeași pasiune și creează prietenii de durată în lumea moto
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="moto-card text-center group"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Evenimente Regulate</h3>
              <p className="text-muted-foreground">
                Participă la întâlniri săptămânale, competiții și evenimente speciale pe tot parcursul anului
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/inscriere" className="moto-button inline-flex items-center">
              Începe Aventura
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;