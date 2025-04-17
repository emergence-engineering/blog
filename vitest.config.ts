import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom', // Use jsdom for DOM simulation
    globals: true, // Optional: Makes Vitest globals available without importing
    setupFiles: [], // Optional: Add setup files if needed
  },
});
