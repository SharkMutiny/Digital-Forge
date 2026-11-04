function normalizeUnits(manifest) {
  const newManifest = { ...manifest };
  if (newManifest.unit === "lb") {
    newManifest.weight = newManifest.weight * 0.45;
    newManifest.unit = "kg";
  }
  return newManifest;
}

function validateManifest(manifest) {
  const errors = {};
  if (!manifest.hasOwnProperty("containerId")) {
    errors.containerId = "Missing";
  } else if (typeof manifest.containerId !== "number" || manifest.containerId <= 0 || !Number.isInteger(manifest.containerId)) {
    errors.containerId = "Invalid";
  }
  if (!manifest.hasOwnProperty("destination")) {
    errors.destination = "Missing";
  } else if (typeof manifest.destination !== "string" || manifest.destination.trim() === "") {
    errors.destination = "Invalid";
  }
  if (!manifest.hasOwnProperty("weight")) {
    errors.weight = "Missing";
  } else if (typeof manifest.weight !== "number" || manifest.weight <= 0 || Number.isNaN(manifest.weight)) {
    errors.weight = "Invalid";
  }
  if (!manifest.hasOwnProperty("unit")) {
    errors.unit = "Missing";
  } else if (manifest.unit !== "kg" && manifest.unit !== "lb") {
    errors.unit = "Invalid";
  }
  if (!manifest.hasOwnProperty("hazmat")) {
    errors.hazmat = "Missing";
  } else if (typeof manifest.hazmat !== "boolean") {
    errors.hazmat = "Invalid";
  }
  return errors;
}

function processManifest(manifest) {
  const errors = validateManifest(manifest);
  if (Object.keys(errors).length === 0) {
    console.log(`Validation success: ${manifest.containerId}`);
    const normalizedManifest = normalizeUnits(manifest);
    console.log(`Total weight: ${normalizedManifest.weight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(errors);
  }
}