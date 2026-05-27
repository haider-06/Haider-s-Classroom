import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

export function formatTime(date: Date | string): string {
  return new Date(date).toLocaleTimeString(undefined, {
    hour: '2-digit',
    minute: '2-digit'
  })
}

export function formatDateTime(date: Date | string): string {
  return new Date(date).toLocaleString()
}

export function generateStudentId(): string {
  const year = new Date().getFullYear().toString().slice(-2);
  // In a real implementation, this would query the database for the latest ID
  // For now, we'll return a placeholder format
  return `${year}-1-1-001`;
}