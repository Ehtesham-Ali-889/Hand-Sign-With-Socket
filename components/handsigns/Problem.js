import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const ProblemSign = new GestureDescription('Problem');
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Diagonal Up Right"
//     ],
//     [
//       "Index",
//       "Full Curl",
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
//       "Diagonal Up Left"
//     ]
//   ]

//Thumb
ProblemSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
ProblemSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);
// ProblemSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Index
ProblemSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
ProblemSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);
// ProblemSign.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 0.70);

//Middle
ProblemSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
ProblemSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);
// ProblemSign.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.70);

//Ring
ProblemSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
ProblemSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

//Pinky
ProblemSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
ProblemSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

