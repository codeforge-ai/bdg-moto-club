import { motion } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { MapPin, Clock, Phone, Mail } from "lucide-react";
import Navigation from "@/components/Navigation";
import { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Locations = () => {
  const headquarters = {
    lat: 44.4268,
    lng: 26.1025,
    name: "Sediul Central Club Moto",
    address: "Strada Motocicliștilor 15, București",
    phone: "+40 721 234 567",
    email: "contact@clubmoto.ro",
    schedule: {
      "Luni - Vineri": "18:00 - 22:00",
      "Sâmbătă": "10:00 - 18:00",
      "Duminică": "10:00 - 16:00"
    }
  };

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Locații <span className="text-primary">Club</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Găsește-ne sediul principal și descoperă unde ne întâlnim pentru aventurile noastre
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="moto-card p-0 overflow-hidden h-[500px]">
                <MapContainer
                  center={[headquarters.lat, headquarters.lng]}
                  zoom={15}
                  className="w-full h-full"
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[headquarters.lat, headquarters.lng]}>
                    <Popup>
                      <div className="text-center p-2">
                        <h3 className="font-bold text-lg mb-2">{headquarters.name}</h3>
                        <p className="text-sm text-muted-foreground">{headquarters.address}</p>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            </motion.div>

            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Address Card */}
              <div className="moto-card">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Adresa</h3>
                    <p className="text-muted-foreground">{headquarters.address}</p>
                  </div>
                </div>
              </div>

              {/* Schedule Card */}
              <div className="moto-card">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-3">Program</h3>
                    <div className="space-y-2">
                      {Object.entries(headquarters.schedule).map(([day, hours]) => (
                        <div key={day} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{day}:</span>
                          <span className="text-foreground font-medium">{hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="moto-card">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-foreground">Contact</h3>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <a href={`tel:${headquarters.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {headquarters.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href={`mailto:${headquarters.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                      {headquarters.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button className="w-full moto-button text-center">
                  Vino să ne cunoști!
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Cum să ne găsești
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Cu mașina</h3>
                <p className="text-muted-foreground">
                  Parcare gratuită disponibilă în spatele clădirii. Intrare prin Strada Secundară, 
                  la 50m de intersecția cu Strada Motocicliștilor.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-3">Cu transportul public</h3>
                <p className="text-muted-foreground">
                  Autobuzul 205 și 368, stația "Piața Centrală" (5 min de mers pe jos). 
                  Metroul M2, stația "Universitate" (10 min de mers pe jos).
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Locations;