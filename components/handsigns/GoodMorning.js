import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const GoodMorningSign = new GestureDescription('GoodMorning');
// good morning is h
// [
//     [
//       "Thumb",
//       "No Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Index",
//       "No Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Middle",
//       "No Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Ring",
//       "Full Curl",
//       "Horizontal Right"
//     ],
//     [
//       "Pinky",
//       "Full Curl",
//       "Horizontal Right"
//     ]
//   ]

//Thumb
GoodMorningSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
GoodMorningSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

//Index
GoodMorningSign.addCurl(Finger.Index, FingerCurl.NoCurl, 1);
GoodMorningSign.addDirection(Finger.Index, FingerDirection.HorizontalRight, 0.70);

//Middle
GoodMorningSign.addCurl(Finger.Middle, FingerCurl.NoCurl, 1);
GoodMorningSign.addDirection(Finger.Middle, FingerDirection.HorizontalRight, 0.70);

//Ring
GoodMorningSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
GoodMorningSign.addDirection(Finger.Ring, FingerDirection.HorizontalRight, 0.70);

//Pinky
GoodMorningSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
GoodMorningSign.addDirection(Finger.Pinky, FingerDirection.HorizontalRight, 0.70);

