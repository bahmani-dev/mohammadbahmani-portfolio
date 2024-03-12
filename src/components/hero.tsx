export default function Hero() {
  return (
    <main className="flex gap-10 container justify-center ">
      <div className=" py-12 px-4 sm:py-16 sm:px-6 lg:py-24 lg:px-8 flex items-center justify-center">
        <div className="max-w-4xl mx-auto lg:flex lg:items-center lg:justify-between">
          <div className="text-white lg:w-1/2 lg:pr-10">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4 text-black">
              Hello, I am Mohammad Bahmani. <br />
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl  my-6 text-gray-700">
              Your subtitle goes here. This is where you can add more detailed
              information about your hero section.
            </p>
          </div>

          <div className="mt-8 lg:mt-0 lg:w-1/2 lg:pl-10">
            <img
              className="mx-auto lg:mx-0 h-auto max-w-full rounded-lg "
              src="/images/pic.png"
              alt="Image Description"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
