const Header = () => {
  return (
    <header className="w-full py-6 flex items-center relative px-2">
      <p className="flex-1 mx-1 md:text-center text-xl md:text-2xl font-medium text-background">
        Create New Account
      </p>
      <p className="absolute top-1/2 right-5 -translate-y-1/2 text-foreground">
        Contact us
      </p>
    </header>
  );
};

export default Header;
