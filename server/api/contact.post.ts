import { contactSchema } from "@/lib/validators/contactSchema";
import type { ContactFormInput, ContactFormResponse } from "@/types/contact";

export default defineEventHandler(async (event) => {
  setResponseHeaders(event, {
    'Access-Control-Allow-Origin': 'https://klimov-static.onrender.com',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true'
  })
  
  const body = await readBody<ContactFormInput>(event);
  const { name, email, message } = body;

  if (!name || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: "All fields are required",
    });
  }

  try {
    const validData = await contactSchema.validate(body, { abortEarly: false });

    const { name, email, message } = validData;

    const formattedMessage = `
    📅 Date: ${new Date().toLocaleString()}
    👤 Name: ${name}
    📧 Email: ${email}
    💬 Message: ${message}`.trim();

    await $fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: formattedMessage,
        },
      }
    );

    return {
      success: true,
      message: "Great! Your message has been successfully sent.",
    };
  } catch (err: any) {
    if (err.name === "ValidationError") {
      throw createError({
        statusCode: 400,
        statusMessage: err.errors.join(". "),
      });
    }

    console.error("Error when sending to Telegram:", err);
    throw createError({
      statusCode: 500,
      statusMessage: "The message could not be sent. Please try again later.",
    });
  }
});
