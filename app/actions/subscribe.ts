"use server";

export async function subscribeNewsletter(prevState: any, formData: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const email = formData.get("email");
    console.log("Newsletter subscription:", email);

    return {
        success: true,
        message: "Subscribed successfully!"
    };
}
