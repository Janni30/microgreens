export default function Contact() {
  return (
    <div className="bg-beigeBg min-h-screen py-20 text-textDark text-center px-4 md:px-0">
      <h2 className="text-3xl font-montserrat font-bold mb-4">Contact Us</h2>
      <p className="font-lato mb-6">
        Have questions or want to place an order? Reach out to us!
      </p>
      <form className="max-w-xl mx-auto flex flex-col gap-4">
        <input className="p-3 rounded border" type="text" placeholder="Name" />
        <input className="p-3 rounded border" type="email" placeholder="Email" />
        <textarea className="p-3 rounded border" placeholder="Message"></textarea>
        <button className="bg-primaryGreen text-white px-6 py-3 rounded-lg font-lato hover:bg-green-600 transition-colors">
          Send Message
        </button>
      </form>
    </div>
  );
}
