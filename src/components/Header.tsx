const Header = () => {
  return (
    <header className="w-full py-6 flex items-center relative">
      <p className="flex-1 mx-1 md:text-center text-2xl font-medium text-background">
        Create New Account
      </p>
      <p className="absolute top-1/2 right-0 -translate-y-1/2 text-foreground">
        Contact us
      </p>
    </header>
  );
};

export default Header;
