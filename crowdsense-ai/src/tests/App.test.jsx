import { describe, it, expect } from "vitest";

describe("Application", () => {
  it("Application test", () => {
    expect(true).toBe(true);
  });

  it("Basic calculation", () => {
    expect(10 + 5).toBe(15);
  });

  it("String test", () => {
    expect("CrowdSense AI").toContain("CrowdSense");
  });
});