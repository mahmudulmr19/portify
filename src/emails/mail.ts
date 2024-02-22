import axios from "axios";

class Email {
  constructor() {}
  async sendMail(to: string, subject: string, html: string) {
    const response = await axios.post("https://react.email/api/send/test", {
      to,
      subject,
      html,
    });
    if (response.status === 429) {
      throw new Error("To many request in email");
    }
  }
}

export const mail = new Email();
