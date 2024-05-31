import { IChildren } from "../interfaces/children-interface";

function DynamicLayout({ children }: IChildren) {
  return (
    <div className="max-w-screen bg-purple-50">
      <div className="sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] 2xl:w-[1536px] mx-auto">
        {children}
      </div>
    </div>
  );
}

export default DynamicLayout;
