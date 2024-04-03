export function generateSlug(input: string): string {
  // Convert input string to lowercase
  let slug = input.toLowerCase();
  // Replace spaces with hyphens
  slug = slug.replace(/\s+/g, "-");
  // Remove non-alphanumeric characters except hyphens
  slug = slug.replace(/[^\w\s-]/g, "");
  // Remove leading and trailing hyphens
  slug = slug.replace(/^-+|-+$/g, "");
  // Replace consecutive hyphens with single hyphen
  slug = slug.replace(/-{2,}/g, "-");
  return slug;
}
