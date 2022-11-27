import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const IhaveSign = new GestureDescription('I_have');
// i have is q
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Vertical Down"
//     ],
//     [
//       "Index",
//       "Half Curl",
//       "Vertical Down"
//     ],
//     [
//       "Middle",
//       "Half Curl",
//       "Vertical Down"
//     ],
//     [
//       "Ring",
//       "Half Curl",
//       "Vertical Down"
//     ],
//     [
//       "Pinky",
//       "Half Curl",
//       "Diagonal Down Left"
//     ]
//   ]

//Thumb
IhaveSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
IhaveSign.addDirection(Finger.Index, FingerDirection.DiagonalDownRight, 0.70);

//Index
IhaveSign.addCurl(Finger.Index, FingerCurl.HalfCurl, 1);
IhaveSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

//Middle
IhaveSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
IhaveSign.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.70);

//Ring
IhaveSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
IhaveSign.addDirection(Finger.Ring, FingerDirection.DiagonalDownRight, 0.70);

//Pinky
IhaveSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
IhaveSign.addDirection(Finger.Pinky, FingerDirection.DiagonalDownRight, 0.70);

