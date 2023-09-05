module.exports = {
    now: () =>
      new Date()
        .toLocaleDateString("de", {
          day: "2-digit",
          year: "numeric",
          month: "short",
        })
        .replace(/\s/g, ""),
    getDaysSince: (date) =>
      Math.floor((Date.now() - new Date(date).getTime()) / (60 * 60 * 24 * 1000)),
  };
  