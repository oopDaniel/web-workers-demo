 // Image manipulation logic from github.com/jwill/psychic-lana

function manipulate(type, r, g, b, a) {
  switch (type) {
    case "invert":
      return [255 - r, 255 - g, 255 - b, a];
    case "chroma":
      var max = Math.max(r, Math.max(g, b));
      return max === g ? [0, 0, 0, 0] : [r, g, b, a];
    case "greyscale":
      var y = (0.3 * r) + (0.59 * g) + (0.11 * b);
      return [y, y, y, a];
    case "vibrant":
      var amt, avg, bs, gs, mx, rs;
      avg = (r + g + b) / 3.0;
      mx = Math.max(r, Math.max(g, b));
      amt = (mx / 255 * avg / 255) * (-0.4 * 3.0);
      rs = r + (amt * (mx - r));
      gs = g + (amt * (mx - g));
      bs = b + (amt * (mx - b));
      return [rs, gs, bs, a];
    default:
      console.log("Not a valid image manipulation");
      break;
  }
}