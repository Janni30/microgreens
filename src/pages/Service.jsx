export default function Service() {
  return (
    <div className="bg-beigeBg min-h-screen py-20 text-textDark text-center px-4 md:px-0">
      <h2 className="text-3xl font-montserrat font-bold mb-8">Our Services</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <div className="p-6 bg-white shadow-md rounded-lg flex-1">
          <h3 className="font-montserrat font-bold mb-2">Home Delivery</h3>
          <p className="font-lato">Fresh microgreens delivered straight to your doorstep.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg flex-1">
          <h3 className="font-montserrat font-bold mb-2">Workshops</h3>
          <p className="font-lato">Learn to grow microgreens at home easily.</p>
        </div>
        <div className="p-6 bg-white shadow-md rounded-lg flex-1">
          <h3 className="font-montserrat font-bold mb-2">Café Tie-Ups</h3>
          <p className="font-lato">Supplying fresh microgreens to cafes and restaurants.</p>
        </div>
      </div>
    </div>
  );
}
