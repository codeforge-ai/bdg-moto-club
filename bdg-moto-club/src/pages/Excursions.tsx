import { motion } from "framer-motion";
import { Parallax } from "react-parallax";
import { Calendar, MapPin, Users, Clock, Star } from "lucide-react";
import Navigation from "@/components/Navigation";
import ExcursionsMap from "@/components/ExcursionsMap";
import excursionRoute from "@/assets/excursion-route.jpg";
import heroImage from "@/assets/hero-motorcycle.jpg";

const Excursions = () => {
  // Sample route coordinates (Bucharest to Brașov)
  const sampleRoute: [number, number][] = [
    [44.4268, 26.1025], // Bucharest
    [44.9778, 26.0548], // Ploiești  
    [45.2983, 25.5461], // Predeal
    [45.6427, 25.5887]  // Brașov
  ];

  const upcomingTrips = [
    {
      title: "Transfăgărășan Adventure",
      date: "15 Octombrie 2024",
      duration: "3 zile",
      difficulty: "Mediu",
      participants: "12/15",
      image: excursionRoute,
      description: "Explorează cel mai frumos drum din România prin Munții Carpați"
    },
    {
      title: "Transalpina Experience", 
      date: "22 Octombrie 2024",
      duration: "2 zile",
      difficulty: "Avansat",
      participants: "8/12",
      image: excursionRoute,
      description: "Drumul Regilor te așteaptă cu peisaje spectaculoase"
    },
    {
      title: "Dunărea de Jos Tour",
      date: "5 Noiembrie 2024", 
      duration: "1 zi",
      difficulty: "Ușor",
      participants: "18/20",
      image: excursionRoute,
      description: "Relaxant tur către Delta Dunării și Marea Neagră"
    }
  ];

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <Parallax
        blur={{ min: -5, max: 5 }}
        bgImage={heroImage}
        bgImageAlt="Excursii Club Moto"
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
              Excursii & Ieșiri
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Descoperă cele mai frumoase drumuri din România și Europa
            </p>
          </motion.div>
        </div>
      </Parallax>

      {/* Upcoming Trips */}
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
              Excursii <span className="text-primary">Planificate</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Alătură-te aventurilor noastre viitoare
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingTrips.map((trip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="moto-card group overflow-hidden"
              >
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={trip.image} 
                    alt={trip.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {trip.difficulty}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">{trip.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{trip.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    {trip.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2 text-primary" />
                    {trip.duration}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="w-4 h-4 mr-2 text-primary" />
                    {trip.participants}
                  </div>
                </div>
                
                <button className="w-full moto-button">
                  Înscrie-te
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Experiențe <span className="text-primary">Memorabile</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Vezi un rezumat din aventurile noastre recente
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="moto-card p-0 overflow-hidden">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <p className="text-muted-foreground">
                    Video cu ultimele noastre aventuri - în curând disponibil
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Harta <span className="text-primary">Traseelor</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explorează rutele pe care le-am parcurs
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="moto-card p-0 overflow-hidden"
          >
            <ExcursionsMap route={sampleRoute} />
            
            <div className="p-6 bg-muted/50">
              <h3 className="text-lg font-bold text-foreground mb-2">
                Traseu exemplu: București → Brașov
              </h3>
              <p className="text-muted-foreground text-sm">
                Unul din traseele noastre populare prin Munții Carpați. 
                Distanță: ~170km, Timp estimat: 3-4 ore cu opriri pentru fotografii.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Excursii Organizate", icon: <MapPin className="w-8 h-8" /> },
              { number: "25K+", label: "Kilometri Parcurși", icon: <Star className="w-8 h-8" /> },
              { number: "150+", label: "Participări", icon: <Users className="w-8 h-8" /> },
              { number: "8", label: "Țări Vizitate", icon: <Calendar className="w-8 h-8" /> }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Excursions;