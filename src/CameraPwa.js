import { useRef } from "react"
import Masque from "./Masque"

const CameraPwa = () => {
  const videoRef = useRef()
  const canvasRef = useRef()
  let video = videoRef.current

  navigator.mediaDevices.getUserMedia({
    video: { 
      facingMode: "environment",
      width: { min: 1024, ideal: 1280, max: 1920 },
      height: { min: 776, ideal: 720, max: 1080 }
   }
   }).then(stream => {
    video = videoRef.current;
    if(video) {
      video.srcObject = stream;
      video.play()
    }
  })

  const handleTakePhoto = () => {
    const ctx = canvasRef.current.getContext('2d')
    ctx?.drawImage(video, 0, 0, 250, 250 );
    console.log(canvasRef.current.toDataURL())
  }

   return (
    <div style={{position: 'relative'}}>
      <div style={{overflow: 'hidden', margin: '0 auto'}}>
        <Masque />
        <video style={{zIndex: 2, overflow:"hidden", height:'100vh', margin: '0 auto', position:'relative'}} ref={videoRef} autoPlay />
      </div>
      <canvas ref={canvasRef} style={{display: 'none'}}/>
      <button style={{position: 'absolute',bottom:'1rem', zIndex:'150', marginLeft:'50%', transform: 'translateX(-50%)', borderRadius:'50%', width:'80px', height:'80px', border:"none"}} onClick={handleTakePhoto}>Shoot !</button>
    </div>
   )
}

export default CameraPwa