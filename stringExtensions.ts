export function toTitleCase(name: string) {
  if (name == "hp") return "HP";
  else {
    var titleCase = name.charAt(0).toUpperCase() + name.slice(1);
    return titleCase;
  }
}

export function removeDashSplitter(s: string) {
  var s = s.split("-").join(" ");
  return s;
}

export function removeLineBreak(s: string) {
  var s = s.split("\n").join(" ");
  return toTitleCase(s);
}
