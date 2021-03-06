import React from "react";
import Svg, { Path } from "react-native-svg";

export default function meShuffle(props) {
  return (
    <Svg
      height={props.size}
      width={props.size}
      fill={props.color}
      viewBox="0 0 489.9 489.9">
    <Path d="M391.2 469.994c3.4 3.4 7.8 5.1 12.3 5.1 4.3 0 8.7-1.6 12-4.9l69.3-67.8c3.3-3.2 5.1-7.6 5.1-12.3s-1.9-9-5.1-12.3l-69.3-67.8c-6.8-6.6-17.6-6.5-24.3.2-6.6 6.8-6.5 17.6.2 24.3l39.2 38.4h-43.5c-26.5 0-51.4-11.7-68.5-32l-151-205.5c-23.1-32.7-60.8-52.3-100.8-52.3H17.2c-9.5 0-17.1 7.7-17.1 17.2s7.7 17.1 17.1 17.1h49.6c28.9 0 56.2 14.1 73 38l151.6 206.3c.2.3.4.5.6.8 23.6 28.5 58.2 44.9 95.2 44.9h43.5l-39.2 38.4c-6.9 6.6-7 17.4-.3 24.2zM484.7 87.994l-69.7-68.3c-6.8-6.6-17.6-6.5-24.3.2-6.6 6.8-6.5 17.6.2 24.3l39.7 38.9h-43.5c-36.9 0-71.6 16.3-95.2 44.8-.2.2-.4.5-.6.8l-28.4 38.7c-5.6 7.6-4 18.4 3.7 24 3.1 2.2 6.6 3.3 10.1 3.3 5.3 0 10.5-2.4 13.8-7l28.1-38.2c17-20.4 41.9-32 68.5-32h43.5l-39.7 38.9c-6.8 6.6-6.9 17.5-.2 24.3 3.4 3.4 7.8 5.1 12.3 5.1 4.3 0 8.7-1.6 12-4.9l69.7-68.3c3.3-3.2 5.1-7.6 5.1-12.3s-1.8-9.1-5.1-12.3zM167.5 355.094l24.9-33.8c5.6-7.6 4-18.4-3.7-24-7.6-5.6-18.4-4-24 3.7l-25 34.1c-.1.2-.2.3-.3.5-16.7 23.4-43.9 37.4-72.7 37.4H17.1c-9.5 0-17.1 7.7-17.1 17.2s7.7 17.1 17.1 17.1h49.6c40 0 77.7-19.5 100.8-52.2z" />
  </Svg>
  );
}
