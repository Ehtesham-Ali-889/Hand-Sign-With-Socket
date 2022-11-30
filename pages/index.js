import React, { useRef, useState, useEffect } from "react"
import * as tf from "@tensorflow/tfjs"
import * as handpose from "@tensorflow-models/handpose"
import Webcam from "react-webcam"
import { drawHand } from "../components/handposeutil"
import * as fp from "fingerpose"
import Handsigns from "../components/handsigns"

import {CopyToClipboard} from 'react-copy-to-clipboard';

import {
  Text,
  Heading,
  Button,
  Image,
  Stack,
  Container,
  Box,
  VStack,
  ChakraProvider,
  Alert,
  Icon,
  Input
} from "@chakra-ui/react"

import {CopyIcon} from 'react-icons'
import { IoCopy } from "react-icons/io5"
import { Signimage, Signpass } from "../components/handimage"

import About from "../components/about"
import Metatags from "../components/metatags"

// import "../styles/App.css"

// import "@tensorflow/tfjs-backend-webgl"

import { RiCameraFill, RiCameraOffFill } from "react-icons/ri"




export default function Home() {

  const [addcall,setAddCall]=useState('Add Call')

  const [callcode,setCallCode]=useState('1234')
  
  const webcamRef = useRef(null)
  const canvasRef = useRef(null)

  const [camState, setCamState] = useState("on")

  const [sign, setSign] = useState(null)
  const [string, setString] = useState([])
  // let string = '';

  let signList = []
  let currentSign = 0

  let gamestate = "started"

  // let net;

  async function runHandpose() {
    const net = await handpose.load()
    _signList()

    // window.requestAnimationFrame(loop);

    setInterval(() => {
      detect(net)
    }, 150)
  }

  function _signList() {
    signList = generateSigns()
  }

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[a[i], a[j]] = [a[j], a[i]]
    }
    return a
  }

  function generateSigns() {
    const password = shuffle(Signpass)
    return password
  }

  async function detect(net) {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video
      const videoWidth = webcamRef.current.video.videoWidth
      const videoHeight = webcamRef.current.video.videoHeight

      // Set video width
      webcamRef.current.video.width = videoWidth
      webcamRef.current.video.height = videoHeight

      // Set canvas height and width
      canvasRef.current.width = videoWidth
      canvasRef.current.height = videoHeight

      // Make Detections
      const hand = await net.estimateHands(video)

      if (hand.length > 0) {
        //loading the fingerpose model
        const GE = new fp.GestureEstimator([
          fp.Gestures.ThumbsUpGesture,
          Handsigns.hiSign,
          Handsigns.GoodMorningSign,
          Handsigns.CoughSign,
          Handsigns.NoseSign,
          Handsigns.IhaveSign
        ])

        const estimatedGestures = await GE.estimate(hand[0].landmarks, 6.5)
        // document.querySelector('.pose-data').innerHTML =JSON.stringify(estimatedGestures.poseData, null, 2);

        if (gamestate === "started") {
          document.querySelector("#app-title").innerText =
            "Make a 👍 gesture with your hand to start"
        }

        if (
          estimatedGestures.gestures !== undefined &&
          estimatedGestures.gestures.length > 0
        ) {
          const confidence = estimatedGestures.gestures.map(p => p.confidence)
          const maxConfidence = confidence.indexOf(
            Math.max.apply(undefined, confidence)
          )

          //setting up game state, looking for thumb emoji
          if (
            estimatedGestures.gestures[maxConfidence].name === "thumbs_up" &&
            gamestate !== "played"
          ) {
            _signList()
            gamestate = "played"
            document.getElementById("emojimage").classList.add("play")
            document.querySelector(".tutor-text").innerText =
              "make a hand gesture based on letter shown below"
          } else if (gamestate === "played") {
            document.querySelector("#app-title").innerText = ""

            //looping the sign list
            if (currentSign === signList.length) {
              _signList()
              currentSign = 0
              return
            }

            // console.log(signList[currentSign].src.src)

            //game play state

            if (
              typeof signList[currentSign].src.src === "string" ||
              signList[currentSign].src.src instanceof String
            ) {
              document
                .getElementById("emojimage")
                .setAttribute("src", signList[currentSign].src.src)
              if (
                signList[currentSign].alt ===
                estimatedGestures.gestures[maxConfidence].name
              ) {
                currentSign++
              }
              setSign(estimatedGestures.gestures[maxConfidence].name)
              const mysign=estimatedGestures.gestures[maxConfidence].name
              console.log('mysign',mysign)
              if (!string.includes(mysign)) {
                string.push(mysign)
              }
              
              // string+=estimatedGestures.gestures[maxConfidence].name;
              console.log("Sentence",string)
              console.log("Sign",estimatedGestures.gestures[maxConfidence].name)
            }
          } else if (gamestate === "finished") {
            return
          }
        }
      }
      // Draw hand lines
      const ctx = canvasRef.current.getContext("2d")
      drawHand(hand, ctx)
    }
  }

  //   if (sign) {
  //     console.log(sign, Signimage[sign])
  //   }

  useEffect(() => {
    runHandpose()
  }, [])

  function updatecall(){
    if(addcall==='Add Call'){
      setAddCall('Stop Call')
    }
    else{
      setAddCall('Add Call')
    }
  }

  function turnOffCamera() {
    if (camState === "on") {
      setCamState("off")
    } else {
      setCamState("on")
    }
  }

  return (
    <ChakraProvider>
      <Metatags />
      <Box bgColor="#5784BA">
      
        <Container centerContent maxW="xl" height="100vh" pt="0" pb="0">
          <VStack spacing={4} align="center">
            <Box h="20px"></Box>
            <Heading
              as="h3"
              size="md"
              className="tutor-text"
              color="white"
              textAlign="center"
            ></Heading>
            <Box h="20px"></Box>
          </VStack>

          <Heading
            as="h1"
            size="lg"
            id="app-title"
            color="white"
            textAlign="center"
          >
            🧙‍♀️ Loading the Magic 🧙‍♂️
          </Heading>

          <Box id="webcam-container" >
            {camState === "on" ? (
              <Webcam id="webcam" ref={webcamRef}  />
            ) : (
              <div id="webcam" background="black"></div>
            )}

            {sign ? (
              <div
                style={{
                  position: "absolute",
                  marginLeft: "auto",
                  marginRight: "auto",
                  right: "calc(50% - 50px)",
                  bottom: 100,
                  textAlign: "-webkit-center",
                }}
              >
                <Text color="white" fontSize="sm" mb={1}>
                  detected gestures
                </Text>
                <img
                  alt="signImage"
                  src={
                    Signimage[sign]?.src
                      ? Signimage[sign].src
                      : "/loveyou_emoji.svg"
                  }
                  style={{
                    height: 100,
                  }}
                />
              </div>
            ) : (
              " "
            )}
          </Box>

          <Box style={{zIndex:'20',position:'fixed',top:'600px',left:'200px'}}>
            {
              string.length>0?
              <h1 style={{fontWeight:'bold',fontSize:'24px'}}>
              Message
            </h1>
            :''
            }
            {
              string.length>0?
              <div style={{backgroundColor:'#A8DDFD',padding:'20px',color:'black',borderRadius:'10px'}}>
            

            
            {string.map(item => (
              <span key={item}>{item} &nbsp;</span>
            ))}
            </div>
            :''
            }
            
          </Box>

          <Box style={{zIndex:'20',position:'fixed',top:'480px',display:'flex',flexDirection:'column',margin:'30px',
          backgroundColor:'white'
          }}>
            <Input placeholder='Paste Call Code Here' />
          </Box>

          <Box style={{zIndex:'20',position:'fixed',top:'550px',display:'flex',flexDirection:'column',margin:'30px'}}>
              <div style={{textAlign:'center'}}>
                <h1 style={{fontSize:'32px',fontWeight:'bold'}}>{callcode}</h1>
              </div>
              
              <CopyToClipboard text={callcode}>
                <Button><IoCopy></IoCopy> Copy to clipboard</Button>
              </CopyToClipboard>
          </Box>

          <Box style={{zIndex:'20',position:'fixed',top:'700px'}}>
            <Button onClick={updatecall}>
              {addcall}
            </Button>
          </Box>
          
          {
            addcall=='Stop Call'?
            <Box bgColor="#fff">
            <Webcam style={{position:'fixed',right:'0',top:'0'}} />
          </Box>
          :''
          }
          

          <canvas id="gesture-canvas" ref={canvasRef} style={{}} />

          <Box
            id="singmoji"
            style={{
              zIndex: 9,
              position: "fixed",
              top: "50px",
              right: "30px",
            }}
          ></Box>

          <Image h="150px" objectFit="cover" id="emojimage" />
          {/* <pre className="pose-data" color="white" style={{position: 'fixed', top: '150px', left: '10px'}} >Pose data</pre> */}
        </Container>
        

        {/* <Stack id="start-button" spacing={4} direction="row" align="center">
          <Button
            leftIcon={
              camState === "on" ? (
                <RiCameraFill size={20} />
              ) : (
                <RiCameraOffFill size={20} />
              )
            }
            onClick={turnOffCamera}
            colorScheme="orange"
          >
            Camera
          </Button>
          <About />
        </Stack> */}
      </Box>
      
      
      
    </ChakraProvider>
  )
}
