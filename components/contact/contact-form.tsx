import React, { FC, useState, useEffect } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/notification";

type ContactData = {
  email: string;
  name: string;
  message: string;
};

type INotification = {
  status: string;
  title: string;
  message: string;
};

async function sendContactData(sendData: ContactData) {
  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(sendData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong");
  }
}

const ContactForm: FC = () => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [requestStatus, setRequestStatus] = useState<string>("");
  const [requestError, setRequestError] = useState<string>("");

  useEffect(() => {
    if (requestStatus === "success" || requestStatus === "error") {
      const timer = setTimeout(() => {
        setRequestError("");
        setRequestStatus("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [requestStatus]);

  async function sendMessageHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setRequestStatus("pending");

    try {
      await sendContactData({ email, name, message });
      setRequestStatus("success");
      setEmail("");
      setMessage("");
      setName("");
    } catch (error: any) {
      setRequestError(error.message);
      setRequestStatus("error");
    }
  }

  let notification: INotification | undefined;

  switch (requestStatus) {
    case "pending":
      notification = {
        status: "pending",
        title: "Sending message...",
        message: "You message is on its way",
      };
      break;

    case "success":
      notification = {
        status: "success",
        title: "Success!",
        message: "Successfully",
      };
      break;

    case "error":
      notification = {
        status: "error",
        title: "Error!",
        message: requestError,
      };
      break;

    default:
      notification = undefined;
      break;
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>

      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows={5}
            value={message}
            required
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
