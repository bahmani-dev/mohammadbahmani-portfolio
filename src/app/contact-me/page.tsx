import Button from "@/components/button";
import Header from "@/components/header";
import { Contacts, Socials } from "@/constants";
const ContactPage = () => {
  return (
    <div className="w-full flex flex-col items-center bg-[#111] gap-10 min-h-screen">
      <h1 className="uppercase text-[52px] max-md:text-[42px] font-bold text-white mt-10 relative z-10">
        get in <span className="text-yellow-500">touch</span>
      </h1>
      <h2 className="uppercase absolute text-[#c4c4c4] mt-2 text-[96px] max-md:text-[72px] max-md:mt-4 z-0 font-bold opacity-10">
        contact
      </h2>
      <div className="lg:self-end absolute lg:h-[100%]  w-full flex justify-center lg:pr-5">
        <Header></Header>
      </div>
      <div className=" mt-5  container mb-[150px] ">
        <div className="grid grid-cols-12 ">
          <div className="lg:col-span-4 col-span-12 p-4">
            <h3 className="uppercase text-[22px] font-bold text-white mb-5">
              Dont be shy!
            </h3>
            <p className="text-white ">
              Feel free to get in touch with me. I am always open to discussing
              new projects, creative ideas or opportunities to be part of your
              visions
            </p>
            {Contacts.map((contact) => (
              <div
                className="flex gap-5 text-white mt-8 items-center"
                key={contact.id}
              >
                <contact.icon className="w-[40px] h-[40px] text-yellow-500" />
                <div>
                  <h4 className="uppercase font-light text-base mb-1">
                    {contact.title}
                  </h4>
                  <p className="font-bold text-sm">{contact.text}</p>
                </div>
              </div>
            ))}
            <div className="flex flex-row gap-5 mt-8">
              {Socials.map((social) => (
                <div
                  className=" text-white bg-[#2b2b2b]  items-center justify-center p-2 rounded-full w-10"
                  key={social.name}
                >
                  <img src={social.src} alt="icon" className="" />
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-8 col-span-12 px-10 mt-4 max-md:mb-10">
            <form className=" ">
              <div className="mb-4">
                <div className="flex mb-4">
                  <div className="w-1/2 mr-2">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="rounded-3xl w-full px-4 py-3 bg-[#252525]"
                    />
                  </div>
                  <div className="w-1/2 ml-2">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="rounded-3xl w-full px-4 py-3 bg-[#252525]"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Your Subject"
                    className="rounded-3xl w-full px-4 py-3 bg-[#252525]"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    placeholder="Your Message"
                    className="rounded-3xl w-full px-4 py-3 bg-[#252525]"
                    rows={10}
                  />
                </div>
                <div className="mt-5">
                  <Button text="send message"></Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
