import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const NoseSign = new GestureDescription('Running_Nose');
//  running nose is d
// [
//     [
//       "Thumb",
//       "Half Curl",
//       "Vertical Up"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Vertical Up"
//     ],
//     [
//       "Middle",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Vertical Up"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Vertical Up"
//     ]
//   ]

//Thumb
NoseSign.addCurl(Finger.Thumb, FingerCurl.HalfCurl, 1.0);
NoseSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Index
NoseSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
NoseSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
NoseSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
NoseSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
NoseSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
NoseSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
NoseSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
NoseSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

