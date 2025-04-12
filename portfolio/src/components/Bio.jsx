import { BIO } from "../constants";

const Bio = () => {
  return (
    <div>
      <section
        className="flex flex-col justify-around gap-12 m-8 mx-10 sm:mx-20 pt-20"
        id="bio"
      >
        <h2 className="text-center text-3xl lg:text-4xl">Bio</h2>
        <div>
          {BIO.map((bio, index) => (
            <p key={index} className=" mb-4 text-lg lg:text-xl">
              {bio}
            </p>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Bio;
