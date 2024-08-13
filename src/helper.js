export function generateId() {
  const timestamp = Date.now().toString(36); // Convert current timestamp to base-36
  const randomString = Math.random().toString(36).substring(2, 10); // Generate a random base-36 string
  return `${timestamp}-${randomString}`;
}
