"use server";

export async function submitContact(prevState: any, formData: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const email = formData.get("email");
    const message = formData.get("message");

    console.log("Contact message from:", email, message);

    return {
        success: true,
        message: "Message sent successfully!"
    };
}
