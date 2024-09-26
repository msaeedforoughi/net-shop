import Button from "../../../layoutComponents/button/Button";

function SubscribeSection() {
  return (
    <div className="col-span-2 md:pt-2 pt-8">
      <p className="font-bold uppercase">Subscribe to our newsletter</p>
      <p className="py-4">
        The latest updates,articlrs and resource send to your inbox weekly
      </p>
      <form action="" className="flex sm:flex-row flex-col">
        <input
          type="email"
          placeholder="Enter email address"
          className="w-full p-2 mr-4 rounded-md mb-4"
        />
        <Button className="p-2 mb-4">Subscribe</Button>
      </form>
    </div>
  );
}

export default SubscribeSection;
