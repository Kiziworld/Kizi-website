// tailwind.config.js module.exports = { content: [ "./pages//.{js,ts,jsx,tsx}", "./components//.{js,ts,jsx,tsx}" ], theme: { extend: { colors: { gold: '#DAAF37', black: '#000000' } } }, plugins: [] };

// postcss.config.js module.exports = { plugins: { tailwindcss: {}, autoprefixer: {}, }, };

// tsconfig.json { "compilerOptions": { "target": "es5", "lib": ["dom", "dom.iterable", "esnext"], "allowJs": true, "skipLibCheck": true, "strict": false, "forceConsistentCasingInFileNames": true, "noEmit": true, "esModuleInterop": true, "module": "esnext", "moduleResolution": "node", "resolveJsonModule": true, "isolatedModules": true, "jsx": "preserve" }, "include": ["next-env.d.ts", "/.ts", "/.tsx"], "exclude": ["node_modules"] }

// package.json (kısaltılmış) { "name": "kizi-website", "version": "1.0.0", "scripts": { "dev": "next dev", "build": "next build", "start": "next start" }, "dependencies": { "autoprefixer": "^10.4.0", "next": "13.4.0", "react": "18.2.0", "react-dom": "18.2.0", "tailwindcss": "^3.2.0", "typescript": "^4.9.4" } }

// styles/globals.css @tailwind base; @tailwind components; @tailwind utilities;

:root { --gold: #DAAF37; }

.text-gold { color: var(--gold); } .bg-gold { background-color: var(--gold); }

// components/Navbar.tsx export default function Navbar() { return ( <nav className="bg-gold text-black p-4"> <ul className="flex justify-around"> <li><a href="/">Ana Sayfa</a></li> <li><a href="/about">Hakkımızda</a></li> <li><a href="/blog">Blog</a></li> </ul> </nav> ); }

// pages/index.tsx import Navbar from "../components/Navbar"; export default function Home() { return ( <div className="bg-black text-gold min-h-screen"> <Navbar /> <main className="p-10 max-w-3xl mx-auto"> <h1 className="text-4xl font-bold mb-6">Kizi’ye Hoşgeldiniz</h1> <p>Ev dekorasyonunda stilin buluşma noktası.</p> </main> </div> ); }

// pages/about.tsx import Navbar from "../components/Navbar"; export default function About() { return ( <div className="bg-black text-gold min-h-screen"> <Navbar /> <main className="p-10 max-w-3xl mx-auto"> <h2 className="text-3xl font-bold mb-6">Hakkımızda</h2> <p>Kizi, yaşam alanlarınıza zarafet ve şıklık katmak için kuruldu.</p> </main> </div> ); }

// pages/blog.tsx import Navbar from "../components/Navbar"; export default function Blog() { return ( <div className="bg-black text-gold min-h-screen"> <Navbar /> <main className="p-10 max-w-3xl mx-auto"> <h2 className="text-3xl font-bold mb-6">Blog</h2> <p>Markamız, ilham kaynaklarımız ve yaşam tarzı üzerine yazılar burada olacak.</p> </main> </div> ); }
