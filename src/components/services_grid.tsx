const ServicesGrid = () => {
    return (
      <section className="py-10 bg-[transparent] grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center">
          <img
            src="/web_and_mobile.svg"
            alt="Web and Mobile Development"
            className="h-32 w-32 mb-4 object-contain"
          />
          <p className="text-lg font-semibold">Web and Mobile Development</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center">
          <img
            src="/design.svg"
            alt="Wireframes and Design"
            className="h-32 w-32 mb-4 object-contain"
          />
          <p className="text-lg font-semibold">Wireframes and Design</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center">
          <img
            src="/data_analytics.svg"
            alt="Data Analytics"
            className="h-32 w-32 mb-4 object-contain"
          />
          <p className="text-lg font-semibold">Data Analytics</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center">
          <img
            src="/cloud_hosting.svg"
            alt="Cloud Migration"
            className="h-32 w-32 mb-4 object-contain"
          />
          <p className="text-lg font-semibold">Cloud Migration</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center">
          <img
            src="/e-commerce.svg"
            alt="e-commerce"
            className="h-32 w-32 mb-4 object-contain"
          />
          <p className="text-lg font-semibold">e-commerce</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center">
          <img
            src="/testing.svg"
            alt="Quality Assurance"
            className="h-32 w-32 mb-4 object-contain"
          />
          <p className="text-lg font-semibold">Quality Assurance</p>
        </div>
      </section>
    );
  };
  
  export default ServicesGrid;
  