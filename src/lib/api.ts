// Contact form submission interface
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Use proxy in development, or explicit URL in production
const API_URL = import.meta.env.VITE_API_URL || 
  (import.meta.env.DEV ? '' : 'https://karama-backend-y138.onrender.com');

export async function submitContactForm(data: ContactFormData) {
  try {
    const response = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: result.error || 'Failed to submit contact form',
      };
    }

    return {
      success: true,
      data: result.data,
      message: result.message,
    };
  } catch (error: any) {
    console.error('Error submitting contact form:', error);
    return {
      success: false,
      error: error.message || 'Network error. Please check your connection and try again.',
    };
  }
}

