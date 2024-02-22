import { render } from "@react-email/render";
import { VerifyEmail } from "@/emails";

export function VerifyEmailHtml(link: string) {
  return render(<VerifyEmail link={link} />);
}
