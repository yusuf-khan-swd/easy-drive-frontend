const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1 className="text-4xl font-bold">Common Layout</h1>
      <div className="min-h-screen">{children}</div>
    </div>
  );
};

export default CommonLayout;
