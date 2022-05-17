// import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";
import {
  createClient,
  createStream,
  createMicrophoneAndCameraTracks,
} from "agora-rtc-react";

const appId = "902b2e809ca54994ba1af501720d3c0f";

const token =
  "006d35d286913e24d7688fc2f43dbce9da1IABSuGdaGYzi4ssJD6RJTBLEz7z+3g6VsX+ePgW4TKtG/WTNKL8AAAAAEAD/8ff9YeqDYgEAAQBf6oNi";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
