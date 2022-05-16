// import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";
import { AgoraVideoPlayer, createClient, createMicrophoneAndCameraTracks, createScreenVideoTrack } from "agora-rtc-react";

const appId = "902b2e809ca54994ba1af501720d3c0f";
const token = "006d35d286913e24d7688fc2f43dbce9da1IACF9ncH4koBlf1SJF6jjSkfhba4p7IWDVu0SOVvQ2EHnGTNKL8AAAAAEAD/8ff9IaKDYgEAAQAhooNi";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
