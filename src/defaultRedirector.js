import { redirect } from "react-router-dom";
import { cleanAppUrl } from "./Referral";

export const defaultRedirector = async () => {
  return redirect(cleanAppUrl);
}
