type ToastOptions = {
  title: string
  description?: string
  variant?: "default" | "destructive"
}

export const toast = ({ title, description, variant = "default" }: ToastOptions) => {
  // In a real implementation, this would use a toast library or context
  console.log(`Toast: ${title} - ${description ?? ""}`)

  // Create a temporary toast element
  const toastElement = document.createElement("div")
  const variantClass =
    variant === "destructive"
      ? "border-destructive/50 bg-destructive text-destructive-foreground"
      : "bg-background border"
  toastElement.className = `fixed top-4 right-4 rounded-md shadow-md p-4 max-w-md z-50 ${variantClass}`
  toastElement.innerHTML = `
    <div class="font-semibold">${title}</div>
    <div class="text-muted-foreground">${description ?? ""}</div>
  `
  document.body.appendChild(toastElement)

  // Remove after 3 seconds
  setTimeout(() => {
    toastElement.classList.add("opacity-0", "transition-opacity", "duration-300")
    setTimeout(() => {
      document.body.removeChild(toastElement)
    }, 300)
  }, 3000)
}

