import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

export const eventsUrl =
  "https://66286bf454afcabd0735b491.mockapi.io/e-commerce-api";

export async function fetchData(url) {
  const response = await fetch(url);

  if (!response.ok) {
    const error = new Error("An error occurred while fetching the events");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  const data = await response.json();

  return data;
}

export async function createCustomer(customerData) {
  const url = `${eventsUrl}/e-commerce-api`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customerData),
  });

  if (!response.ok) {
    const error = new Error("An error occurred while creating the customer");
    error.info = await response.json();
    error.code = response.status;
    throw error;
  }

  return response.json();
}
