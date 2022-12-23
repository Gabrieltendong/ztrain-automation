export const config = {
    baseUrl: "https://ztrain-web.vercel.app",
    browser: process.env.BROWSER || 'webkit',
    browserOptions: {
        // Not headless so we can watch test runs
        headless: false,
        // Slow so we can see things happening
        slowMo: 500,
    }
}