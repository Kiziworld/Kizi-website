import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans">
      <nav className="flex items-center justify-between p-4 border-b border-gold">
        <div className="text-2xl font-bold text-gold">Kizi</div>
        <div className="space-x-4">
          <a href="#about" className="hover:text-gold">Hakkımızda</a>
          <a href="#products" className="hover:text-gold">Ürünler</a>
          <a href="#blog" className="hover:text-gold">Blog</a>
          <a href="#contact" className="hover:text-gold">İletişim</a>
        </div>
      </nav>

      <motion.section
        className="flex flex-col items-center justify-center text-center py-32"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold text-gold mb-4">Kizi Dünyasına Hoş Geldiniz</h1>
        <p className="text-xl max-w-xl">Lüksü, zarafeti ve sadeliği bir araya getiren ev dekorasyon ürünleriyle tanışın.</p>
      </motion.section>

      <footer className="text-center py-6 border-t border-gold text-sm text-gray-400">
        © 2025 Kizi. Tüm hakları saklıdır.
      </footer>
    </main>
  );
}
