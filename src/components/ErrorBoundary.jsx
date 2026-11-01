import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Intentionally avoid sending user data to a third-party service by default.
    if (import.meta.env.DEV) {
      console.error("Application render error:", error, info);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
          <section className="max-w-lg text-center">
            <p className="text-orange-400 text-xs tracking-[.2em] uppercase">V-Graph Studio</p>
            <h1 className="mt-4 text-3xl font-semibold">Something went wrong</h1>
            <p className="mt-3 text-neutral-400">The page could not be displayed. Please refresh and try again.</p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-6 rounded-full bg-orange-400 px-5 py-3 font-medium text-black hover:bg-orange-300"
            >
              Reload page
            </button>
          </section>
        </main>
      );
    }
    return this.props.children;
  }
}
