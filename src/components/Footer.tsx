
const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-8 bg-accent">
      <div className="container mx-auto max-w-5xl px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {year} DevPortfolio. All rights reserved.
          </p>
          
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
