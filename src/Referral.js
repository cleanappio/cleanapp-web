import axios from "axios";
import { redirect } from "react-router-dom";
import { isAndroid, isIOS } from 'react-device-detect';

export const cleanAppUrl = 'https://www.cleanapp.io';

export const referral = async () => {
  const refBackendAddress = 'http://localhost:8081/writereferral/';
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.cleanapp';
  const appStoreUrl = 'https://apps.apple.com/us/app/cleanapp/id6466403301';

  const searchParams = new URLSearchParams(window.location.search);

  const getStoreUrl = () => {
    if (isAndroid) {
      return playStoreUrl;
    } else if (isIOS) {
      return appStoreUrl;
    }
    return cleanAppUrl;
  }

  const getKeyData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    return {
      ip: res.data.IPv4,
      width: window.screen.width,
      height: window.screen.height,
    }
  };

  const keyData = await getKeyData();
  await fetch(refBackendAddress, {
    method: 'POST',
    mode: 'no-cors',
    body: JSON.stringify({
      refkey: keyData.ip + ':' + keyData.width + ':' + keyData.height,
      refvalue: searchParams.get('refid')
    }),
    headers: {
      'Content-type': 'application/json',
    }
  });

  console.log('Stored values successfully, redirecting to', getStoreUrl());
  return redirect(getStoreUrl());
}
