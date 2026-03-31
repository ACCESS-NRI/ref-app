export function NavbarLogo() {
  return (
    <div className="flex items-center justify-between gap-2 bg-white rounded p-1 hover:shadow-md transition-shadow">
      <img
        src="/logos/ACCESS-NRI/access_logo_rgb.svg"
        alt="ACCESS-NRI"
        className="h-10 min-w-12"
      />
      <h1 className="font-display font-medium text-md hidden md:inline text-black">
        ACCESS-NRI <br />
        REF
      </h1>
    </div>
  );
}
