"use client";

import { motion } from "framer-motion";
import {
  Gift,
  MessageCircle,
  Moon,
  PackageOpen,
  Sparkles,
  Star,
} from "lucide-react";
import Image from "next/image";

const products = [
  {
    id: "custom",
    name: "Custom Order",
    price: "Rp 150.000 +",
    desc: "Parcel kustom yang dirancang sesuai keinginan Anda, kami siap membantu membuat parcel yang unik dan personal.",
    orderText: "Halo NAD Parcel, saya ingin memesan parcel kustom",
  },
  {
    id: "200k",
    name: "Thoughtful Gesture",
    price: "Rp 200.000",
    image: "/pricelist/Parcel 200k.jpeg",
    desc: "Bingkisan manis yang dirangkai dengan penuh perhatian, pilihan tepat untuk menyampaikan salam hangat kepada kerabat.",
  },
  {
    id: "300k",
    name: "Snack Enthusiast",
    price: "Rp 300.000",
    image: "/pricelist/Parcel 300k.jpeg",
    desc: "Koleksi sajian favorit yang dikurasi khusus, menghadirkan ragam kelezatan premium untuk memeriahkan suasana.",
  },
  {
    id: "400k",
    name: "The Hostess Set",
    price: "Rp 400.000",
    image: "/pricelist/Parcel 400k.jpeg",
    desc: "Parcel menawan yang dilengkapi dengan perlengkapan saji keramik cantik, dedikasi sempurna untuk tuan rumah.",
  },
  {
    id: "500k",
    name: "Elegant Tea Set",
    price: "Rp 500.000",
    image: "/pricelist/Parcel 500k.jpeg",
    desc: "Perpaduan sajian istimewa dengan set cangkir teh klasik, menciptakan pengalaman minum teh yang elegan di hari raya.",
  },
  {
    id: "600k",
    name: "Modern Dining Set",
    price: "Rp 600.000",
    image: "/pricelist/Parcel 600k.jpeg",
    desc: "Rangkaian parcel mewah yang disempurnakan dengan set perlengkapan makan berdesain modern dan estetis.",
  },
  {
    id: "650k",
    name: "Grand Celebration",
    price: "Rp 650.000",
    image: "/pricelist/Parcel 650k.jpeg",
    desc: "Bingkisan berskala besar dengan varian sajian terlengkap, dirancang khusus untuk memeriahkan perayaan keluarga.",
  },
  {
    id: "800k",
    name: "Platinum Tower",
    price: "Rp 800.000",
    image: "/pricelist/Parcel 800k.jpeg",
    desc: "Parcel bersusun megah yang melambangkan kemewahan sejati, persembahan paling prestisius dengan koleksi premium terlengkap.",
  },
];

const usps = [
  {
    title: "Desain Eksklusif",
    desc: "Rangkaian parcel yang ditata dengan penuh ketelitian, menghadirkan kesan mewah dan elegan untuk kerabat Anda.",
    icon: Sparkles,
  },
  {
    title: "Permanent Keepsakes",
    desc: "Dilengkapi dengan keramik dan glassware elegan yang dapat disimpan sebagai kenang-kenangan abadi.",
    icon: Gift,
  },
  {
    title: "Premium Festive Packaging",
    desc: "Dikemas mewah dengan sentuhan estetika Idul Fitri, siap menjadi parcel paling berkesan.",
    icon: PackageOpen,
  },
];

const phoneNumber = "6289699060906";

export default function Home() {
  const handleOrder = (name: string, price: string, orderText?: string) => {
    const message = orderText
      ? orderText
      : `Halo NAD Parcel, saya ingin memesan parcel ${name} seharga ${price}.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message,
    )}`;
    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-ivory text-emerald-900 font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/parcel/WhatsApp Image 2026-02-27 at 00.40.43 (1).jpeg"
            alt="NAD Parcel Parcel"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/30 bg-linear-to-t from-black/80 via-black/20 to-black/60"></div>
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-4 mb-6 text-gold-400"
          >
            <Star className="w-8 h-8 fill-current" />
            <Moon className="w-12 h-12 fill-current" />
            <Star className="w-8 h-8 fill-current" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold mb-6 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]"
          >
            NAD Parcel
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-xl md:text-2xl text-ivory mb-10 max-w-2xl drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] font-medium"
          >
            Sambut Hari Kemenangan dengan Hantaran Penuh Makna dari NAD Parcel.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            href="#katalog"
            className="bg-gold-400 text-emerald-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition-colors shadow-xl flex items-center gap-2"
          >
            Lihat Katalog
          </motion.a>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
              Keistimewaan Kami
            </h2>
            <div className="w-24 h-1 bg-gold-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {usps.map((usp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-ivory transition-colors duration-300"
              >
                <div className="w-20 h-20 bg-emerald-900 rounded-full flex items-center justify-center mb-6 text-gold-400 shadow-lg">
                  <usp.icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">
                  {usp.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{usp.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Catalog Grid */}
      <section id="katalog" className="py-24 px-4 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-emerald-900 mb-4">
              Katalog Parcel
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Pilih parcel terbaik untuk melengkapi momen kebersamaan di hari
              raya.
            </p>
            <div className="w-24 h-1 bg-gold-400 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-80 w-full overflow-hidden bg-gray-100">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                      <p className="text-gray-600">{product.name}</p>
                    </div>
                  )}
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-serif text-2xl font-bold text-emerald-900">
                      {product.name}
                    </h3>
                    <span className="bg-emerald-900 text-gold-400 px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                      {product.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-8 flex-1">{product.desc}</p>
                  <button
                    onClick={() =>
                      handleOrder(
                        product.name,
                        product.price,
                        product.orderText,
                      )
                    }
                    className="w-full cursor-pointer bg-emerald-900 text-white py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 group-hover:bg-gold-400 group-hover:text-emerald-900"
                  >
                    <MessageCircle size={20} />
                    Pesan Sekarang
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-900 text-white py-12 text-center relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-4 left-10">
            <Star className="w-16 h-16 fill-current" />
          </div>
          <div className="absolute bottom-10 right-10">
            <Moon className="w-24 h-24 fill-current" />
          </div>
          <div className="absolute top-20 right-20">
            <Star className="w-12 h-12 fill-current" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="font-serif text-3xl font-bold text-gold-400 mb-4">
            NAD Parcel
          </h2>
          <p className="text-emerald-100 mb-2">
            Menghadirkan kebahagiaan di setiap parcel.
          </p>
          <p className="text-gold-400 font-serif italic mb-8">
            &quot;Selamat Hari Raya Idul Fitri, Mohon Maaf Lahir dan Batin&quot;
          </p>
          <div className="border-t border-emerald-800 pt-8 text-emerald-300 text-sm">
            &copy; {new Date().getFullYear()} NAD Parcel. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}
