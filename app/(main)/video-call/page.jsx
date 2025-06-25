import VideoCall from "./video-call-ui";

export default async function VideoCallPage({ searchParams }) {
  const { sessionId, token } =  searchParams;

  return <VideoCall sessionId={sessionId} token={token} />;
}