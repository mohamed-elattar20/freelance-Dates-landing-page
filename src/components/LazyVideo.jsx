import vid from "../assets/vids/pexels-rodnae-productions-7157375 (1080p).mp4";

const LazyVideo = () => {
  return (
    <>
      <video className="d-block w-100" controls>
        <source src={vid} />
      </video>
    </>
  );
};

export default LazyVideo;
