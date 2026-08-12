export function useToast() {
  return {
    toast: ({ title, description }) => {
      // Logs the message to the console
      console.log(`Toast Triggered: ${title} - ${description}`);
      
      // Shows a standard browser alert for user feedback
      alert(`${title}\n${description || ''}`);
    }
  };
}