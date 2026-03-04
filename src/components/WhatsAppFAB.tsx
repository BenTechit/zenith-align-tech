const WhatsAppFAB = () => {
  return (
    <a
      href="https://wa.me/972544991540"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95"
      style={{ backgroundColor: "#25D366" }}
    >
      {/* WhatsApp icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="28"
        height="28"
        fill="white"
        aria-hidden="true"
      >
        <path d="M16 2C8.268 2 2 8.268 2 16c0 2.478.67 4.797 1.836 6.787L2 30l7.43-1.812A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.54 11.54 0 0 1-5.885-1.607l-.422-.25-4.41 1.075 1.11-4.295-.275-.44A11.56 11.56 0 0 1 4.4 16C4.4 9.59 9.59 4.4 16 4.4S27.6 9.59 27.6 16 22.41 27.6 16 27.6zm6.39-8.658c-.35-.175-2.072-1.022-2.394-1.138-.32-.115-.554-.174-.787.175-.234.35-.905 1.138-1.11 1.371-.204.233-.408.263-.758.088-.35-.175-1.478-.545-2.815-1.737-1.04-.928-1.742-2.074-1.946-2.424-.203-.35-.022-.539.153-.713.157-.156.35-.408.524-.611.175-.204.233-.35.35-.583.116-.233.058-.437-.029-.612-.088-.175-.787-1.897-1.078-2.598-.284-.682-.573-.59-.787-.6l-.67-.012a1.286 1.286 0 0 0-.932.437c-.32.35-1.224 1.197-1.224 2.918s1.253 3.385 1.427 3.619c.175.233 2.466 3.765 5.977 5.277.835.36 1.487.575 1.995.737.838.267 1.601.229 2.204.139.672-.1 2.072-.847 2.365-1.664.29-.816.29-1.516.203-1.663-.086-.146-.32-.233-.67-.408z" />
      </svg>

      {/* Pulse ring */}
      <span
        className="absolute inset-0 rounded-full animate-ping opacity-30"
        style={{ backgroundColor: "#25D366", animationIterationCount: 1 }}
      />
    </a>
  );
};

export default WhatsAppFAB;
