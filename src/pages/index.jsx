import Header from "../components/Header";
import MainBody from "../components/MainBody";

export default function Index() {
  return (
    <>
      <Header
        title="home"
        bgImg=""
      />
      <MainBody>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32">
      <div>
        <h1 className="text-white font-extrabold lg:text-5xl xl:text-6xl">Hello!</h1>
        <h2 className="text-white font-extrabold lg:text-3xl xl:text-4xl">Make something wonderful</h2>
      </div>
    </div>
      </MainBody>
    </>
  );
}
