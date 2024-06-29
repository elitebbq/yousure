const YouTubeBackground = ({ videoId }: { videoId: string }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
      <iframe
        className="w-full h-full absolute top-0 left-0"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&modestbranding=1`}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="YouTube video background"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
    </div>
  );
};

export default YouTubeBackground;
