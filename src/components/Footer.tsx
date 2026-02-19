import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  
  const socialLinks = [
    { Icon: Github, href: "https://github.com/sayali-borse" },
    { Icon: Linkedin, href: "https://www.linkedin.com/in/sayali-borse0" },
    { Icon: Twitter, href: "https://x.com/sayaliborse1" },
  ];

  return (
   
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground text-sm">
          © 2025 <span className="text-gradient-pink font-semibold">{"<Code/Well>"}</span>. All rights reserved.
        </p>
        <div className="flex gap-4">
          {socialLinks.map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
