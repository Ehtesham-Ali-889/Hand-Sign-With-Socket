import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const OkSign = new GestureDescription('OK');
// Ok is F
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Full Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Middle",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "No Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
OkSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
OkSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Index
OkSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
OkSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

//Middle
OkSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
OkSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
OkSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
OkSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
OkSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
OkSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

