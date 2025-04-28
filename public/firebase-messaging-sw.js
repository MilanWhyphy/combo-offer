importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js"
);

let messaging = null;
let firebaseConfig = null;
let isInitialized = false;

// Handle config message
self.addEventListener("message", async (event) => {
  if (event.data?.type === "FIREBASE_CONFIG" && !isInitialized) {
    try {
      firebaseConfig = event.data.config;

      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      messaging = firebase.messaging();

      isInitialized = true;

      // Send acknowledgment back to main thread
      event.source.postMessage({
        type: "FIREBASE_CONFIG_ACK",
        success: true,
      });
    } catch (error) {
      console.error("Error initializing Firebase in SW:", error);
      event.source.postMessage({
        type: "FIREBASE_CONFIG_ACK",
        success: false,
        error: error.message,
      });
    }
  }
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// Handle background push notifications
self.addEventListener("push", (event) => {
  if (event.data) {
    const payload = event.data.json();
    const { title, body, icon, image } = payload.notification || {};

    const notificationOptions = {
      body,
      icon,
      image,
      data: payload,
    };

    event.waitUntil(
      self.registration.showNotification(
        title || "Notification",
        notificationOptions
      )
    );
  }
});

// Handle notification click event
self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  if (event.notification.data && event.notification.data.fcm_options) {
    const clickAction = event.notification.data.fcm_options.link;

    event.waitUntil(
      clients.openWindow(clickAction || "/") // Default action if no link is provided
    );
  }
});

// Handle subscription changes (optional)
self.addEventListener("pushsubscriptionchange", (event) => {
  event.waitUntil(
    // Perform re-subscription logic here if needed
    self.registration.pushManager
      .subscribe(event.oldSubscription.options)
      .then((newSubscription) => {
        // Send newSubscription to your server if needed
      })
  );
});
