import Image from "next/image";

const links = [
  { label: "Portfolio", href: "https://nextjs-portfolio-eta-opal.vercel.app/" },
  { label: "GitHub", href: "https://github.com/rodriguezr1016" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/rene-rodriguez-570648329/" },
  { label: "Resume", href: "https://nextjs-portfolio-eta-opal.vercel.app/Resume" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-12 text-zinc-950">
      <section className="mx-auto flex w-full max-w-md flex-col items-center">
        <Image
          src="/profile.JPG"
          alt="Profile photo"
          width={112}
          height={112}
          className="h-28 w-28 rounded-full object-cover"
          priority
        />

        <h1 className="mt-6 text-2xl font-semibold">Rene Rodriguez</h1>
        <p className="mt-1 text-sm text-zinc-600">Softare Developer</p>
        <div className="flex flex-row items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none">
  <path d="M12 12C12.55 12 13.0208 11.8042 13.4125 11.4125C13.8042 11.0208 14 10.55 14 10C14 9.45 13.8042 8.97917 13.4125 8.5875C13.0208 8.19583 12.55 8 12 8C11.45 8 10.9792 8.19583 10.5875 8.5875C10.1958 8.97917 10 9.45 10 10C10 10.55 10.1958 11.0208 10.5875 11.4125C10.9792 11.8042 11.45 12 12 12ZM12 19.35C14.0333 17.4833 15.5417 15.7875 16.525 14.2625C17.5083 12.7375 18 11.3833 18 10.2C18 8.38333 17.4208 6.89583 16.2625 5.7375C15.1042 4.57917 13.6833 4 12 4C10.3167 4 8.89583 4.57917 7.7375 5.7375C6.57917 6.89583 6 8.38333 6 10.2C6 11.3833 6.49167 12.7375 7.475 14.2625C8.45833 15.7875 9.96667 17.4833 12 19.35ZM12 22C9.31667 19.7167 7.3125 17.5958 5.9875 15.6375C4.6625 13.6792 4 11.8667 4 10.2C4 7.7 4.80417 5.70833 6.4125 4.225C8.02083 2.74167 9.88333 2 12 2C14.1167 2 15.9792 2.74167 17.5875 4.225C19.1958 5.70833 20 7.7 20 10.2C20 11.8667 19.3375 13.6792 18.0125 15.6375C16.6875 17.5958 14.6833 19.7167 12 22Z" fill="#1D1B20"/>
</svg>
<p>Modesto, CA</p>
        </div>

        <div className="mt-8 flex w-full flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel= "noopener noreferrer"
              className="w-full rounded-md border border-zinc-200 bg-white px-5 py-4 text-center text-sm font-medium transition hover:border-zinc-300 hover:bg-zinc-100"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
