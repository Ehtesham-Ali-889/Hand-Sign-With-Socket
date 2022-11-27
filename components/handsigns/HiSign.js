import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const hiSign = new GestureDescription('Hi');
//  hi is b
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
hiSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
hiSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);


//Index
hiSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
hiSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

//Middle
hiSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
hiSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

//Ring
hiSign.addCurl(Finger.Ring, FingerCurl.NoCurl, 1);
hiSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);


//Pinky
hiSign.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1);
hiSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);


