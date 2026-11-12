import posthog from "posthog-js";

const posthogKey = import.meta.env.VITE_PUBLIC_POSTHOG_KEY;
const posthogHost = import.meta.env.VITE_PUBLIC_POSTHOG_HOST;
let initialized = false;

export function initPostHog() {
  if (posthogKey && posthogHost) {
    posthog.init(posthogKey, {
      api_host: posthogHost,
      defaults: "2026-01-30",
      capture_exceptions: true,
      logs: {
        serviceName: "muganga-sacco-web",
        environment: import.meta.env.MODE,
      },
    });
    initialized = true;
    return;
  }

  if (import.meta.env.DEV) {
    const missingVariable = !posthogKey
      ? "VITE_PUBLIC_POSTHOG_KEY"
      : "VITE_PUBLIC_POSTHOG_HOST";
    console.error(
      new Error(
        `${missingVariable} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${missingVariable} is configured`
      )
    );
  }
}

export function captureEvent(eventName, properties) {
  if (initialized) posthog.capture(eventName, properties);
}

export function captureException(error, properties) {
  if (initialized) posthog.captureException(error, properties);
}

export function logInfo(message, attributes) {
  if (initialized) posthog.logger.info(message, attributes);
}

export function logError(message, attributes) {
  if (initialized) posthog.logger.error(message, attributes);
}
